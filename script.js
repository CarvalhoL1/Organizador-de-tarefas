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