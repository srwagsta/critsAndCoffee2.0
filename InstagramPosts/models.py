from django.contrib.gis.db import models


class InstagramPost(models.Model):
    content = models.TextField(default='None', max_length=255)
    id_code = models.CharField(default='None', max_length=255)
    tags = models.TextField(default='None', max_length=255)
    link = models.CharField(default='None', max_length=255)
    image_url = models.CharField(default='None', max_length=255)
    image = models.ImageField(blank=True)
    created_time = models.DateField(blank=True)
    loc_name = models.TextField(default='None', max_length=255)

    # GeoDjango-specific: a geometry field (PointField)
    loc_point = models.PointField(srid=4326, default='SRID=4326;POINT(43.065019 -87.878286)')

    # Returns the string representation of the model.
    def __str__(self):              # __unicode__ on Python 2
        return self.id_code
