from django.shortcuts import render, HttpResponse, redirect
from .models import Email
from django.contrib import messages  #Similar to flash in flask
from django.urls import reverse  #reverse resolution of url in code. In template, you use 'url' instead

# Create your views here.
def index(req):
    context = {
        "emails": Email.emailManager.all()
    }
    return render(req, 'email_validation/index.html', context)

def add_email(request):
    if Email.emailManager.isValidEmail(request.POST['email']):
        Email.emailManager.create(email_name_id=request.POST['email'])
        messages.success(request, 'The email address you entered ' + request.POST['email']+ ' is a VALID email address! Thank you!')
        print ("Success!!!!")
        return redirect (reverse('index'))  #You could have used redirect('/success')
    else:
        print ('Failed!!!!')
        messages.warning(request, 'Invalid email!')
        return redirect(reverse('index'))

def delete_email(request, id):
    context = {
        "email": Email.emailManager.get(id=id)
    }
    return render(request, 'email_validation/delete.html', context)

def delete_this(request, id):
    this = Email.emailManager.get(id=id)
    this.delete()
    return redirect(reverse('index'))
