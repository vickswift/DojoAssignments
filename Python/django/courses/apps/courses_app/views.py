from django.shortcuts import render, redirect
from .models import Course

# Create your views here.
def index(request):
    context = {
    "courses": Course.objects.all()
    }
    return render(request, 'courses_app/index.html', context)

def add_course(request):
    if request.method == "POST":
        # using ORM
        Course.objects.create(name=request.POST['coursename'], description=request.POST['course_desc'])
    return redirect('/')

def delete_course(request, id):
    context = {
        "course": Course.objects.get(id=id)
    }
    return render(request, 'courses_app/delete.html', context)

def delete_this(request, id):
    this = Course.objects.get(id=id)
    this.delete()
    return redirect('/')
