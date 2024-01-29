---
title: Modelo Entidad-Relacion
date: 2024-03-14
topic: Proyecto
---

# Modelo ER

**Actividad**: Crear un modelo entidad relación para cada uno de los siguientes escenarios

- **Farmacia**

Debemos diseñar un sistema para registrar las farmacias en diferentes ciudades de nuestro país.

Sabemos que cada farmacia tiene un nombre (único en todo el sistema) y un domicilio. Cada farmacia se ubica en una sola ciudad, pero en una ciudad hay varias farmacias. De cada ciudad, sabemos el nombre, la provincia en la que se encuentra, la cantidad de habitantes y la superficie. Cada ciudad se identifica con el nombre y la provincia.

Conocemos también que cada farmacia puede tener un propietario, y que cada propietario puede tener solo una farmacia. Tenga en cuenta que puede haber farmacias sin propietario. De los propietarios, conocemos el DNI (único), su nombre y su domicilio, compuesto por calle, número, código postal y ciudad.

Cada farmacia, a su vez, vende varios medicamentos y un medicamento se vende en varias farmacias. De cada medicamento conocemos su id único, su nombre comercial y las drogas de las cuales se compone.

Cada farmacia vende un medicamento a un precio determinado, que no necesariamente es el mismo en diferentes farmacias.
Como último requerimiento, un medicamento puede complementar a otros medicamentos, pero sabemos que cada medicamento puede ser complementado por un solo medicamento.

- **Sistema de Delivery “La Flauta Dulce”**

La panadería y confitería “La Flauta Dulce” está organizando el delivery a sus clientes. Cada repartidor tiene asignada una sola zona (puede haber más de un repartidor por zona). Los repartidores tienen asignados varios clientes. Cada cliente puede ser atendido por más de un repartidor, o por ninguno. Cada repartidor usa una sola moto, y una moto es solamente usada por un repartidor. 

De cada repartidor, sabemos que trabaja para una única empresa en la que posee un legajo, pero los legajos pueden repetirse para distintas empresas. El nombre y apellido y los horarios (formado por día de la semana y rango de horas) en los que trabaja. De cada moto, sabemos el numero de serie (que es único para cada repartidor pero podria haber más de una moto con el mismo numero de serie), la cilindrada, la marca, el modelo y la velocidad máxima. De cada cliente sabemos su usuario que es único por zona pero existen varios clientes con el mismo usuario entre diferentes zonas; la dirección, el nombre, y la fecha de nacimiento. De cada zona, el nombre único y el tamaño en km*km. 

Por último, sabemos que un repartidor puede reemplazar solo a otro, y a su vez un repartidor debe registrar por quienes es reemplazado.

- **Lavadero de Pulgas "La Pulga Limpia"**

Un lavadero de Perros solicita un modelo de datos para un sistema de gestión de lavados. Los perros pertenecen a clientes de los cuales conocemos su dni, nombre y apellido, teléfono y domicilio.

Los perros tienen un nombre, una descripción y un año de nacimiento, dos perros distintos de distinto cliente se pueden llamar igual, los nombres de los perros son únicos para un cliente, por ejemplo, Juan y Pedro pueden tener cada uno un perro llamado Toby, pero Juan no puede tener dos perros llamados Toby.

Queremos registrar los lavados de los perros, los datos involucrados son, fecha y hora, la lista de productos involucrados en el lavado, para estos últimos sólo nos interesa sus nombres, y el empleado que realizó el lavado. Un perro puede ser bañado por el mismo o distintos empleados en distintas fechas, pero nunca será bañado dos veces o más en una misma fecha por el mismo empleado.

De los Empleados anotamos su DNI, nombre, email y fecha de nacimiento. Cada tanto un empleado tiene que cubrir a otro, hay que registrar para quién cubre a quién, la fecha y el motivo.

Debido a los insistentes reclamos de los clientes, el sistema debe modificarse y aceptar que un cliente pueda tener distintos perros con el mismo nombre, pero en años distintos (el mismo dueño no puede ponerle a dos perros distintos el mismo nombre el mismo año). Esto es debido al cariño que muchos le tenían a su mascota que querían volver a ponerles el mismo nombre.
