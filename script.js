const progressLine = document.getElementById('pogress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const stepPoints = document.querySelectorAll('.circle');

let currentActive = 1

nextBtn.addEventListener('click', () => {
    currentActive++

    if (currentActive > stepPoints.length) {
        currentActive = stepPoints.length
    }
});