// tela login stephanie 

let user = {
    login: "teste@example.com",
    senha: "1234"
};


let userJSON = JSON.stringify(user);

localStorage.setItem("user", userJSON);

function checkLogin(login, senha) {
    let userJSON = localStorage.getItem("user");

    let user = JSON.parse(userJSON);

    if(user.login === login && user.senha === senha) {
        return true;
    } else {
        return false;
    }
}

var form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var login = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if(checkLogin(login, senha)) {
        console.log("Login efetuado com sucesso!");
        window.open("menuPrincipal.html", "_self"); 
    } else {
        console.log("Login ou senha incorretos!");
    }
});

