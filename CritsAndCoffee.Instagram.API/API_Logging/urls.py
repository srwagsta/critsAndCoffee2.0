from django.urls import path
from API_Logging import views

app_name = "logger"
urlpatterns = [
    path("critical", view=views.log_critical_create_view, name="logging_critical_api"),
    path("error", view=views.log_error_create_view, name="logging_error_api"),
    path("warning", view=views.log_warning_create_view, name="logging_warning_api"),
    path("info", view=views.log_info_create_view, name="logging_info_api"),
    path("debug", view=views.log_debug_create_view, name="logging_debug_api"),
]
