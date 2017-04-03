from django.shortcuts import render, redirect
import random
from datetime import datetime

# Create your views here.
def index(request):
    if 'totalgold' not in request.session:
        request.session['totalgold'] = 0
    if 'adventures' not in request.session:
        request.session['adventures'] = []
    return render(request, 'ninja_gold/index.html')

def process_money(request):
    if request.POST['building'] == 'farm':
        newgold = random.randrange(10,21)
    elif request.POST['building']=='cave':
        newgold = random.randrange(5,11)
    elif request.POST['building']=='house':
        newgold = random.randrange(2,6)
    else:
        newgold = random.randrange(-50,51)
    request.session['totalgold'] += newgold
    time = datetime.now().strftime("%Y/%m/%d %I:%M %p")

    if newgold > 0:
        adventure = "Earned {} at the {}! {}".format(newgold, request.POST['building'], time)
    else:
        adventure = "Entered a {} and lost {} gold ...Ouch".format(request.POST['building'], -1 * newgold)
    request.session['adventures'].append(adventure)
    print ("Adventures array", request.session['adventures'])

    return redirect('/')
