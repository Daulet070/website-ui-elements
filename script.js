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
    update();
});
prevBtn.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update();
});

function update() {
    stepPoints.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}