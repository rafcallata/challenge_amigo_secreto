// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo() {
    if (!inputAmigo.value) {
        alert("Debes ingresar el nombre de tu amigo.");
        return;
    }
    if(listaAmigos.includes(inputAmigo.value)){
        alert(`El nombre ${inputAmigo.value} ya esta en la lista.`);
        return;
    }
    const amigo = inputAmigo.value;
    listaAmigos.push(amigo);
    inputAmigo.value = "";

    actualizarListaAmigos(amigo);
}

function actualizarListaAmigos(amigo) {
    ulListaAmigos.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });
    //ulListaAmigos.innerHTML += `<li>${amigo}</li>`;
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El Amigo Secreto es: ${amigoSecreto}</li>`;
}