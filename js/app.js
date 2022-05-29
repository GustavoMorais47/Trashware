var btnSignin = document.querySelector("#entrar");
var btnSignup = document.querySelector("#criar");
var body = document.querySelector("body");

btnSignin.addEventListener("click", function(){
    body.className="sign-in-js";
});

btnSignup.addEventListener("click", function(){
    body.className="sign-up-js";
});