from django.shortcuts import render, redirect
from django.urls import reverse
from .models import User

# Create your views here.
def index(abc):
    return render(abc, "login_registration/index.html")

def register(request):
    if User.objects.isValidUserRegistration(request.POST, request):
        return redirect (reverse('success'))
    else:
        return redirect(reverse('index'))

def login(request):
    if User.objects.isValidUserLogin(request.POST, request):
        return redirect(reverse('success'))
    else:
        return redirect(reverse('index'))

def success(request):
    # context = {
    #     "user_first_name":User.objects.get(first_name=request.POST['first_name'])
    # }
    # request.session['first_name'] = request.POST['first_name']
    return render(request, 'login_registration/success.html')
