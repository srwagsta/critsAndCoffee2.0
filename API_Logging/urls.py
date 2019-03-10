from django.urls import path
from API_Logging import views

app_name = "logger"
urlpatterns = [
    path("error", view=views.LogErrorCreateView, name="logging_error_api"),
]
