from django.db import models
import datetime
from django.utils.safestring import mark_safe
import markdown

# Create your models here.
class Lesson(models.Model):
    title = models.CharField(max_length=255)
    theme = models.CharField(max_length=255)
    upload_date = models.DateField()
    file = models.FileField(upload_to='media/lessons/', null=True)

    def get_markdown(self):
        content = open(f"{self.file}","r",encoding="utf-8")
        txt = content.read()
        return mark_safe(markdown.markdown(txt, extensions=['fenced_code']))

    def __str__(self):
        return f"{self.upload_date} / {self.title} ({self.theme})"

class Task(models.Model):
    title = models.CharField(max_length=255)
    theme = models.CharField(max_length=255)
    upload_date = models.DateField(default=datetime.date.today)
    deadline = models.DateField()
    file = models.FileField(upload_to='media/tasks/', null=True)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)

    def get_markdown(self):
        content = open(f"{self.file}","r",encoding="utf-8")
        txt = content.read()
        return mark_safe(markdown.markdown(txt, extensions=['fenced_code']))

    def __str__(self):
        return self.title
