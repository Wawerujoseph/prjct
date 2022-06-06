from ..views.parts_views import *
from django.urls import path

urlpatterns = [
    path("create_part1/", createPart1, name="part1-create"),
    path("get_my_part1/", getMyPart1, name="part1-get"),
    path("create_part2/", createPart2, name="part2-create"),
    path("get_my_part2/", getMyPart2, name="part2-get"),
    path("create_part3/", createPart3, name="part3-create"),
    path("get_my_part3/", getMyPart3, name="part3-get"),
    path("upload/", uploadImage, name="upload-image"), 
    path("get_my_part4/", getMyPart4, name="part4-get"),

]
