# myapp/urls.py
from django.urls import path
from .views import UserListCreateView, OrdersListCreateView, MenuListCreateView, CartListCreateView
from .views import add_to_cart
urlpatterns = [
    path('api/cart/', add_to_cart, name='add_to_cart'),
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('orders/', OrdersListCreateView.as_view(), name='orders-list-create'),
    path('menu/', MenuListCreateView.as_view(), name='menu-list-create'),
    path('cart/', CartListCreateView.as_view(), name='cart-list-create'),
]
