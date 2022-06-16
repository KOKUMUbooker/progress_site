'use strict';
let lebalSubmit = document.querySelector(".submit");
let openModal = document.querySelector('.modal-1');
let modalOverlay = document.querySelector('.overlay');
let closeModal = document.querySelector('.close-modal');


lebalSubmit.addEventListener("click", function () {
    console.log(openModal);
        openModal.classList.remove('hidden');
        modalOverlay.classList.remove('hidden');
});

closeModal.addEventListener('click',function(){
    openModal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
})
    