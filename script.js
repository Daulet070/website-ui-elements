const progressLine = document.getElementById('progress');
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
    
    const actives = document.querySelectorAll('.active');
    let progress = (actives.length - 1) / (stepPoints.length - 1) * 100;
    // console.log("🚀 ~ file: script.js ~ line 37 ~ update ~ progress", progress)
    progressLine.style.width = progress + '%';

    if (currentActive === 1) {
        prevBtn.disabled = true

    } else if ( currentActive === stepPoints.length) {
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}