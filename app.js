// Dom elements
let cards = document.getElementsByClassName('card');
const rotationContraint = 20;

// Event Handlers
const cardMouseMoveHandler = (card) => {
    console.log('a');
    card.addEventListener('mousemove', (e) => {
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

        card.style.transform = `scale(1.05) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        console.log('!');
    });
};

const cardMouseEnterHandler = (card) => {
    card.addEventListener('mouseenter', (e) => {
        setTimeout(() => {
            card.style.transition = `all 0.15s linear`;
        }, 500);
    });
};

const cardMouseExitHandler = (card) => {
    card.addEventListener('mouseleave', (e) => {
        card.style.transition = `all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)`;
        card.style.transform = `scale(1) rotateY(0deg) rotateX(0deg)`;
    });
};

Array.from(cards).forEach((card) => {
    console.log('1');
    cardMouseMoveHandler(card);
    cardMouseEnterHandler(card);
    cardMouseExitHandler(card);
});
