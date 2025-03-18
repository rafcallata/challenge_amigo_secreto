// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo() {
    if (!inputAmigo.value) {
        alert("Debes ingresar el nombre de tu amigo");
    }
    const amigo = inputAmigo.value;
    listaAmigos.push(amigo);
    ulListaAmigos.innerHTML += `<li>${amigo}</li>`;
    console.log(listaAmigos);
    inputAmigo.value = "";
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El Amigo Secreto es: ${amigoSecreto}</li>`;
}