const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const cardId = card.getAttribute('id')
        window.location.href = `/recipes/${cardId}`
    })
}

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












