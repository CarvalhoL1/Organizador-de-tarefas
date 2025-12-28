function inserir_tarefa(){
event.preventDefault();
const conteudo = document.getElementById('tarefa').value
const prioridade = document.getElementById('prioridade').value
const data_dados = document.getElementById('inserir_data').value
data =new Date(data_dados)
let dia = ""
let hora = ""
if(!isNaN(data.getTime())){
dia = "Dia: " + data.toLocaleDateString();
hora = "as " + data.toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit'});
}
const lista = document.createElement("div")
if(!conteudo){
    document.querySelector('.alerta').innerHTML = `Você não digitou a tarefa!`
}
else{
document.querySelector('.alerta').innerHTML = ``
lista.classList.add("bloco-tarefa")
lista.innerHTML = `
    <button onclick="apagar(this)" class="apagar"><i class="fa-solid fa-delete-left"></i></button>
    <div class="conteudo">${conteudo}</div>
    <div class="prioridade-direito">Prioridade: ${prioridade}</div>
    <div class="data">${dia} ${hora}</div>
    `
}
lista.dataset.prioridade = prioridade
const container = document.getElementById('tarefa_direito')
document.getElementById('tarefa_direito').appendChild(lista)
const blocos = Array.from(container.children)
blocos.sort(ordenar)
blocos.forEach(bloco => container.appendChild(bloco))
}
function apagar(bloco){
    bloco.parentElement.remove()
}
function ordenar(a, b){
    return Number(b.dataset.prioridade) -  Number(a.dataset.prioridade)
}