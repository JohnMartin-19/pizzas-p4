from django.shortcuts import render
from rest_framework import generics
from .models import Pizza,Restaurant,RestPizza
from .serializers import PizzaSerializer,RestPizzaSerializer,RestaurantSerializer
# Create your views here.

#Pizza View
class ListPizza(generics.ListCreateAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer

class DetailPizza(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer

#Restaurant view

class ListRestaurant(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer 

class DetailRestaurant(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

#RestPizza view
    
class ListRestPizza(generics.ListCreateAPIView):
    queryset = RestPizza.objects.all()
    serializer_class = RestPizzaSerializer
class DetailRestPizza(generics.RetrieveUpdateDestroyAPIView):
    queryset = RestPizza.objects.all()
    serializer_class = RestPizzaSerializer
