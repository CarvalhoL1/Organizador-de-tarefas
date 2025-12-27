function inserir_tarefa(){
event.preventDefault();
const conteudo = document.getElementById('tarefa').value
const prioridade = document.getElementById('prioridade').value
const data = document.getElementById('inserir_data').value

const lista = document.createElement("div")
lista.classList.add("bloco-tarefa")
lista.innerHTML = `
    <button onclick="apagar(this)" class="apagar"><i class="fa-solid fa-delete-left"></i></button>
    <div class="conteudo">${conteudo}</div>
    <div class="prioridade-direito">Prioridade: ${prioridade}</div>
    <div class="data">${data}</div>
    `
document.getElementById('tarefa_direito').appendChild(lista)
}
function apagar(bloco){
    bloco.parentElement.remove("bloco-tarefa")
}