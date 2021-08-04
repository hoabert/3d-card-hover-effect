// Dom elements
let cards = document.getElementsByClassName('card-container');
const rotationContraint = 20;

// Event Handlers
const cardMouseMoveHandler = (cardContainer) => {
    const card = cardContainer.querySelector('.card');
    cardContainer.addEventListener('mousemove', (e) => {
        let xAxis =
            (card.getBoundingClientRect().width / 2 +
                card.getBoundingClientRect().x -
                e.clientX) /
            rotationContraint;

        let yAxis =
            (card.getBoundingClientRect().height / 2 +
                card.getBoundingClientRect().y -
                e.clientY) /
            rotationContraint;

        card.style.transform = `translateZ(25px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        card.style.outline = 'thin solid #0468d4';
    });
};

const cardMouseExitHandler = (cardContainer) => {
    const card = cardContainer.querySelector('.card');

    cardContainer.addEventListener('mouseleave', (e) => {
        card.style.transform = `translateZ(0px) rotateY(0deg) rotateX(0deg)`;
        card.style.outline = 'none';
    });
};

Array.from(cards).forEach((card) => {
    cardMouseMoveHandler(card);
    cardMouseExitHandler(card);
});
