from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/results', methods=['POST'])
def create_user():
    # print ("Got Post Info")
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    message = request.form['message']
    # return render_template('user-info.html', name=name)
    return render_template("user-info.html", name=name, location=location, language=language, message=message)


app.run(debug=True) # run our server
