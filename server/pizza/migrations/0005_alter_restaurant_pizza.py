# Generated by Django 5.0.1 on 2024-01-19 12:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizza', '0004_alter_restaurant_pizza'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='pizza',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pizza.pizza'),
        ),
    ]