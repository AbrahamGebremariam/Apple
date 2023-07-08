let nextEl = document.querySelector('.next');
let prevEl = document.querySelector('.prev');
let sliderImagesEl = document.querySelector('.slider-images');
const imgsEl = document.querySelectorAll('img');
let timeout;
let currentImg = 1;

nextEl.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});
prevEl.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

function updateImg() {
    if (currentImg > imgsEl.length) {
        currentImg = 1;
    }
    else if (currentImg < 1) {
        currentImg = imgsEl.length;
    }
    sliderImagesEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeout = setTimeout(() =>{
        currentImg++;
        updateImg()
    },2000)
    }