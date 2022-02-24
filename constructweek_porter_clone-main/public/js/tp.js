import navbar from "js/navbar.js";


let navbar_div = document.getElementById("navbar")


navbar_div.innerHTML = navbar();

import navbar1 from "js/navbar4.js";


let navbar_div1 = document.getElementById("navbar1")


navbar_div1.innerHTML = navbar1();

var abc = document.getElementById("a4");


const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlayp");

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})
overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modalp.active")
    modals.forEach(modal => {
        closeModal(modal)
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modalp")
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) {
        return;
    }
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) {
        return;
    }
    modal.classList.remove("active");
    overlay.classList.remove("active");
}