from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('sign_in/',views.sign_in,name='sign_in'),
    path('property/',views.prop,name='prop'),
    path('sign_up/',views.sign_up,name='sign_up'),
    path('logout/',views.logout,name='logout')
]
