# myapp/admin.py
from django.contrib import admin
from .models import User, Orders, Menu, Cart

admin.site.register(User)
admin.site.register(Orders)
admin.site.register(Menu)
admin.site.register(Cart)
