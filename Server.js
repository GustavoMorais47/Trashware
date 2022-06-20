const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const User = require('./Models/User')


//app.use(session({secret:'xctfvgbhjnkmldfskujyhrtgrfdasdggvcxuffdpmbspdfogisoygatusfdiidffughjkghmfirtert'}))
/*=================== ARQUIVOS ESTÁTICOS ===================*/
app.use('/static', express.static(__dirname+'/Css'));
app.use('/static', express.static(__dirname+'/Js'));
app.use('/static', express.static(__dirname+'/Lib/bootstrap/css'));
app.use('/static', express.static(__dirname+'/Lib/bootstrap/js'));
app.use('/static', express.static(__dirname+'/Lib/jquery'));
app.use('/static', express.static(__dirname+'/Resource'));
app.use('/static', express.static(__dirname+'/'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/*=================== ROTAS ===================*/
app.get('/', function (req, res) {
  res.sendFile(__dirname+"/Pages/index.html")
});
app.get('/authentication', function (req, res) {
    res.sendFile(__dirname+"/Pages/login.html")
});
app.get('/categoria', function (req, res) {
  res.sendFile(__dirname+"/Pages/indisponivel.html")
});
app.get('/compras', function (req, res) {
  res.sendFile(__dirname+"/Pages/indisponivel.html")
});
app.get('/vender', function (req, res) {
  res.sendFile(__dirname+"/Pages/indisponivel.html")
});
app.get('/minha-conta', function (req, res) {
  res.sendFile(__dirname+"/Pages/indisponivel.html")
});
app.get('/config', function (req, res) {
  res.sendFile(__dirname+"/Pages/indisponivel.html")
});
app.get('/termos-condicoes', function (req, res) {
  res.sendFile(__dirname+"/Pages/indisponivel.html")
});
app.get('/sobre', function (req, res) {
  res.sendFile(__dirname+"/Pages/indisponivel.html")
});
app.get('/contato', function (req, res) {
  res.sendFile(__dirname+"/Pages/indisponivel.html")
});
app.get('/suporte', function (req, res) {
  res.sendFile(__dirname+"/Pages/indisponivel.html")
});

app.post('/api/cadastro',function(req,res){
  console.log(req.body)
  /* User.create({
    nome: req.body.rgNome,
    email: req.body.rgEmail,
    senha: req.body.rgPassword,
  }).then(function(){
    //retorna sucesso
  }).catch(function(erro){
    //retorna falha
  })*/
})
app.post('/api/login',function(req,res){
  console.log(req.body)
})

/*=================== INICIA O SERVIDOR ===================*/
app.listen(port, () => {
  console.log(`Servidor: http://localhost:${port}`)
});