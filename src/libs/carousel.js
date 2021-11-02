export default function Carousel(element) {
  if (!element) {
    return console.log("DOM element not found");
  }

  element.classList.add("carousel");

  const carouselList = document.querySelector("[data-carousel-list]");
  carouselList.classList.add("carousel-list");

  const carouselItems = document.querySelectorAll("[data-carousel-item]");
  carouselItems.forEach((item) => {
    item.classList.add("carousel-item");
  });

  const btnRight = document.createElement("button");
  btnRight.classList.add("carousel-btn-right");
  btnRight.innerHTML = "🡲";
  element.appendChild(btnRight);

  const btnLeft = document.createElement("button");
  btnLeft.classList.add("carousel-btn-left");
  btnLeft.innerHTML = "🡰";
  element.appendChild(btnLeft);

  const carouselItemWidth = carouselList.offsetWidth;
  const maxOffset = carouselList.scrollWidth;
  let offset = 0;

  const slideRight = () => {
    offset += carouselItemWidth;
    carouselList.style.transition = "left ease-in-out 1s";
    if (offset > maxOffset - carouselItemWidth) {
      carouselList.style.transition = "unset";
      offset = 0;
    }
    carouselList.style.left = `${-offset}px`;
  };

  const slideLeft = () => {
    carouselList.style.transition = "left ease-in-out 1s";
    offset -= carouselItemWidth;
    if (offset < 0) {
      carouselList.style.transition = "unset";
      offset = maxOffset - carouselItemWidth;
    }
    carouselList.style.left = `${-offset}px`;
  };

  btnRight.addEventListener("click", slideRight);
  btnLeft.addEventListener("click", slideLeft);

  this.removeButtons = () => {
    btnRight.style.display = "none";
    btnLeft.style.display = "none";
  };

  this.slideRight = slideRight;

  this.slideLeft = slideLeft;

  this.startInfiniteSlide = () => {
    setInterval(slideRight, 4000);
  };
}
