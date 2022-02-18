

var btnLogin = document.getElementById("btn-login");
var btnCadastrar = document.getElementById("btn-cadastro");

// Função que permite: No click do Btn Login aparece o formulário de Login:
btnLogin.addEventListener('click', function(){
    document.getElementById("div-formulario-de-login").style.transform = "translate(0%)";
    document.getElementById("div-formulario-de-cadastro").style.transform = "translate(100%)";
    document.getElementById("btn-login").style.borderBottom = "1px solid rgb(242, 111, 198)";
    document.getElementById("btn-cadastro").style.borderBottom = "transparent";

})

// Função que permite: No click do Btn Cadastrar aparece o formulário de cadastro:
btnCadastrar.addEventListener('click', function(){
    document.getElementById("div-formulario-de-login").style.transform = "translate(-100%)";
    document.getElementById("div-formulario-de-cadastro").style.transform = "translate(0%)";
    document.getElementById("btn-cadastro").style.borderBottom = "1px solid rgb(242, 111, 198)";
    document.getElementById("btn-login").style.borderBottom = "transparent";

})




