import os
import markdown
from django.shortcuts import render, redirect
from pathlib import Path
from .models import Lesson, Task
from .utils import *

# Create your views here.
def index(request):
    return redirect(lessonsList)

# Clases
def lessonsList(request):
    lessons = get_list_of_files('lessons')
    
    return render(request, "blog/lessonList.html", {
        "title": "Clases - PDI",
        "lessons": lessons
    })

def lesson(request, title):
    content = get_file_content('lessons', title)
    data = get_file_metadata('lessons', title)
    
    return render(
        request, "blog/lesson.html", {
            "data": data,
            "content": content
        }
    )

# Tareas
def tasksList(request):
    tasks = get_list_of_files('tasks')
    return render(
        request, "blog/taskList.html", {
        "title": "Tareas - PDI",
        "tasks": tasks
        }
    )

def task(request, title):
    content = get_file_content('tasks', title)
    data = get_file_metadata('tasks', title)
    
    return render(
        request, "blog/task.html", {
            "data": data,
            "content": content
        }
    )

# Listado de temas
def topics(request):
    return render(request,"blog/topics.html")