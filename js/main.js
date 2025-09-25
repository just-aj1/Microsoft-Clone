document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));
const slides = document.querySelector('.slides');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const dotContainer = document.querySelector('.dots');
const totalSlides = slides.children.length;
let index = 0;

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        moveToSlide(i);
    });
    dotContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function moveToSlide(slideIndex) {
    if (slideIndex < 0) {
        index = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        index = 0;
    } else {
        index = slideIndex;
    }
    updateSlider();
}

left.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalSlides - 1;
    updateSlider();
});

right.addEventListener('click', () => {
    index = (index < totalSlides - 1) ? index + 1 : 0;
    updateSlider();
});

setInterval(() => {
    moveToSlide(index + 1);
}, 5000);