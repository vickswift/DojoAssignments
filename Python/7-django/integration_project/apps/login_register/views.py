from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
from django.core.urlresolvers import reverse

# User login page. if user already logged in, gets redirected to success page
def index(request):
    if "id" in request.session:
        request.session['logged_in'] = True
        # return redirect(reverse('success'))
        return redirect('/success')
    return render(request, 'login_register/index.html')

# this part processes the submitted registration
def process_registration(request):
    if request.method != "POST":
        return redirect(reverse('index'))
    else:
        user_info = User.objects.isValidRegistration(request.POST)
        if user_info[0]:  # same as saying if user_info[0] == True
            request.session['id'] = user_info[1].id
            print ("got session id", request.session['id'])
            return redirect(reverse('success'))
        else:
            for error_message in user_info[1]:
                messages.error(request, error_message)
            return redirect(reverse('index'))

# this logs in the user
def login(request):
    if request.method != "POST":
        return redirect(reverse('index'))
    else:
        user_info = User.objects.ValidLogin(request.POST)
        if user_info[0] == True:
            # request.session['logged_in']
            request.session['id'] = user_info[1].id


            return redirect(reverse('success'))
        else:
            for error_message in user_info[1]:
                messages.error(request, error_message)
            return redirect(reverse('index'))

#Take us to the success page
def success(request):
    if "id" not in request.session:
        request.session['logged_in'] = False
        return redirect(reverse('index'))  #Same as 'return redirect('/')'
    try:
        user = User.objects.get(id=request.session["id"])
    except KeyError:
        messages.warning(request, "User not found.")
        return redirect(reverse('index'))

    context = {
     "user": user
    }
    return render(request, 'login_register/success.html', context)

    # def logout(request):
    # if "id" in request.session:
    #     request.session.pop("id")
    # return redirect('/')

# this logs out the user
def logout(request):
    request.session.clear()
    return redirect (reverse('index'))
