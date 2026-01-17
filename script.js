const key = "tarefas";
let tarefas = JSON.parse(localStorage.getItem(key)) || [];
function salvarTarefas() {
  localStorage.setItem(key, JSON.stringify(tarefas));
}

function inserir_tarefa(){
event.preventDefault();
const conteudo = document.getElementById('tarefa').value
const prioridade = document.getElementById('prioridade').value
const data_dados = document.getElementById('inserir_data').value
let data = new Date(data_dados)
let dia = ""
let hora = ""
const container = document.getElementById('tarefa_direito')
if(!isNaN(data.getTime())){
dia = "Dia: " + data.toLocaleDateString();
hora = "as " + data.toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit'});
}
const lista = document.createElement("div")
if(!conteudo){
    document.querySelector('.alerta').innerHTML = `Você não digitou a tarefa!`
    return
}
else{
document.querySelector('.alerta').innerHTML = ``
lista.classList.add("bloco-tarefa")
lista.innerHTML = `
    <button class="apagar"><i class="fa-solid fa-delete-left"></i></button>
    <div class="conteudo">${conteudo}</div>
    <div class="prioridade-direito">Prioridade: ${prioridade}</div>
    <div class="data">${dia} ${hora}</div>
    `

const tarefa_obj = {
    id: Date.now(),
    conteudo,
    prioridade: Number(prioridade),
    dataISO: (!isNaN(data.getTime()) ? data.toISOString() : null)
}
tarefas.push(tarefa_obj);
salvarTarefas();

lista.dataset.prioridade = prioridade
lista.dataset.id = tarefa_obj.id
lista.dataset.prioridade = tarefa_obj.prioridade
lista.querySelector(".apagar").addEventListener("click", () => apagar(tarefa_obj.id));
container.appendChild(lista)
}


const blocos = Array.from(container.children)
blocos.sort(ordenar)
blocos.forEach(bloco => container.appendChild(bloco))
}
function apagar(id){
    tarefas = tarefas.filter(t => t.id !== id);
    salvarTarefas();
    const container = document.getElementById('tarefa_direito');
    const bloco = container.querySelector(`[data-id="${id}"]`);
    if (bloco) bloco.remove();
}
function ordenar(a, b){
    return Number(b.dataset.prioridade) -  Number(a.dataset.prioridade)
}

window.onload = () => {
  const container = document.getElementById('tarefa_direito');
  tarefas.forEach(t => {
    const lista = document.createElement("div");
    lista.classList.add("bloco-tarefa");
    lista.dataset.id = t.id;
    lista.dataset.prioridade = t.prioridade;
    lista.innerHTML = `
      <button class="apagar"><i class="fa-solid fa-delete-left"></i></button>
      <div class="conteudo">${t.conteudo}</div>
      <div class="prioridade-direito">Prioridade: ${t.prioridade}</div>
      <div class="data">${t.dataISO ? new Date(t.dataISO).toLocaleString('pt-BR') : ''}</div>
    `;
    lista.querySelector(".apagar").addEventListener("click", () => apagar(t.id));
    container.appendChild(lista);
  });
  const blocos = Array.from(container.children);
  blocos.sort(ordenar).forEach(bloco => container.appendChild(bloco));
};
