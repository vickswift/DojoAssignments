from django.shortcuts import render #HttpResponse
import datetime
from datetime import datetime

def index(request):
    date = datetime.now().date().strftime('%B %-d, %Y')
    time = datetime.now().time().strftime('%-I:%M %p')
    context = {
        'datetime' : [
            {'local_date': date},
            {'local_time': time},
        ]
    }
    return render(request, 'timedisplay/index.html', context)
