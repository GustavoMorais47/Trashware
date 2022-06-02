const express= require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();

/*=======================DECLARA OS ARQUIVOS ESTÁTICOS=========================*/
app.use(express.static('img'));
app.use(express.static('css'));
app.use(express.static('js'));

app.use(express.static('lib/bootstrap/css'));
app.use(express.static('lib/bootstrap/js'));
app.use(express.static('lib/jquery'));

/*=======================DECLARA AS PÁGINAS DA PLATAFORMA=========================*/

app.get("/",function(req,res){
    res.sendFile(__dirname +"/src/index.html");
})
app.get("/login",function(req,res){
    res.sendFile(__dirname +"/src/login.html");
})
app.get("/categoria",function(req,res){
    res.sendFile(__dirname +"/src/indisponivel.html");
})
app.get("/compras",function(req,res){
res.sendFile(__dirname +"/src/indisponivel.html");
})
app.get("/vender",function(req,res){
res.sendFile(__dirname +"/src/indisponivel.html");
})
app.get("/minha-conta",function(req,res){
res.sendFile(__dirname +"/src/indisponivel.html");
})
app.get("/config",function(req,res){
res.sendFile(__dirname +"/src/indisponivel.html");
})
app.get("/termos-condicoes",function(req,res){
    res.sendFile(__dirname +"/src/indisponivel.html");
})
app.get("/sobre",function(req,res){
    res.sendFile(__dirname +"/src/indisponivel.html");
})
app.get("/contato",function(req,res){
    res.sendFile(__dirname +"/src/indisponivel.html");
})
app.get("/suporte",function(req,res){
    res.sendFile(__dirname +"/src/indisponivel.html");
})
/*=======================INICIA O SERVIDOR=========================*/
app.listen(8080,()=>{
    console.log("Servidor iniciado!")
})
