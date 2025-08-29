'use strict';

console.log('>> Ready :)');

//selecciono los elementos del HTML que voy a usar
const userList = document.querySelector(".js_userList");
const saveBtn = document.querySelector(".js_savebtn");
const recoverBtn = document.querySelector(".js_recoverbtn");
const friendsBtn = document.querySelector(".js_friendsbtn");
const friendsNumber= document.querySelector(".js_friendsNumber");

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

    const idClicked = ev.currentTarget.id;//este es el user y, por tanto, el id clicado

   //find: busca en mi array users el id del usuario que coincide con el id clicado
    const userClicked = users.find(userItem => userItem.id === idClicked);
    console.log("user clicked info:" , userClicked);

    //si la id del usuario clicado coincide con la id de algún usuario de la API
    if (userClicked) {
        userClicked.isFriend = !userClicked.isFriend;//añade la propiedad isFriend y alterna el valor entre true y false
        renderList(); 
        //handleClickCount();// en vez de tener el botón de contar, puedo hacer que cada vez que se hace clic en un usuario se llame a la función de contar
    }

    //también se puede hacer con findIndex: si no está en la lista te devuelve -1
 /*    const indexClicked = users.findIndex(userItem => userItem.id === idClicked)
    console.log("user index:" , indexClicked);
    console.log("info user clicked:", users)

    if (indexClicked !== -1) {
        users[indexClicked].isFriend = !users[indexClicked].isFriend;
        renderList();
    } */
} 

//función manejadora para guardar usuarios
const handleClickSave = () => {
     localStorage.setItem("users", JSON.stringify(users));//JSON.stringify convierte los datos del array en JSON (texto plano)
}

//función manejadora para recuperar usuarios
const handleClickRecover = () => {
    if(localStorage.getItem("users") !=null) {
        users = JSON.parse(localStorage.getItem("users"));//convierte los datos en texto plano en objetos de un array
        renderList();
        handleClickCount();
    }    
} 

//función para contar amigos
const handleClickCount = () => {
    const countFriends = users.filter(user => user.isFriend); //filtra los que son amigos
    const totalFriends = countFriends.length;
    if (totalFriends === 0) {
        friendsNumber.innerHTML = `<p>I have ${totalFriends} friends</p> <img class="triste" src="./images/triste.png" alt="icono triste">`
    } else if (totalFriends === 1){
        friendsNumber.innerHTML = `<p>I have ${totalFriends} friend</p> <img class="feliz" src="./images/feliz.png" alt="icono feliz">`
    } else {
        friendsNumber.innerHTML = `<p>I have ${totalFriends} friends</p> <img class="feliz" src="./images/feliz.png" alt="icono feliz">`
    }
    console.log("Contando amigos:", totalFriends)
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

//también se puede utilizar un bucle for
/*  fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => {
        
        // recorremos cada usuario con for...of // también podría hacerse con forEach -> data.results.forEach(user => {
        for (const user of data.results) {
            const cleanedUser = {
                name: `${user.name.first} ${user.name.last}`,
                country: user.location.country,
                picture: user.picture.large,
                username: user.login.username,
                id: user.login.uuid,
            };
            users.push(cleanedUser);
        }
        console.log("users limpios:", users);
        renderList();
    });  */
 
//eventos para escuchar el clic sobre los botones de guardar y recuperar
saveBtn.addEventListener("click", handleClickSave);
recoverBtn.addEventListener("click", handleClickRecover);
//evento para escuchar el clic sobre el botón de contar amigos
friendsBtn.addEventListener("click", handleClickCount)
  














