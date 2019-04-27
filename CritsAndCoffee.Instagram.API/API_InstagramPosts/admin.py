from django.contrib.gis import admin
from .models import InstagramPost


@admin.register(InstagramPost)
class UserAdmin(admin.OSMGeoAdmin):
    search_fields = ["created_time"]

