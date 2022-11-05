const gitHub = 'https://github.com/ylancy/mini-projects/tree/main';

const cardsData = [
    'animated-search-bar',
    'double-landing-page',
    'emoji-rating',
    'new-year-countdown',
    'profile-statistics',
    'random-password-generator',
    'rotating-image-gallery',
    'social-media-selector',
    'step-progress-bar',
    'todo-list'
];

const cardParent = document.querySelector('.projects .container .row');
const card = cardParent.querySelector('.col-12');
card.remove();

cardsData.forEach((id) => {
    const newCard = card.cloneNode(true);

    newCard.querySelector('img').src = `statics/screenshots/${id}.png`;
    newCard.querySelector('h3').innerHTML = id.split('-').join(' ');
    newCard.querySelector('a').href = id;

    const iconEl = newCard.querySelectorAll('.card-content a');

    iconEl[0].href = `${gitHub}/${id}`;
    iconEl[1].href = id;

    cardParent.appendChild(newCard);
});
