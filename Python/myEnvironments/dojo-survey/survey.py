from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=["get","post"])
def users():
    fname = request.form["name"]
    fdojos = request.form["Dojos"]
    flanguage= request.form["Language"]
    fcomment = request.form["Comment"]

    return render_template("users.html", sName=fname, sDojos=fdojos,sLanguage=flanguage,sComment=fcomment)

app.run(port=5000, debug=True)
