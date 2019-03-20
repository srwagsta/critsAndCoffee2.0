from django.conf import settings
from django.urls import include, path
from django.conf.urls.static import static
from django.contrib import admin
from rest_framework.schemas import get_schema_view


schema_view = get_schema_view(title='Crits And Coffee API', url='/api')

urlpatterns = [
    # swagger api documentation
    path('api/docs', schema_view),

    # RASTful API V1 Endpoints
    path('api/v1/', include('config.apiv1_urls'), name="apiv1"),

    # Django Admin, use {% url 'admin:index' %}
    path(settings.ADMIN_URL, admin.site.urls),
    # # User management
    # path("accounts/", include("allauth.urls")),

] + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)
