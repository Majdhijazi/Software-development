from django.db import models

class User(models.Model):
    user = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    country = models.CharField(max_length=50)

class Orders(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=100)
    start_date=models.DateField()
    expiration_date = models.DateField()
    cartsnames = models.CharField(max_length=255)
    totalprice=models.CharField(max_length=100)

class Menu(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.ImageField(upload_to='media/')

class Cart(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.ImageField(upload_to='media/', blank=True, null=True)
