const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const cardId = card.getAttribute('id')
        window.location.href = `/recipe?id=${cardId}`
    })
}


// ==== MODAL ====

// for (let card of cards) {
//     card.addEventListener('click', function(){
//         const cardId = card.getAttribute('id')
//         const cardTitle = card.querySelector('.card h3')
//         const cardAutor = card.querySelector('.card p')
//         modalOverlay.classList.add('active')
//         modalOverlay.querySelector("img").src = `/assets/${cardId}.png`
//         modalOverlay.querySelector(".modal-content h3").textContent = cardTitle.textContent
//         modalOverlay.querySelector(".modal-content p").textContent = cardAutor.textContent
        
//         })
// }

// document.querySelector(".close-modal").addEventListener('click', function(){
//     modalOverlay.classList.remove('active')
// })





