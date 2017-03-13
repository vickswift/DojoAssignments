from django.shortcuts import render

# Create your views here.
def index(request):
	if 'displayAll' not in request.session:
		request.session['displayAll'] = False
	return render(request, "turtles/index.html")

def showAll(request):
    context = {
        'display_ninja': "all"
    }
	# displayAll = True
    return render(request, 'turtles/ninja.html', context)

def ninja(request, color):
    context = {
		'display_ninja': color
        # request.session['displayAll'] : False
    }
    return render(request, "turtles/ninja.html", context)

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/ninja')
# def ninja():
#     displayAll = True
#     return render_template('ninja.html', displayAll=displayAll)
#
# @app.route('/ninja/<color>')
# def getColor(color):
#     displayAll = False
#     return render_template('ninja.html', color=color, displayAll=displayAll)
