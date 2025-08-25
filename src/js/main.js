'use strict';

console.log('>> Ready :)');

const userList = document.querySelector(".js_userList");
const saveBtn = document.querySelector(".js_savebtn");
const recoverBtn = document.querySelector(".js_recoverbtn");

let users = [];//mi array comienza vacío y se rellena con los datos de la API

//función para pintar el listado de usuarios
const renderList = () => {
    let html = "";//empezamos con un html vacío, después estructura del html y, una vez tiene toda la info, la pinta (más eficiente)
    for (let item of users) {

        const friendClass = item.isFriend ? "friend" : "";//cambiar color tarjeta usuario si es amigo   

        html += `<li class="user_container js_user ${friendClass}" id="${item.id}">
        <img class="user_img" src=${item.picture} alt="Foto usuario">
        <h2 class="user_name">${item.name}</h2>
        <p class="user_country">${item.country}</p>
        <p class="user_username">@${item.username}</p>
        </li>`
    }

    userList.innerHTML = html;

    //cuando los usuarios están pintados, es cuando hay que saber a quién se le da clic, por eso hago un querySelectorAll
    //con querySelectorAll traigo todos los usuarios en un listado, por eso hago un bucle for
    const allUsers = document.querySelectorAll(".js_user");
        for(let oneUser of allUsers) {
            oneUser.addEventListener("click", handleClickUser);//listener sobre cada usuario
        } 
};

//función manejadora para añadir la propiedad isFriend al objeto
const handleClickUser = (ev) => {
    console.log("doy clic al usuario");
    console.log("id user clicado:", ev.currentTarget.id);//si no pongo el .id me devuelve toda la indo del <li> (img, h2, p, p)

    let idClicked = ev.currentTarget.id;//este es el user y, por tanto, el id clicado

    //find: busca en mi array users el id del usuario que coincide con el id clicado
    const userClicked = users.find(userItem => userItem.id === idClicked);
    console.log("user clicked info:" , userClicked);

    //si la id del usuario clicado coincide con la id de algún usuario de la API
    if (userClicked) {
        userClicked.isFriend = !userClicked.isFriend;//añade la propiedad isFriend y alterna el valor entre true y false
        renderList(); 
    }
} 

//función manejadora para guardar usuarios
const handleClickSave = () => {
     localStorage.setItem("users", JSON.stringify(users));
}

//función manejadora para recuperar usuarios
const handleClickRecover = () => {
    if(localStorage.getItem("users") !=null) {
        users = JSON.parse(localStorage.getItem("users"));
        renderList();
    }    
} 

//llamada a la API
fetch("https://randomuser.me/api/?results=10")
    .then (response => response.json())
    .then (data => {
        //limpio los datos de la API con map (me devuelve un nuevo array y hay que construir de nuevo el objeto)
        users = data.results.map(user => {
            return {
                name: `${user.name.first} ${user.name.last}`,
                country: user.location.country,
                picture: user.picture.large,
                username: user.login.username,
                id: user.login.uuid, 
            };
        });
        console.log("users limpios:", users);
        renderList();   
        })
 
//eventos para escuchar el clic sobre los botones de guardar y recuperar
saveBtn.addEventListener("click", handleClickSave);
recoverBtn.addEventListener("click", handleClickRecover);
  














