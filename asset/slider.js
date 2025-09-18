let index = 0;
let carouselItems = document.querySelectorAll(".carousel-item");

const updateCarousel = () => {
  carouselItems.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });

  // Shift carousel so the active item is in center
  const offset = -(index - 1) * (100 / 3); // keep center slide in view
  document.querySelector(".carousel-inner").style.transform = `translateX(${offset}%)`;
};

const prev = () => {
    activeclear();
    if (index <= 0) {
        index = carouselItems.length;
    }
    activecarouselItem(--index);
}

const next = () => {
    activeclear();
    if (index >= carouselItems.length - 1) {
        index = -1;
    }
    activecarouselItem(++index);
}



