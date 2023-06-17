const loginLink = document.getElementById("loginLink");

loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  const nomeDeUsuario = document.getElementById("nomeDeUsuario").value;
  const senha = document.getElementById("senha").value;
  if (nomeDeUsuario === "1" && senha === "1") {
    window.location.href = "../home/home.html";
  } else {
    alert("Nome de usuário ou senha incorretos.");
  }
});
