console.log(">> Ready :)");const l=document.querySelector(".js_userList"),i=document.querySelector(".js_savebtn"),a=document.querySelector(".js_recoverbtn");let n=[];const o=r=>{let e="";for(let s of n){const c=s.isFriend?"friend":"";e+=`<li class="user_container js_user ${c}" id="${s.id}">
        <img class="user_img" src=${s.picture} alt="Foto usuario">
        <h2 class="user_name">${s.name}</h2>
        <p class="user_country">${s.country}</p>
        <p class="user_username">@${s.username}</p>
        </li>`}l.innerHTML=e;const t=document.querySelectorAll(".js_user");for(let s of t)s.addEventListener("click",u)},u=r=>{console.log("doy clic al usuario"),console.log("id user clicado:",r.currentTarget.id);let e=r.currentTarget.id;const t=n.find(s=>s.id===e);console.log("user clicked info:",t),t&&(t.isFriend=!t.isFriend,o())},d=()=>{localStorage.setItem("users",JSON.stringify(n))},m=()=>{localStorage.getItem("users")!=null&&(n=JSON.parse(localStorage.getItem("users")),o())};fetch("https://randomuser.me/api/?results=10").then(r=>r.json()).then(r=>{n=r.results.map(e=>({name:`${e.name.first} ${e.name.last}`,country:e.location.country,picture:e.picture.large,username:e.login.username,id:e.login.uuid})),console.log("users limpios:",n),o()});i.addEventListener("click",d);a.addEventListener("click",m);
//# sourceMappingURL=main.js.map
