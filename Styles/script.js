document.addEventListener("DOMContentLoaded", function(event) { 
  let user = JSON.parse(localStorage.getItem("userLogeado"));
  if(user){
      document.getElementById("user-logueado").innerText = "Bienvenido/a "+user[0].nombre;        
  }
});

function login() {
    document.getElementById("errors").innerText = "";
    let dni = document.getElementById("dni").value;
    let password = document.getElementById("password").value;
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let existe = false;
    let user = [];
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].dni == dni && usuarios[i].contraseña == password) {
        existe = true;
        user.push(usuarios[i]);
        break;
      }
    }
    if (existe) {
      localStorage.setItem("userLogeado", JSON.stringify(user));
      document.getElementById("errors").innerText = "Inicio de sesión correcto";
      location.href = "index.html";
      return;
    }
    document.getElementById("errors").innerText =
      "Usuario o contraseña incorrectos";
      
  }

  function register() {
    let name = document.getElementById("name").value;
    let dni = document.getElementById("dni").value;
    let os = document.getElementById("os").value;
    let password = document.getElementById("password").value;
  
    if (name.length < 3) {
      document.getElementById("errors").innerText =
        "El nombre debe contener mas de 3 letras";
      return;
    }
    let data = {
      nombre: name,
      dni: dni,
      obra_social: os,
      contraseña: password,
    };
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let existe = false;
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].dni == dni) {
        existe = true;
        document.getElementById("errors").innerText = "El usuario ya existe";
        break;
      }
    }
  
    if (existe == false) {
      document.getElementById("register").innerText = "Se registro el usuario";
      usuarios.push(data);
      location.href = "inicioSesion.html";
    }
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
