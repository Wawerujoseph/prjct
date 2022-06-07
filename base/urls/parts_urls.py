from ..views.parts_views import *
from django.urls import path

urlpatterns = [
    path("create_part1/", createPart1, name="part1-create"),
    path("get_my_part1/<str:user>/", getMyPart1, name="part1-get"),
    path("create_part2/", createPart2, name="part2-create"),
    path("get_my_part2/<str:user>/", getMyPart2, name="part2-get"),
    path("create_part3/", createPart3, name="part3-create"),
    path("get_my_part3/<str:user>/", getMyPart3, name="part3-get"),
    path("upload/", uploadImage, name="upload-image"), 
    path("get_my_part4/<str:user>/", getMyPart4, name="part4-get"),
    path("create_part5/", createPart5, name="part5-create"),
    path("get_part5/", getPart5, name="part5-get"),
    path("get_my_part5/<str:user>/", getMyPart5, name="part5-my-get"),

]
