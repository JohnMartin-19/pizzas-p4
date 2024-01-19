
from django.urls import path
from .views import ListPizza,DetailPizza,ListRestaurant,DetailRestaurant,ListRestPizza,DetailRestPizza

urlpatterns = [
    path('<int:pk>/', DetailPizza.as_view(),name='pizza_detail'),
    path('',ListPizza.as_view(),name='pizza_list'),
    path('<int:pk>/',DetailRestaurant.as_view(),name='restaurant_detail'),
    path('',ListRestaurant.as_view(),name='restaurant_list'),
    path('<int:pk>/',DetailRestPizza.as_view(),name='restpizza_detail'),
    path('',ListRestPizza.as_view(),name='restpizza_list')
]