from rest_framework.generics import (ListAPIView, RetrieveDestroyAPIView)
from rest_framework.permissions import IsAuthenticated
from .models import InstagramPost
from .serializer import InstagramPostSerializer

class InstagramPostListAPIView(ListAPIView):
    queryset = InstagramPost.objects.all()
    permission_classes = (IsAuthenticated, )
    serializer_class = InstagramPostSerializer
    lookup_field = 'uuid'

class InstagramPostRetrieveDestoryAPIView(RetrieveDestroyAPIView):
    queryset = InstagramPost.objects.all()
    permission_classes = (IsAuthenticated, )
    serializer_class = InstagramPostSerializer
    lookup_field = 'uuid'
