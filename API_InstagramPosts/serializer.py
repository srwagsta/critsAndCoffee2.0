from rest_framework import serializers
from .models import InstagramPost

class InstagramPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstagramPost
        fields = ['content', 'id_code', 'tags', 'link', 'image_url',
                  'image', 'created_time', 'loc_name', 'loc_point']
