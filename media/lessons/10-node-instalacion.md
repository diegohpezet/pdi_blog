---
title: Creación de proyecto Node.js
date: 2024-05-09
topic: Diseño
---

# Creación de proyecto Node.js

Para crear un proyecto de Node, tras haberlo instalado, deberemos seguir los siguientes pasos **dentro de una carpeta vacía**

- **Paso 1: Establecer un archivo de configuración**: Para esto, dentro de nuestro directorio, ejecutaremos el comando ```npm init -y```, que creará un archivo "package.json". Dentro de este archivo se guardará la configuración de nuestro proyecto
- **Paso 2: Instalar dependencias necesarias**: Nuestro proyecto va a trabajar con dependencias. Las más comunes son ```express``` y ```nodemon```. La primera es un framework de Node, que nos va a facilitar construir aplicaciones dentro de este entorno de desarrollo, mientras que la segunda es una dependencia de desarrollo que va a hacer menos tedioso el proceso de creación de nuestra aplicación. Para instalarlas ejecutaremos en consola ```npm i express``` y ```npm --save-dev nodemon``` 
- **Paso 3: Crear aplicación base**: Crearemos un archivo de javascript donde llamemos al framework y establezcamos direcciones: 

```js
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
        res.send("Hola 7mo")
    })

    app.listen(port, () => {
        console.log(`Servidor funcionando en el puerto ${port}`)
    })
```

Para ejecutar el programa escribiremos en consola ```nodemon <archivo>```

Tengan en cuenta que a partir de ahora se trabajará en torno a ese archivo

## Rutas

Cuando hablamos de rutas, nos referimos a la dirección de un recurso dentro de la aplicación. Generalmente las rutas se asocian a una url

Por ejemplo en ```www.miaplicacion.com/usuarios```, 'usuarios' es una ruta dentro de miaplicacion.com

En una aplicación de Express, se puede definir una ruta de la siguiente manera

```js
app.get('/productos', (req, res) => {
  // Manejar la solicitud para la ruta '/productos'
  res.send('Lista de productos');
});
```