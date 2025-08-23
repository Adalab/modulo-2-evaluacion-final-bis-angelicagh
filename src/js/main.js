'use strict';

console.log('>> Ready :)');

const userList = document.querySelector(".js_userList");
const friendsList = document.querySelector(".js_friendsList");
const saveBtn = document.querySelector(".js_savebtn");
const recoverBtn = document.querySelector(".js_recoverbtn");
const removeBtn = document.querySelector(".js_removebtn");




let users = [];//1º empezamos con un array vacio
let friends = [];//7º array que se va a rellenar con los users marcados como amigos









//3º funcion para pintar los 10 usuarios random
//declaramos variable con html vacío, después estructura del html y, una vez tiene toda la info, la pinta (esta forma es más eficiente)
//nota: le doy un id unico a cada botón, para saber dónde doy clic (el id lo cojo de la API)

//OJOOOOOOOO: PROBAR A DARLE CLASE JS Y ID AL LI
const renderList = () => {
    let html = "";
    for (let item of users) {
    
    let heartSrc = "/images/blanco.png"; // valor por defecto

        if (item.isFriend === true) {
                heartSrc = "/images/rojo.png";
        }

    html += `<li class="user_container">
    <button class="button js_button" id="${item.login.uuid}">
    <img class="button_icon js_heart" src="${heartSrc}" alt="Like"/>
    </button>
    <img class="user_img" src=${item.picture.large} alt="Foto usuario">
    <h2 class="user_name">${item.name.first} ${item.name.last}</h2>
    <p class="user_country">${item.location.country}</p>
    <p class="user_username">@${item.login.username}</p>
    </li>`
    }
    userList.innerHTML = html;

    //5º cuando los usuarios están pintados, es cuando hay que saber a quién se le da clic
    //con querySelectorAll traigo todos los botones en un listado, por eso hago un bucle for
    const allButtons = document.querySelectorAll(".js_button");
    for(let button of allButtons) {
        button.addEventListener("click", handleClick);//listener sobre cada botón
    }
}

//9º funcion para pintar los amigos
const renderFriends = () => {
    let html = "";
    for (let item of friends) {
        
    let heartSrc = "/images/blanco.png"; //color del corazón por defecto

        if (item.isFriend === true) {
            heartSrc = "/images/rojo.png";
        }

        html += `<li class="user_container_friend">
        <button class="buttonFriend js_button" id="${item.login.uuid}">
                <img class="button_icon js_heart" src="${heartSrc}" alt="Like"/>
            </button>
        <img class="user_img_friend" src=${item.picture.large} alt="Foto usuario">
        <h2 class="user_name_friend">${item.name.first} ${item.name.last}</h2>
        <p class="user_country_friend">${item.location.country}</p>
        <p class="user_username_friend">@${item.login.username}</p>
        </li>`
        }
       
        friendsList.innerHTML = html; 
}


//6º función manejadora para cambiar el corazón blanco por el rojo cuando el usuario hace clic
const handleClick = (ev) => {
        console.log("doy clic al botón");
        console.log("id user clicado:", ev.currentTarget.id);
        let buttonClicked = ev.currentTarget;
        let idClicked = buttonClicked.id;
        console.log("id user:", idClicked)
        const heartImg = buttonClicked.querySelector(".js_heart");//busca dentro del botón una imagen con la clase js_heart

        // alternar entre corazón blanco y rojo
        if (heartImg.src.includes("blanco.png")) {
            heartImg.src = "/images/rojo.png";
        } else {
            heartImg.src = "/images/blanco.png";
        }

        //8º añadir a lista de amigos
        //paso 1: buscar al usuario clicado
        let friendClicked = users.find(userItem => userItem.login.uuid === idClicked);
        console.log("info:" , friendClicked);


        //paso 2: buscar si ya está en la lista de amigos
        //para añadir el amigo, NO debe estar previamente en la lista de amigos
        let isMyFriend = friends.findIndex(friendItem => friendItem.login.uuid === idClicked);
        console.log("is friend:" , isMyFriend)

        //si devuelve -1 es que no está en la lista, por lo que tiene que marcarlo como amigo y añadirlo 
        if (isMyFriend === -1) {
             friendClicked.isFriend = true;
             friends.push(friendClicked);
        } else {
            friendClicked.isFriend = false;
            friends.splice(isMyFriend, 1);
        }

        renderFriends();
      
    } 



const handleClickSave = () => {
     localStorage.setItem("friends", JSON.stringify(friends));
}

const handleClickRecover = () => {
    if(localStorage.getItem("friends") !=null) {
        friends = JSON.parse(localStorage.getItem("friends"));
        renderFriends();
    }
    
} 

const handleClickRemove = () => {
     localStorage.clear();
      friends = [];   
      //poner todos los corazones blancos
      const allHeartImages = document.querySelectorAll(".js_heart");
    allHeartImages.forEach(img => {
    img.src = "/images/blanco.png";
  });             
  renderFriends(); 
       
}




//2º llamamos a la API 
//4º llamar a la funcion para pintar los datos
//nota: ponemos el fetch al final para asegurarme que cuando obtengo los datos todas las funciones estén declaradas
//10º guardar en local storage
fetch("https://randomuser.me/api/?results=10")
    .then (response => response.json())
    .then (data => {
        console.log("10 random users:" , users);
        users = data.results;//en mi aray vacío "let users = [] guardo los datos que me devuelve el fetch"

        
       
        
        renderList();//el nombre del parametro de la funcion me lo invento y el que le paso para llamarla es el dato real. en este caso el dato real es "data.results", pero yo lo he guardado en la variable "let users = []"  
    })

saveBtn.addEventListener("click", handleClickSave);
recoverBtn.addEventListener("click", handleClickRecover);
removeBtn.addEventListener("click", handleClickRemove);

//ORDEN:
//1. ModificaR objeto
//2. actualizar array
//3. guardar en LS: guardar en LS antes de renderizar es más seguro, ya que si se cierra la pestaña por error, los datos ya están guardados
//4. renderizar









//--------------------------------------------------------------------------------------------------//

//SI QUIERO CAMBIARLE LA CLASE AL BOTÓN -> TOGGLE MANUAL

/*  const handleClick = (ev) => {
    console.log("doy clic al user");
    console.log("user clicado:", ev.target);
    console.log("user clicado bis:", ev.currentTarget);
    console.log("id user clicado:", ev.target.id);

    let buttonClicked = ev.currentTarget;

    if (buttonClicked.classList.contains("button")) {
        buttonClicked.classList.remove("button");
        buttonClicked.classList.add("friend");
    } else {
        buttonClicked.classList.remove("friend");
        buttonClicked.classList.add("button");
    }  
} */