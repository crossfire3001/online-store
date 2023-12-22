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

// Tabs
const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    // Убираем активные классы у всех кнопок
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-controls__btn--active");
    }

    // Добавляем активный класс к текущей кнопке
    this.classList.add("tab-controls__btn--active");

    // Отобразить нужные товары и скрыть ненужные товары
    for (let product of tabsProducts) {
      // Проверка на отображение всех слайдов
      if (this.dataset.tab === "all") {
        product.classList.remove("d-none");
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove("d-none");
        } else {
          product.classList.add("d-none");
        }
      }
    }
    // Update Swiper
    swiper.update();
  });
}
