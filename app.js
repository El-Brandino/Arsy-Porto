const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener
('input', (e) =>{
    container.style.setProperty('--position', `${e.target.value}%`);
} )

const home = document.querySelector("#home");
const button = document.querySelector(".vector-btn");

window.addEventListener("scroll", () => {
  const rect = home.getBoundingClientRect();

  // Kalau home masih kelihatan di layar
  if (rect.top <= 100 && rect.bottom >= 100) {
    button.classList.add("hide");
  } else {
    button.classList.remove("hide");
  }
});

const slider = document.querySelector(".carosel");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let timer = 3000;

// buat dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function goToSlide(i) {
  index = i;
  updateSlider();
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  timer = 3000;
  updateSlider();
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  timer = 3000;
  updateSlider();
});

// auto slide
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
},timer);