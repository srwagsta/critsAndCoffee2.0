from django.urls import include, path
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token

app_name = "rest_auth"
urlpatterns = [
    # http://getblimp.github.io/django-rest-framework-jwt/#additional-settings
    path('jwt/', obtain_jwt_token),
    path('jwt-refresh/', refresh_jwt_token),
    path('jwt-verify/', verify_jwt_token),

    # https://django-rest-auth.readthedocs.io/en/latest/api_endpoints.html
    path('', include('rest_auth.urls')),
    path('registration/', include('rest_auth.registration.urls')),
]
