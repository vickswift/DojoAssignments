from django.shortcuts import render, redirect
from .models import Expenditure
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
    return render(request, 'crm/index.html')

# Create your views here.

def home(request):
    return render(request, 'crm/home.html')

def index(request):
    context = {
    "expenditure": Expenditure.objects.all()
    }
    return render(request, 'crm/index.html', context)

def add_expenditure(request):
    if request.method == "POST":
        # using ORM
        Expenditure.objects.create(playstation_sales=request.POST['playstation_sales'],\
        playstation_expenses=request.POST['playstation_expenses'],\
        xbox_sales=request.POST['xbox_sales'], xbox_expenses=request.POST['xbox_expenses'],\
        accessory_sales=request.POST['accessory_sales'],\
        accessory_expenses=request.POST['accessory_expenses'],total_sales=request.POST['total_sales'],\
        total_expenses=request.POST['total_expenses'])
    return redirect(reverse('index'))

def delete_expenditure(request, id):
    context = {
        "expenditure": Expenditure.objects.get(id=id)
    }
    return render(request, 'crm/delete.html', context)

def delete_this(request, id):
    this = Expenditure.objects.get(id=id)
    this.delete()
    return redirect(reverse('index'))


# def clear_page(request, id):
#     context = {
#         "expenditure": Expenditure.objects.all()
#     }
#     return render(request, 'crm/clear_all.html', context)
#
# def clear_all(request, id):
#     context = {
#         "expenditure": Expenditure.objects.all()
#     }
#     return render(request, 'crm/delete.html', context)
