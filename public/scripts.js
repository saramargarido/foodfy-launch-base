// MOSTRAR E ESCONDER LISTAS:
const showButtons = document.querySelectorAll('.list-title')

for (let showButton of showButtons) {
    const button = showButton.querySelector('small')
    button.addEventListener('click', function(){
        const id = this.dataset.title
        const list = document.getElementById(id)
        list.classList.toggle('d-none')
        if(list.classList.contains('d-none')) {
            this.innerHTML = ('mostrar')
        } else {
            this.innerHTML = ('esconder')
        }
    })
}

const btnsAdd = document.querySelectorAll('.btn-add')

for (let btnAdd of btnsAdd) {
    btnAdd.addEventListener("click", addInput)
}

function addInput() {
    const fieldId = this.dataset.id
    const fields = document.querySelector("#"+fieldId);
    const fieldContainer = document.querySelectorAll(".input-field-"+fieldId);

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    fields.appendChild(newField);
}

const formDelete = document.querySelector('#delete')
formDelete.addEventListener('click', function(event) {
    const confirmation = confirm('Deseja deletar?')
    if(!confirmation) {
        event.preventDefault()
    }
})














