import "./scss/style.scss";
import "./libs/carousel.css";

import Carousel from "./libs/carousel";

const el = document.querySelector(".my-slider");
const slider = new Carousel(el);
slider.startInfiniteSlide();
