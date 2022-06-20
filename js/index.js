var backTop = document.querySelector("#goTop");
var menu = document.querySelector("#MenuUser");
var login = document.querySelector("#BtnLogin");
var UserNome = document.querySelector("#TextUser");
var User = null;

window.addEventListener("scroll",scrollFunction);
window.addEventListener("load",Logado);

function scrollFunction(){
    if(window.pageYOffset >= 15){
        backTop.style.display = "block";
    }else{
        backTop.style.display = "none";
    }    
}
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
backTop.addEventListener("click",function(){
    window.scroll(0,0);
})