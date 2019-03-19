from django.contrib.gis.db import models


class InstagramPost(models.Model):
    id = models.CharField(unique=True, primary_key=True, db_index=True, max_length=255)
    image_thumbnail_url = models.URLField(max_length=2000)
    image_low_resolution_url = models.URLField(max_length=2000)
    image_standard_resolution_url = models.URLField(max_length=2000)
    created_time = models.DateField()
    caption = models.TextField()
    likes = models.IntegerField()
    tags = models.TextField()
    link = models.URLField(max_length=2000)
    # GeoDjango-specific: a geometry field (PointField)
    location = models.PointField(srid=4326, default='SRID=4326;POINT(43.065019 -87.878286)')
    location_name = models.TextField(default='None', max_length=255)


    # Returns the string representation of the model.
    def __str__(self):              # __unicode__ on Python 2
        return self.id
