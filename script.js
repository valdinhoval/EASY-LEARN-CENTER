// Burger Menu
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dropdown on click
const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".dropbtn");

dropBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});
