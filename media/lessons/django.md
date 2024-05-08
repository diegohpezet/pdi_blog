---
title: Django
---

# Django

Django es un framework de Python que permite crear aplicaciones web. Permite comunicar aplicaciones con bases de datos, crear interfaces HTML, tener un panel de administración para la app, etc. Además cuenta con funcionalidades comunes ya implementadas. El fin de esto es que el desarrollador se enfoque en desarrollar funcionalidades específicas de su proyecto en vez de concentrarse en reinventar el login, los formularios y demás.

## Instalación

Mediante pip, podemos ejecutar la sentencia:

```
pip install django
```

para que se instale el framework y sus dependencias.

### Creación de un proyecto Django

Dentro de la carpeta en la que deseemos trabajar ejecutaremos el siguiente comando en consola:

```
django-admin startproject [nombre_del_proyecto] .
```

Para verificar que todo funcione, ejecutamos la sentencia:

```
python manage.py runserver
```

Si nos dirigimos a http://127.0.0.1:8000 en nuestro navegador, debería mostrarse una pestaña mencionando que django se instaló satisfactoriamente

## Proyecto vs app

Un concepto muy importante dentro del framework es la diferenciación entre proyectos y aplicaciones

Un proyecto es un sistema compuesto por varias aplicaciones, mientras que las aplicaciones corresponden a funcionalidades dentro de mi sistema

Un ejemplo podría ser Facebook, que en este caso sería un proyecto. Adentro puede contener una aplicación que maneje usuarios, una que maneje grupos, una que maneje posts, etc etc.

_La información de las aplicaciones se pueden comunicar entre sí para lograr el objetivo deseado_

## Estructura de un proyecto

Dentro de la carpeta del proyecto, hay ciertos archivos que nos importan.

- **settings.py**: almacena configuraciones del proyecto

```py
DEBUG = True # Indica si estamos en modo desarrollo o no

ALLOWED_HOSTS = []  # Listado de direcciones permitidas


# Listado de aplicaciones dentro del proyecto

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

También, dentro del mismo archivo hay un espacio para definir la base de datos. Por defecto nos crea una de sqlite3, que es una base de datos muy común durante el desarrollo de una aplicación.

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

- **urls.py**: permite definir los enlaces de nuestro proyecto, junto con las vistas que renderizan

```py
from django.contrib import admin
from django.urls import path

# Lista de URLs
urlpatterns = [
    path('admin/', view = admin.site.urls),
]
```

-**asgi.py** y **wsgi.py**: establecen como se va a ejecutar el proyecto luego de su desarrollo. Por ahora no son relevantes

## Creación de una aplicacion

**Recordar que una aplicación es una parte de un proyecto**. Para crear una aplicación dentro del proyecto ejecutamos la sentencia

```
django-admin startapp [nombre-app]
```

Ahora deberemos crear una vista. Entendemos por vista a una página dentro de nuestra aplicacion. Para crear una deberemos dirigirnos al archivo 'views.py' que está dentro de la carpeta de la app y crear una función que retorne el contenido de la vista

```py
from django.shortcuts import render
from django.http import HttpResponse

def holaMundo(request):
    # En este caso la vista es solamente una respuesta http, pero
    # tranquilamente podría ser un archivo html renderizado, eso
    # se verá más adelante
    return HttpResponse("Hola Mundo.")
```

Luego, para incluirlos en el proyecto, nos dirijimos a la carpeta del proyecto y dentro del archivo 'urls.py':

```py
from django.contrib import admin
from django.urls import path
from blog.views import holaMundo

urlpatterns = [
    path('admin/', view=admin.site.urls),
    path('', view=holaMundo)
]
```

Al iniciar el proyecto se va a mostrar lo siguiente:

<img src="/static/blog/img/holaMundoDjango.png" alt="Hola mundo en Django" />
