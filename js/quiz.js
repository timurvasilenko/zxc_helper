localStorage = window.localStorage;

// https://github.com/odota/dotaconstants/blob/master/build/item_colors.json
const itemColors = {
    "rare": "#1A87F9",
    "artifact": "#E29B01",
    "secret_shop": "#FFFFFF",
    "consumable": "#1D80E7",
    "common": "#2BAB01",
    "epic": "#B812F9",
    "component": "#FFFFFF"
}

let currentItem = "";
let suggestedItems = [];
let isResultChecked = true;
let toggles = undefined;

let points = 0;
let record = 0;
let storageRecord = localStorage.getItem('record');
if (storageRecord != null){
    record = storageRecord;
};

const currentItemImage = document.querySelector('#current-item img');
const currentItemName = document.querySelector('#current-item h1');
const currentItemComponentsCount = document.querySelector('#current-item p');
const suggestedItemsContainer = document.querySelector('#suggested-items');
const pointsRecord = document.querySelector('#points-record');
const pointsCurrent = document.querySelector('#points-current');
const nextButton = document.querySelector('#start-button');

pointsRecord.innerText = 'Рекорд: ' + record;
pointsCurrent.innerText = 'Очки: ' + points;

nextButton.addEventListener('click', () => {
    if (isResultChecked == true){
        currentItemImage.src="";
        isResultChecked = false;
        suggestedItemsContainer.innerHTML = '';
        suggestedItems = [];
        let filteredItems = items.filter(item => item.components != null && item.name != currentItem.name);
        let randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)]
        currentItem = randomItem;

        currentItemImage.src="./img/items/" + currentItem.img;

        filteredItems = filteredItems.filter(item => item.name != currentItem.name && item.isComponent == true);
        suggestedItemsCount = randomItem.components.length + Math.ceil(randomItem.components.length / 2 + 1);
        currentItem.components.forEach(component => {
            let validItem = structuredClone(items.find(item => item.name == component));
            filteredItems = filteredItems.filter(item => item.name != component);
            validItem.valid = true;
            suggestedItems.push(validItem);
            suggestedItemsCount--;
        });
        if (currentItem.recipe == 1){
            let validItem = structuredClone(items[0]);
            filteredItems = filteredItems.filter(item => item.name != items[0].name);
            validItem.valid = true;
            suggestedItems.push(validItem);
            suggestedItemsCount--;
        }
        for (let i = 1; i <= suggestedItemsCount; i++){
            let randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)]
            suggestedItems.push(randomItem);
            filteredItems = filteredItems.filter(item => item.name != randomItem.name);
        }

        
        shuffleArray(suggestedItems);
        shuffleArray(suggestedItems);
        
        let itemElementTemplate = document.querySelector('#suggestedItem').innerHTML;
        
        componentsCount = currentItem.components.length;
        if (currentItem.recipe == 1){
            componentsCount++;
        }

        currentItemName.innerText = currentItem.dname;
        currentItemComponentsCount.innerText = 'Кол-во компонентов: ' + componentsCount;

        suggestedItems.forEach(item => {
            suggestedItemsContainer.innerHTML += itemElementTemplate.replace('%IMAGE%', "./img/items/" + item.img).replace('%NAME%', item.dname);
        });

        toggles = new Actions({
            "toggleContainerSelector": "#suggested-items",
            "toggleItemSelector": ".suggested-item",
            "toggleClassesActive": ['border-indigo-500/100'],
            "toggleClassesDisabled": ['opacity-20'],
            "toggleMaxActive": componentsCount
        })
        toggles.initToggles();
        nextButton.innerText = 'Проверить'
    } else {
        toggles.deactivate();
        let validCount = 0;
        let elements = suggestedItemsContainer.querySelectorAll('.suggested-item');
        suggestedItems.forEach((item, index) => {
            if (item.valid == true){
                elements[index].classList.add('border-yellow-500');
            }
        });
        if (toggles.activeToggleItems.length > 0) {
            toggles.activeToggleItems.forEach(activeItem => {
                if (suggestedItems[activeItem].valid == true){
                    elements[activeItem].classList.add('border-lime-500');
                    elements[activeItem].classList.remove('text-yellow-400');
                    validCount++;
                } else {
                    elements[activeItem].classList.add('border-rose-500');
                    elements[activeItem].classList.remove('text-yellow-400');
                }
            });
            console.log(validCount);
            console.log(toggles.params.toggleMaxActive);

            if (validCount == toggles.params.toggleMaxActive){
                points += 1;
                record = Math.max(points, record);
                localStorage.setItem('record', record);
            } else {
                points = 0;
            }
        } else {
            points = 0;
        }
        pointsRecord.innerText = 'Рекорд: ' + record;
        pointsCurrent.innerText = 'Очки: ' + points;
        isResultChecked = true;
        nextButton.innerText = 'Следующий предмет'
    }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

document.querySelector('#start-button').click();

// const suggestedItemsImages = suggestedItemsContainer.querySelectorAll('.suggested-item');

// suggestedItemsImages.forEach(item => {
//     item.addEventListener('click', e => {
//         let element = e.currentTarget;
//         // let heroName = element.querySelector('h2').innerText;
//         if (element.classList.contains('border-indigo-500/100')){
//             element.classList.remove('border-indigo-500/100')
//             // disabledHeroes = disabledHeroes.filter(e => e !== heroName)
//             // localStorage.setItem('disabledHeroes', JSON.stringify(disabledHeroes));
//         } else {
//             element.classList.add('border-indigo-500/100');
//             // disabledHeroes.push(heroName);
//             // localStorage.setItem('disabledHeroes', JSON.stringify(disabledHeroes));
//         }
//     });
// });