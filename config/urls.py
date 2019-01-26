from django.conf import settings
from django.urls import include, path
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView
from django.views import defaults as default_views
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Crits And Coffee API')

urlpatterns = [
    # swagger api documentation
    path('swagger/', schema_view),
    # Django Admin, use {% url 'admin:index' %}
    path(settings.ADMIN_URL, admin.site.urls),
    # # User management
    # path("users/",include("crits_and_coffee.users.urls", namespace="users"),),
    # path("accounts/", include("allauth.urls")),
    # https://django-rest-auth.readthedocs.io/en/latest/api_endpoints.html
    path('rest-auth/', include('rest_auth.urls')),
    path("rest-auth/registration/", include('rest_auth.registration.urls')),

    # Static page serving
    path("", TemplateView.as_view(template_name="pages/angular_home.html"), name="home"),

    # catch-all pattern for compatibility with the Angular routes. This must be last in the list.
    path("<path:path>/", TemplateView.as_view(template_name="pages/angular_home.html"), name="home"),
] + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        path(
            "400/",
            default_views.bad_request,
            kwargs={"exception": Exception("Bad Request!")},
        ),
        path(
            "403/",
            default_views.permission_denied,
            kwargs={"exception": Exception("Permission Denied")},
        ),
        path(
            "404/",
            default_views.page_not_found,
            kwargs={"exception": Exception("Page not Found")},
        ),
        path("500/", default_views.server_error),
    ]
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns
