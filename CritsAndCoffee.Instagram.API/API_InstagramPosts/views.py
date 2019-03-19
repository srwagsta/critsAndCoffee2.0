from rest_framework.generics import (ListAPIView, RetrieveDestroyAPIView)
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import InstagramPost
from .serializer import InstagramPostSerializer

class InstagramPostListAPIView(ListAPIView):
    """Returns a list of Instagram Posts"""
    queryset = InstagramPost.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = InstagramPostSerializer
    lookup_field = 'id'


class InstagramPostRetrieveDestoryAPIView(RetrieveDestroyAPIView):
    """Instagram Post Resource"""
    queryset = InstagramPost.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = InstagramPostSerializer
    lookup_field = 'id'






