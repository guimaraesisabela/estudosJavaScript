function saudação() {
    alert("Olá mundo!");
}

function perguntar () {
    var nome;
    nome = prompt("qual seu nome?");
    alert("olá " + nome);
}
function incrementar () {
    var p1 = document.getElementById("p1")
    p1.innerHTML = parseInt(p1.innerText) + 1;
}