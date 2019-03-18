from rest_framework import serializers
from .models import InstagramPost


class InstagramPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstagramPost
        fields = ['id',
                  'image_thumbnail_url',
                  'image_low_resolution_url',
                  'image_standard_resolution_url',
                  'created_time',
                  'caption',
                  'likes',
                  'tags',
                  'link',
                  'location',
                  'location_name']
