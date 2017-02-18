from django.shortcuts import render, redirect
# Create your views here.
def index(request):
  print ("*"*50)
  return render(request, 'first_app/index.html')

def users(request):
  print ("~"*50)
  print (request.method)
  return render(request, 'first_app/show_users.html')

def create(request):
    print(request.method)
    if request.method == 'POST':
        print ('*'*50)
        print(request.POST)
        print ('*'*50)
        request.session['name'] = request.POST['first_name']
        return redirect('/')
    else:
        return redirect('/')

def show(request, id):      #id should match exactly as the variable given to passed to the URL route
    context = {
    "id" : id
    }
    return render(request, "first_app/route-parameter.html", context)
