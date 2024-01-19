
from django.urls import path
from .views import ListPizza,DetailPizza,ListRestaurant,DetailRestaurant,ListRestPizza,DetailRestPizza

urlpatterns = [
    path('pizza/<int:pk>/', DetailPizza.as_view(),name='pizza_detail'),
    path('pizza/',ListPizza.as_view(),name='pizza_list'),
    path('restaurant/<int:pk>/',DetailRestaurant.as_view(),name='restaurant_detail'),
    path('restaurant/',ListRestaurant.as_view(),name='restaurant_list'),
    path('restpizza/<int:pk>/',DetailRestPizza.as_view(),name='restpizza_detail'),
    path('restpizza/',ListRestPizza.as_view(),name='restpizza_list')
]