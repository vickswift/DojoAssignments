from flask import Flask, render_template, request, redirect, session, flash, url_for
import re
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import os

NAME_REGEX = re.compile(r'^[a-zA-Z]*$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
PASSWORD_REGEX = re.compile(r'^[a-zA-Z0-9]{8,}$')

app = Flask(__name__)
mysql = MySQLConnector(app, 'wall')
bcrypt = Bcrypt(app)
# app.secret_key = "Setting-it-randomly-at-the-bottom"

@app.route('/', methods=['GET', 'POST'])
def index():
	if 'id' in session:
		print ("current id in session", session['id'])
	else:
		print 'no session'
		all_users = mysql.query_db("SELECT * FROM users")
		return render_template("login-registration.html", all_users=all_users)
@app.route('/login', methods=["GET",'POST'])
def login():
	if validate_login_info() == False:
		session['logged_in'] = False
		return redirect('/login')
	else:
		user_info = mysql.query_db("SELECT * FROM users WHERE email = '{}'".format(session['email']))
		# for user in all_users:
			# if user['email'] == request.form['email']:

		if user_info:
			password = request.form['password']

			if bcrypt.check_password_hash(user[0]['pw_hash'], password):
				# login user
				session['logged_in'] = True
				session['id'] = user['id']
				session['first_name'] = user['first_name']
				return redirect('/wall')
			else:
				# set flash error message and redirect to login page
				flash("Incorrect username and password")
				return redirect("/login")
		else:
			flash("No user with that email exists. Please sign up")
			redirect('/')
	return redirect('/wall')

@app.route("/register", methods=['POST'])
def register():
	# print ('*12')*50
	if validate() == False:
		session['logged_in'] = False
		return redirect("/")
		# print ('*12')*50
	else:
		# print ('*777')*50
		flash('Thanks for registration ')
		create_user_in_db()
		return redirect('/wall')

# Welcome to the wall endpoints
@app.route('/process_wall', methods=['get', 'post'])
def process_wall():
	text_area_message = request.form['text_area_message']

	insert_query = "INSERT INTO messages(user_id, message, created_at, updated_at)\
	VALUES(:user_id,:message, NOW(), NOW())"
	query_data = {'user_id': session['user'], 'message': text_area_message }
	mysql.query_db(insert_query, query_data)
	print "INSERTED MESSAGES!!!"
	return redirect('/wall')

# @app.route('/wall', methods=['GET','POST'])
# def show():
# 	messages = mysql.query_db("SELECT * FROM messages")
# 	print messages
# 	return render_template('post-wall.html', messages=messages)

@app.route('/create_message')
def create_message():
	userinput = request.form['message']
	if len(userinput)>0:
		insert_query = "INSERT INTO messages(user_id, message, created_at, updated_at)\
		VALUES (:id, :message, NOW(), NOW())"
		data = {
			'id': session['id'],
			'message': userinput
		}
		mynewuserid = msql.query_db(insert_query, data)
		print "got the new message id", mynewuserid
	return redirect('/wall')

@app.route('/wall', methods=['GET', 'POST' ])
def wall():
	if 'id' in session:
		query = "SELECT * FROM users WHERE id={}".format(session['id'])
		username = mysql.query_db(query)[0]['first_name']
		messages = mysql.query_db("SELECT * FROM messages")
		return render_template('post-wall.html', username = username, messages=messages)

@app.route('/log_out')
def log_out():
	session.pop('id')
	flash('You have now logged out. Have a great day!')
	return redirect('/')


# Utility Methods
def validate():
    errors = 0

    # Store form input values in respective variables below
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    confirm_password = request.form['confirm_password']

    # Check for first_name
    if len(first_name) < 1:
        flash("First name cannot be blank!")
        errors += 1
    elif not NAME_REGEX.match(first_name) and len(first_name) < 2:
        flash("First name should be letters, provide atleast 2!")
        errors += 1
    else:
        session['first_name'] = first_name

    # Check for last_name
    if len(last_name) < 1:
        flash("Last name cannot be blank!")
        errors += 1
    elif not NAME_REGEX.match(last_name) and len(last_name) < 2:
        flash("Last name should be letters, provide atleast 2!")
        errors += 1
    else:
        session['last_name'] = last_name

    # Check for email
    if len(email) < 1:
        flash("Email cannot be blank!")
        errors += 1
    elif not EMAIL_REGEX.match(email):
        flash("Invalid email. Please provide correct email!")
        errors += 1
    else:
        session['email'] = email

    # Check for password
    if len(password) < 1:
        flash("Password cannot be blank!")
        errors += 1
    elif not PASSWORD_REGEX.match(password):
        flash("Please provide a strong password, atleast 8!")
        errors += 1
    else:
        session['password'] = password

    # Confirm password
    if len(confirm_password) < 1:
        flash("Password cannot be blank!")
        errors += 1
    elif not PASSWORD_REGEX.match(confirm_password) and (password != confirm_password):
        flash("Confirm password should match original password")
        errors += 1
    else:
        session['confirmPassword'] = confirm_password

     #Check for errors
    if errors > 0:
        session['password'] = ''
        session['confirmPassword'] = ''
        return False
    else:
        return True

def validate_login_info():
	errors = 0

	email = request.form['email']
	password = request.form['password']

	# Check for email
	if len(email) < 1:
		flash("Email cannot be blank!")
		errors += 1
	elif not EMAIL_REGEX.match(email):
		flash("Invalid email. Please provide correct email!")
		errors += 1
	else:
		session['email'] = email

	# Check for password
	if len(password) < 1:
		flash("Password cannot be blank!")
		errors += 1
	elif not PASSWORD_REGEX.match(password):
		flash("Please provide a strong password, atleast 8!")
		errors += 1
	else:
		session['password'] = password

	if errors > 0:
		session['password'] = ''
		return False
	else:
		return True


def create_user_in_db():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']

    # run validations and if they are successful we can create the password hash with bcrypt
    pw_hash = bcrypt.generate_password_hash(password)
    # now we insert the new user into the database
    insert_query = "INSERT INTO users(first_name, last_name, email, pw_hash, created_at, updated_at)\
    VALUES (:first_name, :last_name, :email, :pw_hash, NOW(), NOW())"
    query_data = { 'first_name': first_name, 'last_name': last_name, 'email': email, 'pw_hash': pw_hash }
    newid = mysql.query_db(insert_query, query_data)
	# session['id'] = newid
    # redirect to success page

if __name__ == "__main__":
    app.secret_key = os.urandom(12)
    app.run(debug=True)
