const cardsWrapper = document.querySelector('.cards-wrapper');

cardsWrapper.addEventListener('click', (event) => {
    let target = event.target;
    if (target.matches('.panel')) {
        [...cardsWrapper.children].forEach(panel => {
            panel.classList.remove('active');
        });
        target.classList.add('active');
    }
});