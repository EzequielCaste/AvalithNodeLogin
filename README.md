# AvalithNodeLogin
Ejercicio para Skill Factory de Avalith

```
POST /login

{
    "name": "eze",
    "password": "admin"
}

```

```
GET /saludo

{
    "token": ---enviar el token recibido del POST---
}

```

Realizar una API y que contenga un login donde el usuario al ingresar su nombre de usuario y contraseña devolverá un token con el cual podrá hacer un request otro endpoint GET y le responderá con un saludo con su nombre.

Para el endpoint de login, tener en cuenta los siguientes puntos:
No se requiere el uso de una base de datos se puede almacenar los datos del usuario en un archivo la contraseña deberá estar guardada de manera hasheada.
En caso de fallar se deberá enviar correctamente un mensaje de error al usuario.

- Sugiero utilizar JWT para el manejo de los toquen.
- Validar que se envíen correctamente los valores.
  No tiene que haber nada referido a front-end utilizar postman o similar para hacer pruebas.

Sobre el segundo endpoint, tiene que corresponder con "Buenos días x!" como en el ejercicio anterior pero en este caso el sistema debe usar el token para saber qué usuario es y en caso que el token no sea válido.
