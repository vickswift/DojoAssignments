from flask import Flask,render_template, request, redirect, url_for
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app, 'full_friends')

# Displaying Results
@app.route('/')
def index():
    friends = mysql.query_db("SELECT * FROM friends")
    print friends
    return render_template('index.html', friends=friends)

# Creating Records
@app.route('/friends', methods=['POST'])
def create():
    query = "INSERT INTO friends(first_name, last_name, email, created_at, updated_at)\
    VALUES(:first_name, :last_name, :email, NOW(), NOW())"
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'email': request.form['email'],
           }
    mysql.query_db(query, data)
    return redirect('/')

# Edit a friend
@app.route('/friends/<friend_id>/edit', methods=['get'])
def edit(friend_id):
    query = "SELECT * FROM friends WHERE id = :id"
    someData = {"id":friend_id}
    edit_friend = mysql.query_db(query, someData)
    return render_template("edit.html", edit_friend = edit_friend)

# Update a friend's record
@app.route('/friends/<friend_id>', methods=["GET",'POST'])
def update(friend_id):
    query = "UPDATE friends \
             SET first_name = :first_name, last_name = :last_name, email = :email \
             WHERE id = :id"
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'email': request.form['email'],
             'id': friend_id
           }
    mysql.query_db(query, data)
    return redirect('/')

# Delete a friend
@app.route("/friends/<friend_id>/delete", methods=["POST"])
def destroyed(friend_id):
    query = "DELETE FROM friends WHERE id = :specific_id"
    data = {"specific_id": friend_id}
    mysql.query_db(query, data)
    return redirect("/")


app.run(port=5000, debug=True)
