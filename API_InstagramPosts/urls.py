from django.urls import path

from API_InstagramPosts import views

app_name = "instagramPost"
urlpatterns = [
    path("instagram/", view=views.InstagramPostListAPIView, name="instagramPost_rest_api"),
    path("instagram/<uuid:uuid>", view=views.InstagramPostRetrieveDestoryAPIView, name="instagramPost_rest_api"),
]
