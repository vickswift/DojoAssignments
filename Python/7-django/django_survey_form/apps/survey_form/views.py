from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'survey_form/index.html')

def survey_process(request):
    if request.method == "POST":
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['message'] = request.POST['message']

    return redirect('/results')

def survey_results(request):
    print (request.session)
    return render(request, 'survey_form/user-info.html')
