const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

// Клик по кнопкам с подсказками
for (let infoBtn of infoBtns) {
  infoBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    this.parentNode.querySelector(".info-hint").classList.toggle("d-none");
  });
}

// Закрываем подсказки при клике по всему документу
document.addEventListener("click", () => {
  for (let infoHint of infoHints) {
    infoHint.classList.add("d-none");
  }
});

// Запрещаем всплытие события клика при клике на подсказки
for (let infoHint of infoHints) {
  infoHint.addEventListener("click", (e) => e.stopPropagation());
}

// Swiper slider
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 42,
  loop: true,
  freeMode: true,

  /* breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },  */

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});
