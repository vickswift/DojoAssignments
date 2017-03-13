from django.shortcuts import render
from .models import User, Message, Comment

# Create your views here.
def index(req):
    # User.objects.create(first_name='Vick', last_name='Swift', email='a@b.com', password='1234')
    # Message.objects.create(title="The Blog", message="This bootcamp thing is cool!", user_id=1)
    # Comment.objects.create(message="Awesome kid", user=2, message=1)
    #
    # user = User.objects.all()
    # message = Message.objects.all()
    # comment = Comment.objects.all()
    #
    # print (user)
    # print (message)
    # print (comment)

    return render(req, 'wall_ERD/index.html')
