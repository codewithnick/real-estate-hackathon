from django.shortcuts import render , redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages
from .models import property
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
def addprop(request):
    if request.method=='POST':
        area=request.POST['area']
        location=request.POST['location']
        bedrooms=request.POST['bedrooms']
        resale=request.POST['resale']
        maintenance_staff=request.POST['maintenance-staff']
        gymnasium=request.POST['gymnasium']
        swimming_pool=request.POST['swimming-pool']
        landscaped_gardens=request.POST['landscaped-gardens']
        jogging_track=request.POST['jogging-track']
        rain_water_harvesting=request.POST['rain-water-harvesting']
        indoor_games=request.POST['indoor-games']
        shopping_mall=request.POST['shopping-mall']
        intercom=request.POST['intercom']
        sports_facility=request.POST['sports-facility']
        atm=request.POST['atm']
        lub_house=request.POST['lub-house']
        school=request.POST['school']
        security=request.POST['security-24x7']
        power_backup=request.POST['power-backup']
        car_parking=request.POST['car-parking']
        staff_quarter=request.POST['staff-quarter']
        cafeteria=request.POST['cafeteria']
        multipurpose_room=request.POST['multipurpose-room']
        hospital=request.POST['hospital']
        washing_machines=request.POST['washing-machine']
        gas_connection=request.POST['gas-connection']
        ac=request.POST['ac']
        wifi=request.POST['wifi']
        childrens_playarea=request.POST['childrens-playarea']
        lift_available=request.POST['lift-available']
        bed=request.POST['bed']
        vaastu_compliant=request.POST['vaastu-compliant']
        microwave=request.POST['microwave']
        golf_course=request.POST['golf-course']
        tv=request.POST['tv']
        dining_table=request.POST['dining-table']
        sofa=request.POST['sofa']
        wardrobe=request.POST['wardrobe']
        refrigerator=request.POST['refrigerator']

        print('Property created')
        return redirect('home')
    else:
        return render(request,'addprop.html')

def home(request):
    objs1 =property.objects.filter(city="Delhi")
    for x in objs1:
        print(x.id)
    objs2 =property.objects.filter(city="Mumbai")
    objs3 =property.objects.filter(city="Banglore")

    return render(request,'index.html',{'objs1' : objs1,'objs3' : objs3,'objs2' : objs2})
def prop(request,prop_id):
    if request.method=='GET':
        objs =property.objects.filter(id=prop_id)
        return render(request,'property.html', {'objs' : objs})

