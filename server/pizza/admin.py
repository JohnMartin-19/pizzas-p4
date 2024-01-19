from django.contrib import admin

# Register your models here.
from .models import Pizza,Restaurant,RestPizza

class PizzaAdmin(admin.ModelAdmin):
    list_display = ('name',"toppings",'price','size')

class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('restaurant_name','address','city')

class RestPizzaAdmin(admin.ModelAdmin):
    list_display = ('pizza','rest_info','price')

admin.site.register(Pizza,PizzaAdmin)
admin.site.register(Restaurant,RestaurantAdmin)
admin.site.register(RestPizza,RestPizzaAdmin)