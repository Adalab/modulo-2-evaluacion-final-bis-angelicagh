# HeyFriend 💛  


**HeyFriend** es una aplicación web sencilla que te permite marcar usuarios como amigos y guardarlos en una lista personalizada. Cada vez que recargas la página, se generan 10 nuevos usuarios aleatorios, pero puedes guardar y recuperar tus amigos en cualquier momento.

---

## 🌐 Demo en vivo

Puedes probar la aplicación directamente en GitHub Pages:  
[👉 Abrir HeyFriend](https://tu-usuario.github.io/heyfriend)  
*(Reemplaza con tu enlace real de GitHub Pages)*

---

## 🚀 Funcionalidades

- 🔄 **Usuarios aleatorios**: se obtienen 10 nuevos usuarios desde [randomuser.me](https://randomuser.me/api/?results=10) cada vez que se inicia la aplicación o se recarga la página.
- ❤️ **Marcar como amigo**: haz clic en el ícono de corazón para añadir un usuario a tu lista de amigos. El corazón se vuelve rojo.
- 💾 **Guardar amigos**: guarda tus amigos en `localStorage` para no perderlos al recargar la página.
- ♻️ **Recuperar amigos**: recupera tus amigos guardados desde `localStorage` y vuelve a mostrarlos en la lista.
- 🗑️ **Eliminar amigos**: borra la lista de amigos y elimina los datos guardados en `localStorage`.

---

## 📱 Diseño responsive
**HeyFriend** está diseñada para adaptarse a distintos tamaños de pantalla. Ya sea que lo uses en móvil, tablet o escritorio, la interfaz se ajusta automáticamente para ofrecer una experiencia fluida y accesible. Esto se logra mediante media queries.

## 🛠️ Tecnologías utilizadas

- **HTML**
- **SCSS**
- **JavaScript**  
- **Vite**
La aplicación utiliza `fetch()` para obtener datos y `localStorage` para guardar y recuperar la información.

---

## 📦 Instalación

#### 1. Clona el repo

`git clone https://github.com/tu-usuario/heyfriend.git`

#### 2. Instala las dependencias

`npm install`

#### 3. Despliega la app 

`npm run dev`













### Pasos para publicar el proyecto en GitHub Pages:

Para generar tu página para producción ejecuta el comando:

```bash
npm run build
```

Y a continuación:

1. Sube a tu repo la carpeta `docs/` que se te acaba de generar.
1. Entra en la pestaña `settings` de tu repo.
1. Y en el apartado de GitHub Pages activa la opción **master branch /docs folder**.
1. Y ya estaría!!!

Además, los comandos:

```bash
npm run push-docs
```
o

```bash
npm run deploy
```

son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/` del tirón. Te recomendamos ver el fichero `package.json` para aprender cómo funciona.
<!--
## Flujo de archivos con Gulp

Estas tareas de Gulp producen el siguiente flujo de archivos:

![Gulp flow](./gulp-flow.png)

## `gulpfile.js` y `config.json`

Nuestro **gulpfile.js** usa el fichero `config.json` de configuración con las rutas de los archivos a generar / observar.

De esta manera separarmos las acciones que están en `gulpfile.js` de la configuración de las acciones que están en `config.json`.
-->
## Estructura de carpetas

La estructura de carpetas tiene esta pinta:

```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ images
 |  └─ logo.jpg
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 |  └─ events.js
 ├─ scss
 |  ├─ components
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials
```

> **NOTA:** Los partials de HTML y SASS del proyecto son orientativos. Te recomendamos usar los que quieras, y borrar los que no uses.
<!--
## Vídeotutoriales del Starter kit

- [Qué es, trabajar con la versión de desarrollo y rutas relativas](https://www.youtube.com/watch?v=XwvhXvBijos)
- [Migración de un proyecto, trabajar con la versión de producción y GitHub Pages](https://www.youtube.com/watch?v=qqGClcgt9Uc)
- [Motor de plantillas](https://www.youtube.com/watch?v=4GwXOJ045Zg)
-->
## Falta algo?

Echas de menos que el kit haga algo en concreto? Pidelo sin problema a través de las issues o si te animas a mejorarlo mándanos un PR :)
