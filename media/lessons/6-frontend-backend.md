---
title: Programación Frontend/Backend
date: 2024-04-18
topic: Conceptos Base
---

## Programación del lado del cliente

En términos simples, el frontend es responsable de cómo se presenta y se comporta una aplicación en el navegador web. Esto incluye desde el diseño de la apariencia visual hasta la implementación de funcionalidades interactivas, como formularios, botones, menús, animaciones y más.

**Ejemplos de funcionalidades relacionadas a este tipo de programación son:**
- Previews de los videos al pasar el mouse en sitios como Youtube o Netflix
- Funcionamiento de menús en los 'Navbar'
- La adaptación de los sitios o aplicaciones en base al tamaño de la pantalla

<hr />

## Programación del lado del servidor

Muchos sitios web ejecutan código en el servidor cuando requieren distintos datos. 

Generalmente este código se encarga de recibir una solicitud y responder a la misma con los datos adecuados.

### ¿Cómo funciona?

El navegador se comunica con el servidor usando el protocolo HTTP. Cada vez que un usuario clickea en un enlace, envía un formulario o realiza una búsqueda, se envia una petición HTTP. Esta petición incluye en la URL el recurso afectado, un <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Methods">método</a> que define la acción requerida, y además puede llegar a contener información adicional

<img src="https://developer.mozilla.org/es/docs/Web/HTTP/Overview/http_request.png" alt="Ejemplo HTTP" />

En este ejemplo "Headers" refiere a la dirección sobre la cual se está haciendo la petición, junto con opciones adicionales

### Ejemplos de programación del lado servidor

<hr />

#### E-commerce
Supongamos que queremos crear un E-commerce en la web. Si tenemos un catálogo de 100 productos sería muy mala idea crear un archivo HTML para cada uno de ellos. 

La programación Backend nos permite almacenar información de los productos en una base de datos para luego devolverlos y construir dinámicamente una vista de cada producto.

#### Datos de usuario

Sitios como Google Maps usan la localización de tu casa y la actual para proporcionar una información sobre la ruta a seguir y resaltar los negocios locales en los resultados de búsqueda.

#### Control de acceso a contenido

Generalmente las redes sociales nos permiten controlar quienes pueden ver nuestro contenido. Esta autorización es parte de la programación backend

#### Análisis de datos

Un sitio web puede recolectar un montón de datos acerca de los usuarios: qué es lo que buscan, qué compran, qué recomiendan, cuánto tiempo permanecen en cada página. La programación de lado-servidor puede utilizarse para refinar las respuestas basándose en el análisis de estos datos.

