"use strict";
const rateBtn = document.querySelectorAll(".btn");
const submitBtn = document.getElementById("submit");
const showModal = document.getElementById("show-modal");
const hideModal = document.getElementById("hide-component");
const selected = document.getElementById("selected");
let rate = 0;

for (let i = 0; i < rateBtn.length; i++) {
  rateBtn[i].addEventListener("click", function () {
    // Remove 'active' class from all rateBtn elements
    for (let j = 0; j < rateBtn.length; j++) {
      rateBtn[j].classList.remove("active");
    }
    // Add 'active' class to the clicked button
    rateBtn[i].classList.add("active");
    rate = rateBtn[i].textContent;
    selected.textContent = rate;
  });
}
submitBtn.addEventListener("click", function () {
  hideModal.classList.add("hidden");
  showModal.classList.remove("hidden");
});
