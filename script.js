script.js
const form = document.getElementById("formCliente");
const lista = document.getElementById("listaClientes");
form.addEventListener("submit", function(event) {
 event.preventDefault();
 const nome = document.getElementById("nome").value;
 const email = document.getElementById("email").value;
 const li = document.createElement("li");
 li.textContent = `${nome} - ${email}`;
 lista.appendChild(li);
 form.reset();
});