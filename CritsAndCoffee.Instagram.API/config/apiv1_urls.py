from django.urls import include, path

urlpatterns = [
    # Auth Endpoints
    path('auth/', include('config.rest_auth_urls')),

    # Instagram API
    path('instagram/', include('API_InstagramPosts.urls')),

]
