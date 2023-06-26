document.getElementById('continuar-button').addEventListener('click', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const data = {
    email: email,
    password: password,
  };

  fetch('http://localhost:3000/validateUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro ao fazer login');
      }
    })
    .then((data) => {
      if (data) {
        window.location.href = 'MenuPrincipal.html';
      } else {
        console.log('Email ou senha incorretos');
      }
    })
    
    .catch((error) => {
      console.log(error);
    });
});


// tela vinicius

function pesquisar() {
    var termo = document.getElementById("barra-pesquisa").value;

    alert("Você pesquisou por: " + termo);

    return false;
    }

function irpara_cadmorador() {
    window.location.href = "CadastroMorador.html"
    }

function irpara_cadONG() {
    window.location.href = "CadastroONG.html"
    }

function irpara_relatorios() {
    window.location.href = "Relatorios.html"
    }      