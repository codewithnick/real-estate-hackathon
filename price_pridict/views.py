from django.shortcuts import render , redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages
# Create your views here.
def sign_in(request):
    if request.method=='POST':
        uname=request.POST['uname']
        password=request.POST['password']
        user=auth.authenticate(username=uname,password=password)
        if user is None:
            return redirect('sign_up')
        if user is not None:
            auth.login(request,user)
            return redirect('home')
    else:
        return render(request,'sign_in.html')
def logout(request):
    auth.logout(request)
    return redirect('sign_in')
def sign_up(request):
    if request.method=='POST':
        uname=request.POST['uname']
        password1=request.POST['password1']
        user=User.objects.create_user(username=uname,password=password1)
        user.save()
        print('user created')
        return redirect('home')
    else:
        return render(request,'sign_up.html')
def home(request):
    return render(request,'index.html')
