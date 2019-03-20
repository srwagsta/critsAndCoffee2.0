from django.urls import include, path

urlpatterns = [
    # Auth Endpoints
    path('v1/auth/', include('config.rest_auth_urls')),

    # Instagram API
    path('v1/instagram/', include('API_InstagramPosts.urls')),

    # Logging API
    path('v1/logger/', include('API_Logging.urls')),

]
