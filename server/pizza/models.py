from django.db import models

# Create your models here.

SIZE_CHOICES = (
    ('small','small')
    ,('medium','medium')
    ,('large',' large')
)
PRICE_CHOICES = (
    ("10","$10"),("20", "$20"),("30","$30")
)
class Pizza(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=30)
    toppings = models.CharField(max_length = 30)
    size = models.CharField(default = '---',choices = SIZE_CHOICES,max_length = 10)
    price = models.CharField(default = '---',max_length=2,choices = PRICE_CHOICES)

class Restaurant(models.Model):
    id = models.AutoField(primary_key=True)
    restaurant_name = models.CharField(max_length=50)
    address = models.CharField(max_length=256)
    city = models.CharField(max_length=50)

class RestPizza(models.Model):
   # id = models.IntegerField(primary_key=True)
    pizza = models.ForeignKey("Pizza",on_delete=models.CASCADE)
    rest_info = models.ForeignKey("Restaurant",on_delete=models.CASCADE)
    price = models.CharField(default = '---',max_length=2,choices = PRICE_CHOICES)
