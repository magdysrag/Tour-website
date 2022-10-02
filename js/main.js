let links = document.querySelector(".links");
let searchForm = document.querySelector(".search-form");
let searchIcon = document.querySelector("#search-icon");
let closeIcon = document.querySelector("#close-search");
menu.addEventListener("click", appearIcon);
function appearIcon() {
  links.classList.add("active");
}
cross.addEventListener("click", removeIcon);
function removeIcon() {
  links.classList.remove("active");
}
console.log(searchForm);
window.addEventListener("scroll", removeIcon);
searchIcon.addEventListener("click", search);
closeIcon.addEventListener("click", close);
function search() {
  searchForm.classList.add("active");
}
function close() {
  searchForm.classList.remove("active");
}