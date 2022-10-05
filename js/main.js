let header = document.querySelector(".header");
let links = document.querySelector(".links");
let searchForm = document.querySelector(".search-form");
let searchIcon = document.querySelector("#search-icon");
let closeIcon = document.querySelector("#close-search");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let pages = document.querySelectorAll("div.view");
let polets = document.querySelectorAll("ul > li");
let currentIndex = 1;
next.addEventListener("click", nextPage);
prev.addEventListener("click", prevPage);
for (let i = 0; i < polets.length; i++) {
  const e = polets[i];
  console.log(e);
  e.addEventListener("click", () => {
    removeActive();
    addActive(i + 1);
  });
}
function removeActive() {
  pages.forEach((page) => {
    page.classList.remove("active");
  });
  polets.forEach((polet) => {
    polet.classList.remove("active");
    console.log(polet);
  });
}
function addActive(currentIndex) {
  pages[currentIndex - 1].classList.add("active");
  polets[currentIndex - 1].classList.add("active");
}
function nextPage() {
  removeActive();
  currentIndex++;
  if (currentIndex <= 3) {
    addActive(currentIndex);
  } else {
    currentIndex = 1;
    addActive(currentIndex);
  }
}
function prevPage() {
  removeActive();
  currentIndex--;
  if (currentIndex > 0) {
    addActive(currentIndex);
  } else {
    currentIndex = 3;
    addActive(currentIndex);
  }
}
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
window.addEventListener("scroll", backGround);
function backGround() {
  header.classList.remove("scrol");
  if (window.scrollY > 0) {
    header.classList.add("scrol");
  } else {
    header.classList.remove("scrol");
  }
}
searchIcon.addEventListener("click", search);
closeIcon.addEventListener("click", close);
function search() {
  searchForm.classList.add("active");
}
function close() {
  searchForm.classList.remove("active");
}
//////////////////////
/////////////////////

var swiper = new Swiper(".product-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // show 1 slide from 0 to 640px
    },
    640: {
      slidesPerView: 2, // show 2 slide from 641px to 768px
    },
    768: {
      slidesPerView: 3, // show 3 slide from 769px to 1024px
    },
    1024: {
      slidesPerView: 4, // show 4 slide from 1024px to .....
    },
  },
});
