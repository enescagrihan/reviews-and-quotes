const reviews = [
    {
        id: 1,
        name: 'Charles Cook',
        title: 'UX designer',
        img: './img/1.jpg',
        text: 'Cras luctus, risus sed gravida venenatis, lorem ex maximus eros, id maximus ex ex at elit. Donec eget turpis laoreet, vulputate enim non, malesuada est. Integer auctor libero eget odio vulputate laoreet. Donec posuere placerat blandit. Duis tempor venenatis augue, vel dapibus augue laoreet quis.'
    },
    {
        id: 2,
        name: 'Dennis Jackson',
        title: 'rocket scientist',
        img: './img/2.jpg',
        text: 'Fusce quis neque imperdiet, pharetra justo et, hendrerit augue. Duis sed lectus enim. Donec faucibus laoreet euismod. Curabitur sit amet justo et mi tristique blandit. Maecenas eu vulputate massa. Duis convallis metus ac eros mollis, convallis vulputate turpis pretium.'
    },
    {
        id: 3,
        name: 'Michael Smith',
        title: 'software sngineer',
        img: './img/3.jpg',
        text: 'Proin placerat sapien odio, vitae faucibus urna fringilla eget. Pellentesque pellentesque ante urna, bibendum bibendum odio sodales quis. Etiam ornare nisl at arcu rhoncus accumsan a ut elit. Donec vehicula tempor erat vitae ullamcorper. Duis ac porttitor ante. Morbi non urna vitae quam porta pharetra.'
    },
    {
        id: 4,
        name: 'Chuck Jordan',
        title: 'python developer',
        img: './img/4.jpg',
        text: 'Pellentesque congue ullamcorper ex. Nam malesuada turpis nisi. Aliquam tortor magna, pulvinar auctor lacus sed, ullamcorper sollicitudin erat. Aenean eu bibendum arcu. Donec malesuada vestibulum imperdiet.'
    },
    {
        id: 5,
        name: 'Frank Trueman',
        title: 'mechanical design engineer',
        img: './img/5.jpg',
        text: 'Curabitur id pharetra mi. Aenean a tristique sem, vel laoreet neque. Pellentesque mattis ac est in auctor. Maecenas ultrices magna non iaculis accumsan. Nam auctor tempor diam, a pulvinar enim vestibulum non. Quisque volutpat enim ac dolor vehicula laoreet. Ut eget tincidunt risus, eget egestas nisl.'
    }
]

const img = document.getElementById('image');
const name = document.getElementById('name');
const title = document.getElementById('title');
const text = document.getElementById('text');

const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const luckyButton = document.getElementById('lucky-button');

let currentItem = 0;

/* Load initial item */

window.addEventListener('DOMContentLoaded', () => {
    const item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    title.textContent = item.title;
    text.textContent = item.text;
})

/* Show person based on item */

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    name.textContent = item.name;
    title.textContent = item.title;
    text.textContent = item.text;
}

prevButton.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);
})

nextButton.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson(currentItem);
})

luckyButton.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length)

    showPerson(currentItem);
})