// tela login stephanie

document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const usuario = {
    email: email,
    password: password,
  };

  fetch('http://localhost:3000/users')  
    .then((response) => response.json())
    .then((usuario) => {
      if (email == usuario[0].email) {
        window.location.href = 'MenuPrincipal.html';
      } else {
        console.log(usuario[0].email);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});



// tela vinicius

function irpara_cadmorador() {
    window.location.href = "CadastroMorador.html"
    }

function irpara_cadONG() {
    window.location.href = "CadastroONG.html"
    }

function irpara_relatorios() {
    window.location.href = "Relatorios.html"
    }      