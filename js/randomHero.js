localStorage = window.localStorage;

let disabledHeroes = [];
let storageDisabledHeroes = localStorage.getItem('disabledHeroes');
if (storageDisabledHeroes != null && storageDisabledHeroes != "[]"){
    disabledHeroes = JSON.parse(storageDisabledHeroes);
}

const heroesContainer = document.querySelector('#heroes-container');
const heroElementTemplate = heroesContainer.querySelector('template').innerHTML;

document.querySelector('#random-button').addEventListener('click', (e)=>{
    let filteredHeroes = heroes.filter(hero => !disabledHeroes.includes(hero.name_english_loc));
    console.log(filteredHeroes);
    let randomId = Math.floor(Math.random() * filteredHeroes.length);
    console.log(randomId);
    let heroName = filteredHeroes[randomId].name_english_loc;
    let heroImage = heroName.toLowerCase().split(' ').join('_');
    document.querySelector('#random-hero img').src = `./img/heroes/full/${heroImage}.png`;
    document.querySelector('#random-hero h1').innerText = heroName;
});

const heroesByAttributes = [
    heroes.filter(hero => hero.primary_attr == 0),
    heroes.filter(hero => hero.primary_attr == 1),
    heroes.filter(hero => hero.primary_attr == 2)
];

heroesContainer.innerHTML += `
<div class="w-full flex flex-row space-x-3 mt-2 select-none">
    <img alt="team" class="object-contain object-center flex-shrink-0 drop-shadow-md" src="./img/hero_strength.png">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 mt-3 font-medium text-white">Сила</h1>
</div>
`
heroesByAttributes[0].forEach(hero => {
    let heroName = hero.name_english_loc;
    let heroImage = heroName.toLowerCase().split(' ').join('_');
    heroesContainer.innerHTML += heroElementTemplate.replace('%IMAGE%', `./img/heroes/full/${heroImage}.png`).replace('%NAME%', heroName);
});

heroesContainer.innerHTML += `
<div class="w-full flex flex-row space-x-3 mt-4 select-none">
    <img alt="team" class="object-contain object-center flex-shrink-0 drop-shadow-md" src="./img/hero_agility.png">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 mt-3 font-medium text-white">Ловкость</h1>
</div>
`
heroesByAttributes[1].forEach(hero => {
    let heroName = hero.name_english_loc;
    let heroImage = heroName.toLowerCase().split(' ').join('_');
    heroesContainer.innerHTML += heroElementTemplate.replace('%IMAGE%', `./img/heroes/full/${heroImage}.png`).replace('%NAME%', heroName);
});

heroesContainer.innerHTML += `
<div class="w-full flex flex-row space-x-3 mt-4 select-none">
    <img alt="team" class="object-contain object-center flex-shrink-0 drop-shadow-md" src="./img/hero_intelligence.png">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 mt-3 font-medium text-white">Интеллект</h1>
</div>
`
heroesByAttributes[2].forEach(hero => {
    let heroName = hero.name_english_loc;
    let heroImage = heroName.toLowerCase().split(' ').join('_');
    heroesContainer.innerHTML += heroElementTemplate.replace('%IMAGE%', `./img/heroes/full/${heroImage}.png`).replace('%NAME%', heroName);
});

const heroElements = heroesContainer.querySelectorAll('.hero-element');
heroElements.forEach(heroElement => {
    updateHeroElements();
    heroElement.addEventListener('click', e => {
        let element = e.currentTarget.querySelector('div');
        let heroName = element.querySelector('h2').innerText;
        if (element.classList.contains('border-rose-500')){
            element.classList.remove('border-rose-500')
            disabledHeroes = disabledHeroes.filter(e => e !== heroName)
            localStorage.setItem('disabledHeroes', JSON.stringify(disabledHeroes));
        } else {
            element.classList.add('border-rose-500');
            disabledHeroes.push(heroName);
            localStorage.setItem('disabledHeroes', JSON.stringify(disabledHeroes));
        }
    });
});

document.querySelector('#enable-all-button').onclick = ()=>{
    disabledHeroes = []
    localStorage.setItem('disabledHeroes', JSON.stringify(disabledHeroes));
    updateHeroElements();
};

document.querySelector('#disable-all-button').onclick = ()=>{
    disabledHeroes = [];
    heroes.forEach(hero => {
        disabledHeroes.push(hero.name_english_loc);
    });
    localStorage.setItem('disabledHeroes', JSON.stringify(disabledHeroes));
    updateHeroElements();
};

function updateHeroElements(){
    heroElements.forEach(heroElement => {
        if (disabledHeroes.includes(heroElement.querySelector('h2').innerText)){
            heroElement.querySelector('div').classList.add('border-rose-500');
        } else {
            heroElement.querySelector('div').classList.remove('border-rose-500');
        }
    });
}

// document.querySelector('#random-button').click();

const searchInput = document.querySelector('#search-input');
searchInput.click();
searchInput.addEventListener('input', (e) => {
    let inputValue = e.currentTarget.value;
    heroElements.forEach(heroElement => {
        if (heroElement.querySelector('h2').innerText.toLowerCase().indexOf(inputValue.toLowerCase()) != -1){
            heroElement.classList.remove('opacity-20');
            heroElement.classList.add('-translate-y-1');
        } else {
            heroElement.classList.add('opacity-20');
            heroElement.classList.remove('-translate-y-1');
        }
    });
    if (inputValue == "") {
        heroElements.forEach(heroElement => {
            heroElement.classList.remove('-translate-y-1');
        });
    }
});

