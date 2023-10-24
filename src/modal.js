const openModal = document.querySelector('.open-modal-btn')
const modalContainer = document.querySelector('.modal-container')

openModal.addEventListener('click', function() {
    modalContainer.classList.remove('hidden')
})

const closeButton = document.querySelector('.close-btn')
closeButton.addEventListener('click', function() {
    modalContainer.classList.add('hidden')
})