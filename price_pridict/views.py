from django.shortcuts import render , redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages
from .models import property
import math
import random
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import math
from sklearn.ensemble import RandomForestRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import ExtraTreesRegressor
from sklearn.metrics import mean_absolute_error,r2_score,mean_squared_error
from sklearn.model_selection import train_test_split
from sklearn import tree
from matplotlib import pyplot as plt
from string import ascii_letters
import pickle
import os
def prediction(area,gas,lat,bhk,lng,pool,playarea,powerbacup,ac):
  pwd = os.path.dirname(__file__)
  pickled_model=pickle.load(open(pwd+'\\model.pkl','rb'))
  val=[[area,gas,lat,bhk,lng,pool,playarea,powerbacup,ac]]
  return round(float(pickled_model.predict(val)[0]) *(10**5),2)
def formatINR(number):
    s, *d = str(number).partition(".")
    r = ",".join([s[x-2:x] for x in range(-3, -len(s), -2)][::-1] + [s[-3:]])
    return "".join([r] + d)

random.seed()
def hpi(price,year):
    if(year=="2017 q1"):
        return (98/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2017 q2"):
        return (99/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2018 q1"):
        return (104/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2018 q2"):
        return (107/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2019 q1"):
        return (104/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2019 q2"):
        return (113/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2020 q2"):
        return (104/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2021 q1"):
        return (105/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2021 q2"):
        return (106/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2022 q1"):
        return (109/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2022 q2"):
        return (110/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2023 q1"):
        return (111/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2023 q2"):
        return (111/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2024 q1"):
        return (112/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2024 q2"):
        return (114/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2025 q1"):
        return (115/108)*price+random.randrange(-1*price*1000,price*1000)/100000
    elif(year=="2025 q2"):
        return (116/108)*price+random.randrange(-1*price*1000,price*1000)/100000






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
        area=int(request.POST.get('area',1000))
        location=request.POST['location']
        city=request.POST['city']
        bedrooms=request.POST['bedrooms']
        latitude=request.POST['latitude']
        longitude=request.POST['longitude']
        description=request.POST['description']
        resale=request.POST.get('resale',False)
        if(request.POST.get('maintenance-staff',False)):
            maintenance_staff=True
        else:
            maintenance_staff=False
        if(request.POST.get('gymnasium',False)):
            gymnasium=True
        else:
            gymnasium=False
        if(request.POST.get('swimming-pool',False)):
            swimming_pool=True
        else:
            swimming_pool=False
        if(request.POST.get('landscaped-gardens',False)):
            landscaped_gardens=True
        else:
            landscaped_gardens=False
        if(request.POST.get('jogging-track',False)):
            jogging_track=True
        else:
            jogging_track=False
        if(request.POST.get('rain-water-harvesting',False)):
            rain_water_harvesting=True
        else:
            rain_water_harvesting=False
        if(request.POST.get('indoor-games',False)):
            indoor_games=True
        else:
            indoor_games=False
        if(request.POST.get('shopping-mall',False)):
            shopping_mall=True
        else:
            shopping_mall=False
        if(request.POST.get('intercom',False)):
            intercom=True
        else:
            intercom=False
        if(request.POST.get('sports-facility',False)):
            sports_facility=True
        else:
            sports_facility=False
        if(request.POST.get('atm',False)):
            atm=True
        else:
            atm=False
        if(request.POST.get('club-house',False)):
            club_house=True
        else:
            club_house=False
        if(request.POST.get('school',False)):
            school=True
        else:
            school=False
        if(request.POST.get('security-24x7',False)):
            security=True
        else:
            security=False
        if(request.POST.get('power-backup',False)):
            power_backup=True
        else:
            power_backup=False
        if(request.POST.get('car-parking',False)):
            car_parking=True
        else:
            car_parking=False
        if(request.POST.get('staff-quarter',False)):
            staff_quarter=True
        else:
            staff_quarter=False
        if(request.POST.get('cafeteria',False)):
            cafeteria=True
        else:
            cafeteria=False
        if(request.POST.get('multipurpose-room',False)):
            multipurpose_room=True
        else:
            multipurpose_room=False
        if(request.POST.get('hospital',False)):
            hospital=True
        else:
            hospital=False
        if(request.POST.get('washing-machine',False)):
            washing_machines=True
        else:
            washing_machines=False
        if(request.POST.get('gas-connection',False)):
            gas_connection=True
        else:
            gas_connection=False
        if(request.POST.get('ac',False)):
            ac=True
        else:
            ac=False
        if(request.POST.get('wifi',False)):
            wifi=True
        else:
            wifi=False
        if(request.POST.get('childrens-playarea',False)):
            childrens_playarea=True
        else:
            childrens_playarea=False
        if(request.POST.get('lift-available',False)):
            lift_available=True
        else:
            lift_available=False
        if(request.POST.get('bed',False)):
            bed=True
        else:
            bed=False
        if(request.POST.get('vaastu-compliant',False)):
            vaastu_compliant=True
        else:
            vaastu_compliant=False
        if(request.POST.get('microwave',False)):
            microwave=True
        else:
            microwave=False
        if(request.POST.get('golf-course',False)):
            golf_course=True
        else:
            golf_course=False
        if(request.POST.get('tv',False)):
            tv=True
        else:
            tv=False
        if(request.POST.get('dining-table',False)):
            dining_table=True
        else:
            dining_table=False
        if(request.POST.get('sofa',False)):
            sofa=True
        else:
            sofa=False
        if(request.POST.get('wardrobe',False)):
            wardrobe=True
        else:
            wardrobe=False
        if(request.POST.get('refrigerator',False)):
            refrigerator=True
        else:
            refrigerator=False
        c_user=request.user
        prope=property(user=c_user,area=area,city=city,location=location,No_of_Bedrooms=bedrooms,latitude=latitude,longitude=longitude,description=description,Resale=resale,MaintenanceStaff=maintenance_staff,Gymnasium=gymnasium,SwimmingPool=swimming_pool,LandscapedGardens=landscaped_gardens,	JoggingTrack=jogging_track,	RainWaterHarvesting=rain_water_harvesting,	IndoorGames=indoor_games,	ShoppingMall=shopping_mall	,Intercom=intercom	,SportsFacility=sports_facility	,ATM=atm	,ClubHouse=club_house	,School=school	,ALL_Security=security	,PowerBackup=power_backup	,CarParking=car_parking	,StaffQuarter=staff_quarter	,Cafeteria=cafeteria	,MultipurposeRoom=multipurpose_room	,Hospital= hospital	,WashingMachine=washing_machines	,Gasconnection=gas_connection	,AC=ac	,Wifi=wifi	,Children_playarea=childrens_playarea	,LiftAvailable=lift_available	,BED=bed	,VaastuCompliant=vaastu_compliant,Microwave=microwave	,GolfCourse=golf_course	,TV=tv	,DiningTable=dining_table	,Sofa=sofa	,Wardrobe=wardrobe	,Refrigerator=refrigerator)
        prope.save()
        print('Property created')
        return redirect(home)
    else:
        return render(request,'form.html')

def home(request):
    objs1 =property.objects.filter(city="Delhi")
    objs2 =property.objects.filter(city="Mumbai")
    objs3 =property.objects.filter(city="Banglore")

    return render(request,'index.html',{'objs1' : objs1,'objs3' : objs3,'objs2' : objs2})
def prop(request,prop_id):
    if request.method=='GET':
        c_user=request.user
        #usr=User.objects.filter(id=c_user)
        objs =property.objects.filter(id=prop_id)
        for x in objs:
            price=prediction(x.area,x.Gasconnection,x.latitude,x.No_of_Bedrooms,x.longitude,x.SwimmingPool,x.Children_playarea,x.PowerBackup,x.AC)
            p1=hpi(price,'2017 q1')
            p2=hpi(price,'2017 q2')
            p3=hpi(price,'2018 q1')
            p4=hpi(price,'2018 q2')
            p5=hpi(price,'2019 q1')
            p6=hpi(price,'2019 q2')
            p8=hpi(price,'2020 q2')
            p9=hpi(price,'2021 q1')
            p10=hpi(price,'2021 q2')
            p11=hpi(price,'2022 q1')
            p12=hpi(price,'2022 q2')
            p13=hpi(price,'2023 q1')
            p14=hpi(price,'2023 q2')
            p15=hpi(price,'2024 q1')
            p16=hpi(price,'2024 q2')
            p17=hpi(price,'2025 q1')
            p18=hpi(price,'2025 q2')
            roi=p16/price*5
        return render(request,'property.html', {'c_user':c_user,'objs' : objs,'roi':roi,'price':formatINR(price),'p1':p1,'p2':p2,'p3':p3,'p4':p4,'p5':p5,'p6':p6,'p7':price,'p8':p8,'p9':p9,'p10':p10,'p11':p11,'p12':p12,'p13':p13,'p14':p14,'p15':p15,'p16':p16,'p17':p17,'p18':p18})

