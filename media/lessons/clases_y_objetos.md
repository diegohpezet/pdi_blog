---
title: Clases y Objetos
topic: Conceptos Base
date: ¿?
---

# Clases y Objetos

En el mundo de la programación existen diferentes formas de escribir códgo para resolver problemas. La *"Programación Orientada a Objetos"* (POO) es uno de los enfoques más utilizados.

Este enfoque nos permite diseñar problemas de manera más estructurada y empleando código más eficiente.

## Clases

Una clase es un **modelo** o un plano para crear objetos. Define *atributos* (características) y *métodos* (acciones) que los objetos creados a partir de la clase tendrán. Las clases proporcionan una forma de organizar y estructurar el código de manera más efectiva.

Sintaxis de una clase:
```py
class Producto:
    def __init__(self, nombre, precio, marca):
        self.nombre = nombre
        self.precio = precio
        self.marca = marca
```
- `class`: Palabra clave para definir una clase
- `__init__(self, ...)`: Constructor, un método especial que se ejecuta automáticamente cuando se crea un objeto. Inicializa los atributos de la clase
- `self`: Representa la instancia actual de la clase y se utiliza para acceder a los atributos de la misma

## Objetos

Un objeto es una instancia específica de una clase. Se puede pensar en una clase como un plano para construir objetos, y un objeto como una instancia concreta basada en ese plano

Creación de un objeto: 
```py
producto1 = Producto("Arroz",500,"Marolio")
producto2 = Producto("Fideos",1000,"Knorr")

print(producto1.nombre) # Arroz
print(producto2.marca) # Knorr
```