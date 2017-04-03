from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
from django.urls import reverse

# Create your views here.
def index(request):
    return render(request, 'login_registration/index.html')

def register(request):
    reg_check = User.objects.is_valid_user_registration(request.POST['first_name'], request.POST['last_name'], request.POST['email'], request.POST['password'], request.POST['confirm_password'])

    if reg_check == False:
        messages.error(request, 'Invalid Registration Input')
        return redirect(reverse('index'))
    else:
        messages.success(request, 'Successful Registration!')
        request.session['current_user'] = reg_check['isValidRegisteredUser']
        return redirect('/success/{}'.format(request.session['current_user']))


def login(request):
    login_check = User.objects.is_valid_user_login(request.POST['log_email'], request.POST['log_password'])

    if login_check == False:
        messages.error(request, 'Invalid Login Info')
        return redirect(reverse('index'))
    else:
        messages.success(request, 'Successful Login')
        request.session['current_user'] = login_check['isValidLoginUser']
        return redirect('/success/{}'.format(request.session['current_user']))

def success(request, id):
    context = {
    'user': User.objects.get(id=id)
    }
    return render(request, 'login_registration/success.html', context)
