const benfits_link = document.getElementById("benefits_link");
const benefits = document.getElementById("benefits")

benfits_link.addEventListener("click", () => {
  benefits.scrollIntoView({ behavior: "smooth", block: "start"});
});

const features_links = document.getElementById("features_link");
const features = document.getElementById("features")

features_links.addEventListener("click", () => {
  features.scrollIntoView({ behavior: "smooth", block: "start"});
});

const testimonials_link = document.getElementById("testimonials_link");
const testimonial = document.getElementById("testimonials")

testimonials_link.addEventListener("click", () => {
  testimonial.scrollIntoView({ behavior: "smooth", block: "start"});
});

const cta_link = document.getElementById("cta_link")
const cta = document.getElementById("cta")

cta_link.addEventListener("click", () => {
  cta.scrollIntoView({ behavior: "smooth", block: "start"});
});


// Funcionalidad para el slider de los testimonios
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalSlides = testimonials.length;

function showSlide(slideIndex) {
  testimonials.forEach((testimonial, index) => {
    testimonial.style.display = (index === slideIndex) ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

// Se inicializa primer slide visible
showSlide(currentSlide);

if(document.getElementById("button_modal")) {
  let modal = document.getElementById("modal");
  let terminos_y_condiciones = document.getElementById("button_modal");
  let a = document.getElementsByClassName("modal_close")[0];
  let body = document.getElementsByTagName("body");

  terminos_y_condiciones.onclick = function() {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  }

  a.onclick = function() {
    modal.style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  }
}

if(document.getElementById("button_modal_private")) {
  let private_modal = document.getElementById("private_modal");
  let politica_de_privacidad = document.getElementById("button_modal_private");
  let b = document.getElementsByClassName("private_modal_close")[0];
  let body = document.getElementsByTagName("body");

  politica_de_privacidad.onclick = function() {
    private_modal.style.display = "flex";
    private_modal.style.justifyContent = "center";
    private_modal.style.alignItems = "center";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  }

  b.onclick = function() {
    private_modal.style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  }
}