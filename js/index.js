var backTop = document.querySelector("#goTop");
window.addEventListener("scroll",scrollFunction);

function scrollFunction(){
    if(window.pageYOffset >= 15){
        backTop.style.display = "block";
    }else{
        backTop.style.display = "none";
    }
    console.log("Text "+window.pageYOffset);
}
backTop.addEventListener("click",function(){
    window.scroll(0,0);
})