const openModal = document.querySelector('.img1');
const openModal2 = document.querySelector('.img2');
const openModal3 = document.querySelector('.img3');
const openModal4 = document.querySelector('.img4');
const openModal5 = document.querySelector('.img5');

const modal = document.getElementById("modal-1");
const modal2 = document.getElementById("modal-2");
const modal3 = document.getElementById("modal-3");
const modal4 = document.getElementById("modal-4");
const modal5 = document.getElementById("modal-5");

const closeModal = document.querySelector(".modal-close");
const closeModal2 = document.querySelector(".modal-close2");
const closeModal3 = document.querySelector(".modal-close3");
const closeModal4 = document.querySelector(".modal-close4");
const closeModal5 = document.querySelector(".modal-close5");

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

openModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

openModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

openModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

openModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});