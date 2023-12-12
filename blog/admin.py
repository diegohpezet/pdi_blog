from django.contrib import admin
from blog.models import Lesson
from blog.models import Task

# Register your models here.
admin.site.register(Lesson)
admin.site.register(Task)