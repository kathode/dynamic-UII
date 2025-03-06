import { Carousel } from "./carousel.logic";
import { createElement } from "./helpers";
import "./styles.css";

let timeout = 0;

(function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdown.addEventListener("click", () => {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });

  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");

  const carousel = new Carousel();
  timeout = renderCarouselItem(carousel);

  prev.addEventListener("click", () => {
    clearTimeout(timeout);
    carousel.prev();
    timeout = renderCarouselItem(carousel);
  });

  next.addEventListener("click", () => {
    clearTimeout(timeout);
    carousel.next();
    timeout = renderCarouselItem(carousel);
  });
})();

function renderCarouselItem(carousel) {
  const activeIndex = carousel.getPosition();
  const carouselContent = document.querySelector(".carousel-content");
  carouselContent.innerHTML = "";

  for (let i = 0; i < carousel.getArray().length; i++) {
    carouselContent.append(
      createElement("span", { textContent: carousel.getArray()[i], className: `carousel-item ${activeIndex === i ? "active" : ""}` })
    );
  }

  return setTimeout(() => {
    carousel.next();
    timeout = renderCarouselItem(carousel);
  }, 5000);
}
