let links = document.querySelector(".links");
menu.addEventListener("click", appearIcon);
function appearIcon() {
  links.classList.add("active");
}
cross.addEventListener("click", removeIcon);
function removeIcon() {
  links.classList.remove("active");
}
window.addEventListener("scroll", removeIcon);
