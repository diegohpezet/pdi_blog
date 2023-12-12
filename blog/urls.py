from django.urls import path
from blog.views import *

urlpatterns = [
    path('', index),
    # Lessons
    path('clases/', lessonsList),
    path('clases/<int:id>', lesson),
    # Tasks
    path('tareas/', tasksList),
    path('tareas/<int:id>', task)
]