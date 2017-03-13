from __future__ import unicode_literals
from django.db import models
from django.contrib import messages
import bcrypt
import re

NAME_REGEX = re.compile(r'^[a-zA-Z]*$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
PASSWORD_REGEX = re.compile(r'^[a-zA-Z0-9]{8,}$')


# Create your models here.
class UserManager(models.Manager):
    def isValidUserRegistration(self, userInfo, request):
        errors = 0

        # first_name = request.form['first_name']
        # last_name = request.form['last_name']
        # email = request.form['email']
        # confirm_password = request.form['confirm_password']
        # password = request.form['password']

        # Check for first_name
        if not userInfo['first_name'].isalpha():
            messages.warning(request, 'First name contains non-alpha character(s)')
            errors += 1
        if len(userInfo["first_name"]) < 1:
            messages.warning(request, "First name cannot be blank!")
            errors += 1
            if not NAME_REGEX.match(userInfo['first_name']) and len(userInfo['first_name']) < 2:
            messages.warning(request, "First name should be letters, provide atleast 2!")
            errors += 1

        # Check for last_name  //
        # Commented below to allow people with hyphenated last name to register
        # if not userInfo['last_name'].isalpha():
        #     messages.warning(request, 'Last name contains non-alpha character(s)')
        #     errors += 1
        if len(userInfo["last_name"]) < 1:
            messages.warning(request, "Last name cannot be blank!")
            errors += 1
        if not NAME_REGEX.match(userInfo["last_name"]) and len(userInfo["last_name"]) < 2:
            messages.warning(request, "First name should be letters, provide atleast 2!")
            errors += 1

        # Check for email
        if len(userInfo['email']) < 1:
            messages.warning(request, "Email cannot be blank!")
            errors += 1
        if not EMAIL_REGEX.match(userInfo['email']):
            messages.warning(request, "Invalid email. Please provide correct email!")
            errors += 1
        # if User.objects.filter(email = userInfo['email']):
		# 	messages.error(request, "This email already exists in our database.")
		# 	errors += 1

        # Check for password
        if len(userInfo['password']) < 1:
            messages.warning(request, "Password cannot be blank!")
            errors += 1
        if not PASSWORD_REGEX.match(userInfo['password']):
            messages.warning(request, "Please provide a strong password, atleast 8!")
            errors += 1

        # Confirm password
        if len(userInfo["confirm_password"]) < 1:
            messages.warning(request, "Password cannot be blank!")
            errors += 1
        if not PASSWORD_REGEX.match(userInfo["confirm_password"]) and (userInfo["password"] != userInfo["confirm_password"]):
            messages.warning(request, "Confirm password should match original password")
            errors += 1

        #Check for errors
        if errors > 0:
            return False
        else:
            messages.success(request, "Success! Welcome, " + userInfo['first_name'] + "!")
            hashed = bcrypt.hashpw(userInfo['password'].encode(), bcrypt.gensalt())
            User.objects.create(first_name = userInfo['first_name'], last_name = userInfo['last_name'], email = userInfo['email'], password = hashed)
            return True

    def isValidUserLogin(self, userInfo, request):
        errors = 0
        if User.objects.filter(email = userInfo['email']):
            hashed = User.objects.get(email = userInfo['email']).password
            hashed = hashed.encode('utf-8')
            password = userInfo['password']
            password = password.encode('utf-8')
            if bcrypt.hashpw(password, hashed) == hashed:
                messages.success(request, "Success! Welcome, " + User.objects.get(email = userInfo['email']).first_name + "!")
            else:
                messages.warning(request, "Unsuccessful login. Incorrect password")
                errors += 1
        else:
            messages.warning(request, "Invalid login credentials. Please try again.")
            errors += 1

        if errors > 0:
            return False
        else:
            return True

class User(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
