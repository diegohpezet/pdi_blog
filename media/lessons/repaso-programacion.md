---
title: Repaso de Programación
topic: Conceptos Base
date: ¿?
---
# Repaso de programacion

A lo largo de la tecnicatura se han visto distintos elementos y estructuras con las cuales se trabajaron para desarrollar pequeños scripts o programas.

## Tipos de datos

Representan los diversos valores que una variable puede tomar. 

- **Enteros (int):** Representan números enteros
```py
numero_entero = 5
```
- **Flotantes (float):** Representan números decimales
```py
numero_flotante = 5.5
```
- **Cadenas de texto (string):** Representan secuencias de caracteres
```py
texto = "Hola alumnos"
```
- **Booleanos (bool):** Representan valores de verdad, es decir, True o False.
```py
es_verdadero = True
es_falso = False
```
- **Listas o arrays:** Son colecciones ordenadas y modificables de elementos. Pueden contener elementos de diferentes tipos.
```py
lista_numerica = [1,5,7,2]
lista_mixta = [2,"Juan",True]
```
- **Tuplas:** Son colecciones ordenadas e inmutables de elementos. No pueden modificarse después de su creación.
```py
tupla_colores = ('rojo', 'verde', 'azul')
```
**Diccionarios:** Son colecciones no ordenadas de pares clave-valor. Cada elemento tiene una clave única asociada.
```py
diccionario_persona = {
    'nombre': 'Juan', 
    'edad': 30, 
    'ciudad': 'Berazategui'
}
```

## Variables

Son elementos que sirven para nombrar y almacenar un valor.

```py
variable = "variable"
```

## Estructura condicional

Sirven para controlar la ejecución del programa en base a una condicion establecida

```py
if condicion == True:
    # Hace algo
    print("Condicion cumplida")
else:
    # Hace otra cosa
    (print("No se cumple la condicion"))
```

## Estructura de repeticion

Sirve para ejecutar un bloque de codigo varias veces ya sea una cantidad establecida o mientras se cumpla una condicion

```py
for i in range(5):
    print(i)

while (i<=5):
    print(i)
```

## Funciones

Una función es un bloque de código que realiza una tarea específica y puede ser reutilizado en diferentes partes de un programa. Las funciones son una forma de organizar y modularizar el código, lo que facilita su comprensión y mantenimiento

```py
def saludar(nombre):
    # Cuerpo de la funcion
    print(f"Hola {nombre}!")

def sumar(num1, num2):
    resultado = num1 + num2
    return resultado
print(sumar(3,4)) # 7
```