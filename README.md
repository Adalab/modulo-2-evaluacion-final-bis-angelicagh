# HeyFriend 💛  

**HeyFriend** es una aplicación web sencilla que simula una red social donde puedes descubrir usuarios aleatorios y marcarlos como amigos.

---

## 🌐 Demo en vivo

Puedes probar la aplicación directamente en GitHub Pages:  
[👉 Abrir HeyFriend](https://beta.adalab.es/modulo-2-evaluacion-final-bis-angelicagh/)  

---

## 🚀 Funcionalidades

- 🔄 **Usuarios aleatorios**: se obtienen 10 nuevos usuarios desde [randomuser.me](https://randomuser.me/api/?results=10) cada vez que se inicia la aplicación o se recarga la página. Se ha modificado el objeto para mostrar solo la información relevante: nombre, país, foto y nombre de usuario.
- ❤️ **Marcar como amigo**: al hacer clic en un usuario, se añade la propiedad `isFriend: true` en su objeto. El fondo del perfil cambia de color para indicar que ha sido marcado como amigo.
- 💾 **Guardar usuarios**: con el botón *Save users* puedes guardar el listado actual en `localStorage` para no perderlos al recargar la página.
- ♻️ **Recuperar usuarios**: si recargas la página por error, puedes restaurar el listado anterior con el botón *Recover users*, que lee los datos del `localStorage` y los vuelve a pintar en pantalla.

---

## 📱 Diseño responsive
**HeyFriend** está diseñada para adaptarse a distintos tamaños de pantalla. Ya sea que lo uses en móvil, tablet o escritorio, la interfaz se ajusta automáticamente para ofrecer una experiencia fluida y accesible. Esto se logra mediante media queries.

---

## 🛠️ Tecnologías utilizadas

- **HTML**
- **SCSS**
- **JavaScript**  
- **Vite**
- **Fetch API**  
- **Local Storage**

---

## 📦 Instalación

#### 1. Clona el repo

`git clone https://github.com/Adalab/modulo-2-evaluacion-final-bis-angelicagh.git`

#### 2. Instala las dependencias

`npm install`

#### 3. Ejecuta la app 

`npm run dev`

