document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const startButton = document.getElementById('start-game');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    const cardArray = [
        { name: 'card1', img: 'images/larry.jpeg' },
        { name: 'card1', img: 'images/larry.jpeg' },
        { name: 'card2', img: 'images/sahur.jpeg' },
        { name: 'card2', img: 'images/sahur.jpeg' },
        { name: 'card3', img: 'images/pork.jpeg' },
        { name: 'card3', img: 'images/pork.jpeg' },
        { name: 'card4', img: 'images/drake.png' },
        { name: 'card4', img: 'images/drake.png' },
        { name: 'card5', img: 'images/fine.png' },
        { name: 'card5', img: 'images/fine.png' },
        // ...add more pairs as needed
    ];

    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function createBoard() {
        shuffle(cardArray);
        grid.innerHTML = '';
        cardsWon = [];
        cardsChosen = [];
        cardsChosenId = [];

        for (let i = 0; i < cardArray.length; i++) {
            const cardWrapper = document.createElement('div');
            cardWrapper.classList.add('card');
            cardWrapper.setAttribute('data-id', i);
            cardWrapper.addEventListener('click', flipCard);

            const cardImg = document.createElement('img');
            cardImg.setAttribute('src', 'images/blank.png');  // All cards start face down
            
            cardWrapper.appendChild(cardImg);
            grid.appendChild(cardWrapper);
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        if (!cardsChosenId.includes(cardId) && cardsChosen.length < 2) {
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.querySelector('img').setAttribute('src', cardArray[cardId].img);
            this.classList.add('show');

            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('#game-board .card img');
        const firstCardId = cardsChosenId[0];
        const secondCardId = cardsChosenId[1];

        const firstCardDiv = grid.children[firstCardId];
        const secondCardDiv = grid.children[secondCardId];

        if (cardsChosen[0] === cardsChosen[1] && firstCardId !== secondCardId) {
            // Match found
            firstCardDiv.removeEventListener('click', flipCard);
            secondCardDiv.removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
            // Optionally hide matched cards or style differently
            firstCardDiv.style.visibility = 'hidden';
            secondCardDiv.style.visibility = 'hidden';
        } else {
            // No match - flip back
            cards[firstCardId].setAttribute('src', 'images/blank.png');
            cards[secondCardId].setAttribute('src', 'images/blank.png');
            firstCardDiv.classList.remove('show');
            secondCardDiv.classList.remove('show');
        }

        cardsChosen = [];
        cardsChosenId = [];

        if (cardsWon.length === cardArray.length / 2) {
            alert('Congratulations! You found them all!');
        }
    }

    startButton.addEventListener('click', createBoard);
});
