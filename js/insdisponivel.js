var menu = document.querySelector("#MenuUser");
var login = document.querySelector("#BtnLogin");
var UserNome = document.querySelector("#TextUser");
var User = null;

window.addEventListener("load",Logado);

function Logado(){
    if(User == null){
        menu.style.display = "none";
        login.style.display = "flex";
    }else{
        UserNome.textContent = User;
        menu.style.display = "flex";
        login.style.display = "none";
    }
}