Bienvenido a Smart-Notifications-SERVER
===================


Hola! Aquí aquí se encuentran dos ejemplos de la utilización de Socket.io con Python-Flask y NodeJS.


----------


Primeros pasos
-------------


> **Requerimientos Python:**

> - [Python 3.X](https://facebook.github.io/react-native/).
> - [pip](https://facebook.github.io/react-native/)

> **Requerimientos NodeJS:**

> - [NodeJS](https://facebook.github.io/react-native/).
> - [npm](https://facebook.github.io/react-native/)





### Python 

Para instalar las dependencias necesarias se debe utilizar los siguiente comandos :

    pip install Flask
    pip install flask-socketio


Para ejecutar el servidor se utiliza el comando :

    python3 server.py

Modificar IP y Puerto solo modifica el archivo *server.py*

    socketio.run(app, port=tu_puerto,host="tu_ip")




#### NodeJS 

Para instalar las dependencias necesarias se debe utilizar los siguiente comandos :

    npm install


Para ejecutar el servidor se utiliza el comando :

    node app.js

Modificar el Puerto solo modifica el archivo *app.js*

    server.listen(tu_puerto, () => console.log('listening on *:tu_puerto'));




#### Docker 

Para descargar la imagen docker del servidor NodeJS:

    docker pull todaniels/smartnotifications


Para ejecutar el servidor se utiliza el comando :

    docker run  -p 3000:3000 -d todaniels/smartnotifications 


Modificar el Puerto 

    docker run  -p 3000:tu_puerto -d todaniels/smartnotifications 

 
