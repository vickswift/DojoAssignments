# import Flask
from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
# the "re" module will let us perform some regular expression operations
import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'emaildb')


@app.route('/', methods=['GET'])
def index():
    emails = mysql.query_db("SELECT * FROM addresses")
    print emails
    return render_template('index.html', email_list=emails)

# Inserting Records
@app.route('/addlist', methods=['POST'])
def create():
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Not a valid Email Address!")
    else:
        flash("Success!")

        # print request.form['email']

        # add a email to the database!
         # Write query as a string. Notice how we have multiple values
        # we want to insert into our query.
        query = "INSERT INTO addresses (email, created_at, updated_at) \
        VALUES (:email, NOW(), NOW())"
        # We'll then create a dictionary of data from the POST data received.
        data = {
                 'email': request.form['email']
               }
        # Run query, with dictionary values injected into the query.
        mysql.query_db(query, data)

    return redirect('/')

# Delete email from list
@app.route('/remove_email/<email_id>', methods=['POST'])
def delete(email_id):
    query = "DELETE FROM addresses WHERE id = :id"
    data = {'id': email_id}
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
