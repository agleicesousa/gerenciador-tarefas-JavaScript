const overlay = document.querySelector('#overlay');
const modal = document.querySelector('.modal')

function novaTarefa() {
    overlay.classList.add('active')
    modal.classList.add('active')
}

// overlay.addEventListener('click', (e) => {
//     console.log(e.target)
//     overlay.classList.remove('active')
//     modal.classList.remove('active')
// })