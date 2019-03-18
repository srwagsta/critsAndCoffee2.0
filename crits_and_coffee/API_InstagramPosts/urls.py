from django.urls import path

from API_InstagramPosts import views

app_name = "instagramPost"
urlpatterns = [
    path("posts", view=views.InstagramPostListAPIView.as_view(), name="instagramPost_rest_api"),
    path("post/<uuid:uuid>", view=views.InstagramPostRetrieveDestoryAPIView.as_view(), name="instagramPost_rest_api"),
]
