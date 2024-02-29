---
title: POO
date: ¿?
topic: Conceptos Base
---

# Programación Orientada a Objetos

Empleando Python, se solicita que simulen las siguiente problemáticas empleando el enfoque de Programación Orientada a Objetos.

Se solicita que se entreguen dos archivos (`veterinaria.py`,`negocio.py`) dentro de una carpeta bajo el nombre 'POO-apellido/s'

## Negocio

Crear una clase `Negocio` que venda productos de cualquier tipo

Cada negocio deberá tener un nombre, categoría (tipo de productos que vende)

Al mostrar el negocio en consola se deberá mostrar el siguiente mensaje: `El negocio {nombre}, tiene {cant_empleados} cantidad de empleados y se especializa en {categoria}`

Agregar métodos que permitan contratar/despedir empleados.

Crear 2 instancias de la clase, agregarles 10 empleados a c/u e imprimirlas en consola.

## Usuario

Crear una clase `Usuario`, que represente al usuario promedio de una red social.

Cada usuario se define por su `id` (que se debe generar automáticamente y ser único para cada usuaro), `usuario`, `email`, `password` (la cual deberá estar encriptada). Además cuenta con dos listados, uno para usuarios seguidos y uno para usuarios que lo siguen.

Crear un método `seguir`. Cando un usuario sigue a otro, en su listado de `cuentas_seguidas` se agrega el `id` de la cuenta a la que sigue, y en esta otra cuenta se agrega la id del usuario.

Ejemplo: "Fulano" empieza a seguir a "Fulana":
- El id de Fulana se agrega a las `cuentas_seguidas` de Fulano
- EL id de Fulano se agrega a los `seguidores` de Fulana

Crear una clase `Admin` a partir de la clase usuario que tenga un método capaz de borrar otro usuario.
