from django.urls import path

from API_InstagramPosts import views

app_name = "instagramPost"
urlpatterns = [
    path("api/v1", view=views.InstagramPostListAPIView.as_view(), name="instagramPost_rest_api"),
    path("api/v1/<uuid:uuid>", view=views.InstagramPostRetrieveDestoryAPIView.as_view(), name="instagramPost_rest_api"),
]
