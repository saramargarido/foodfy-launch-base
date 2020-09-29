const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const cardId = card.getAttribute('id')
        const cardTitle = card.querySelector('.card h3')
        const cardAutor = card.querySelector('.card p')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `/assets/${cardId}.png`
        modalOverlay.querySelector(".modal-content h3").textContent = cardTitle.textContent
        modalOverlay.querySelector(".modal-content p").textContent = cardAutor.textContent
        
        })
}

document.querySelector(".close-modal").addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    // modalOverlay.querySelector('iframe').src = ""
})


// for (let card of cards) {
//     card.addEventListener('click', function(){
//         const imgId = card.getAttribute('img')
//         modalOverlay.classList.add('active')
//         modalOverlay.querySelector('img').src = `{img}`
//     })
// }

// document.querySelector(".close-modal").addEventListener('click', function(){
//     modalOverlay.classList.remove('active')
// })



