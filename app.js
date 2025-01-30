//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];


function verificarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo.trim() === "") {
        alert('Você não pode enviar um nome vazio!');
        return false;
    }
    return true;
}

//A verificação do amigo é feita primeiro e então é invocada na função adicionarAmigo
function adicionarAmigo() {
    if(verificarAmigo()) {
        let amigo = document.getElementById('amigo').value;
        amigos.push(amigo);
        document.getElementById('amigo').value = "";
    }
    atualizarAmigos();
}

function atualizarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);

    }
}

function sortearAmigo() {

    let indiceAleatorio = Math.floor(Math.random() * amigos.length );

    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('amigoSorteado').innerHTML = "Nome Sorteado: <Strong>" + amigoSorteado + "</Strong>";

    document.getElementById('amigoSorteado').style.display = 'block';

}


