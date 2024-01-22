# myapp/views.py
from rest_framework import generics
from .models import User, Orders, Menu, Cart
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework.response import Response
from .serializers import UserSerializer, OrdersSerializer, MenuSerializer, CartSerializer

@api_view(['POST'])
@parser_classes([FileUploadParser, MultiPartParser])
def add_to_cart(request):
    try:
        data = request.data
        serializer = CartSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Item added to cart successfully.'})
        else:
            return Response({'error': 'Invalid data format.', 'errors': serializer.errors}, status=400)
    except Exception as e:
        return Response({'error': f'Error adding item to cart: {str(e)}'}, status=500)
class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class OrdersListCreateView(generics.ListCreateAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

class MenuListCreateView(generics.ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class CartListCreateView(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
