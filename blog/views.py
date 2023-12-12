from django.shortcuts import render
from .models import Lesson, Task
import markdown
import datetime

# Create your views here.
def index(request):
    return render(request,'index.html')

def lessonsList(request):
    lessons = list(Lesson.objects.values())
    return render(
        request, "blog/lessonList.html", {
            "title": "Clases - PDI", 
            "lessons": lessons
        }
    )

def lesson(request, id):
    lesson = Lesson.objects.get(id=id)

    return render(
        request, "blog/lesson.html", {
            "title": lesson.title, 
            "lesson": lesson, 
            "text": lesson.get_markdown
        }
    )

def tasksList(request):
    tasks = list(Task.objects.values())
    return render(
        request, "blog/taskList.html", {
        "title": "Tareas - PDI",
        "tasks": tasks
        }
    )

def task(request, id):
    task = Task.objects.get(id=id)
    with open(f"{task.file}", "r", encoding="utf-8") as file:
        txt = file.read()
    html = markdown.markdown(txt, extensions=['extra', 'markdown.extensions.fenced_code'])
    
    return render(
        request, "blog/task.html", {
            "title": task.title, 
            "task": task, 
            "text": task.get_markdown
        }
    )