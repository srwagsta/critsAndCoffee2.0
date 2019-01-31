from django.urls import include, path

urlpatterns = [

    # Instagram API
    path('instagram/', include('API_InstagramPosts.urls')),

    # https://django-rest-auth.readthedocs.io/en/latest/api_endpoints.html
    path('rest-auth/', include('rest_auth.urls')),
    path("rest-auth/registration/", include('rest_auth.registration.urls')),

]
