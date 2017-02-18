from django.shortcuts import render #HttpResponse
import datetime
from django.utils.timezone import localtime, now
# Create your views here.
def index(request):
    print ("*"*50)

    # now = datetime.datetime.utcnow().replace(tzinfo=utc)
    local = localtime(now())

    current_date = {
    'local_time': local
    }
    return render(request, 'timedisplay/index.html', current_date)
