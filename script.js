'use strict';

let position = 0; //Смещение от левого края

const sliderLine = document.querySelector('.slider__line');
const btn_prev = document.querySelector('.btn_prev');
const btn_next = document.querySelector('.btn_next');

document.querySelector('.btn_prev').addEventListener('click', btnPrev)
document.querySelector('.btn_next').addEventListener('click', btnNext)


function btnPrev() {
    position -= 256;
    sliderLine.style.left = -position + 'px';

    if (position === 0) {
        btn_prev.disabled = true;
    }

    if (position === 768) {
        btn_next.disabled = false;
    }
}

function btnNext() {
    position += 256;
    sliderLine.style.left = -position + 'px';

    if (position === 256) {
        btn_prev.disabled = false;
    }

    if (position === 1024) {
        btn_next.disabled = true;
    }
}