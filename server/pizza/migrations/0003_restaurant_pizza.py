# Generated by Django 5.0.1 on 2024-01-19 12:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizza', '0002_remove_pizza_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='pizza',
            field=models.ForeignKey(default='---', on_delete=django.db.models.deletion.CASCADE, to='pizza.pizza'),
        ),
    ]
