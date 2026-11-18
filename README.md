# Gestor de tareas

Aplicación web para gestionar tareas.

## Autor

Lautaro Daniel De Filippo, 18/11/2026.

## Instrucciones para correr la aplicación

Abrir una terminal y navegar a la carpeta del proyecto con el comando:
```
cd <RUTA DEL PROYECTO>
```

Crear una imagen de la aplicación:
```
docker build -t gestor-de-tareas .
```

Crear e iniciar un contenedor de la imagen:
```
docker run -d -p 8080:80 --name gestor-de-tareas gestor-de-tareas
```

Abrir un navegador web y navegar a http://localhost:8080.

Para detener la aplicación, ejecutar:
```
docker stop gestor-de-tareas
```

Para volver a iniciarla:
```
docker start gestor-de-tareas
```

Las tareas se mantienen en memoria y se reinician al recargar la página.
