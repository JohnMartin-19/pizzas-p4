from rest_framework import serializers
from .models import Pizza,Restaurant,RestPizza

class PizzaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pizza
        fields=('name','toppings','size')

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('restaurant_name','address','city','pizza')

class RestPizzaSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestPizza
        fields = ('pizza','rest_info','price')