from django.shortcuts import render
from rest_framework import generics
from .models import Pizza,Restaurant,RestPizza
from .serializers import PizzaSerializer,RestPizzaSerializer,RestaurantSerializer
# Create your views here.

#Pizza View
class ListPizza(generics.ListAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer

class DetailPizza(generics.RetrieveAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer

#Restaurant view

class ListRestaurant(generics.ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer 

class DetailRestaurant(generics.RetrieveAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

#RestPizza view
    
class ListRestPizza(generics.ListAPIView):
    queryset = RestPizza.objects.all()
    serializer_class = RestPizzaSerializer
class DetailRestPizza(generics.RetrieveAPIView):
    queryset = RestPizza.objects.all()
    serializer_class = RestPizzaSerializer