# Generated by Django 5.0.1 on 2024-01-19 13:10

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizza', '0007_restaurant_pizza_alter_pizza_size_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pizza',
            name='size',
            field=models.CharField(choices=[('small', 'small'), ('medium', 'medium'), ('large', ' large')], default='---', max_length=10),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='pizza',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='pizza.pizza'),
        ),
        migrations.AlterField(
            model_name='restpizza',
            name='price',
            field=models.CharField(choices=[('10', '$10'), ('20', '$20'), ('30', '$30')], default='---', max_length=2),
        ),
    ]
