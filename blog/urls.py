from django.urls import path
from blog.views import *

urlpatterns = [
    path('', index),
    # Lessons
    path('clases/', lessonsList),
    path('clases/<str:title>', lesson),
    # Tasks
    path('tareas/', tasksList),
    path('tareas/<str:title>', task),
    # Temas
    path('temas/', topics),
]