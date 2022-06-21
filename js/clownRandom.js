let localStorage = window.localStorage;
const buildsHistory = [];
let storageBuildsHistory = localStorage.getItem('buildsHistory');
if (storageBuildsHistory != null && storageBuildsHistory != "[]"){
    buildsHistory = JSON.parse(storageBuildsHistory);
}
// Templates
const containerTemplate = document.querySelector('#template-container').innerHTML;
const itemTemplate = document.querySelector('#template-item').innerHTML;
let currentBuilds = [];
const cardsContainer = document.querySelector('#cards-container');
const currentBuildContainer = document.querySelector('#current-build-container');
const refreshButton = document.querySelector('#btn-refresh')
const itemDuplicationExceptions = [133,141,114,139,247,145];
const itemExceptions = [36,73,77,75,178,569,596,63,50,65,48,931,231,220,265,727,30];
const itemBoots = [63,50,231,220,931]
let filteredHeroes = heroes;

function refreshBuilds(){
    filteredHeroes = heroes;
    currentBuilds = [];
    for (let i = 0; i < 4; i++) {
        let currentBuild = {
            heroId: 0,
            itemIds: []
        };
        let itemsHTML = '';
        let filteredItems = items.filter(item => item.isComponent == false && item.neutral != true && item.consumable != true && !itemExceptions.includes(item.id));
        let lines = ['<span class="text-green-400">Easy</span>', '<span class="text-yellow-400">Mid</span>', '<span class="text-rose-400">Hard</span>']
        let rnd1 = Math.floor(Math.random() * 3);
        lines = lines[rnd1]
        rnd1 = Math.floor(Math.random() * 6);
    
        // Выдаём случайный сапог
        let rndBoots = itemBoots[Math.floor(Math.random() * itemBoots.length)];
        currentItem = items.find(item => item.id == rndBoots);
        itemsHTML += itemTemplate.replace('%ITEM_NAME%', currentItem.dname).replace('%ITEM_IMAGE%', currentItem.img);
    
        // И 5 случайных предметов
        currentItem = filteredItems[Math.floor(Math.random() * 3)]
        for (let j = 0; j < 5; j++){
            let rnd2 = Math.floor(Math.random() * filteredItems.length);
            currentItem = filteredItems[rnd2];
            currentBuild.itemIds.push(currentItem.id);
            itemsHTML += itemTemplate.replace('%ITEM_NAME%', currentItem.dname).replace('%ITEM_IMAGE%', currentItem.img);
            if (!itemDuplicationExceptions.includes(currentItem.id)){
                filteredItems = filteredItems.filter(item => item.id != currentItem.id);
            }
        }
        rnd1 = Math.floor(Math.random() * filteredHeroes.length);
        currentBuild.heroId = filteredHeroes[rnd1].id;
        currentBuild.line = lines;
        cardsContainer.innerHTML += containerTemplate
            .replace('%HERO_IMAGE%', filteredHeroes[rnd1].name_english_loc
                .toLowerCase().split(' ').join('_') + '.png')
            .replace('%HERO_NAME%', filteredHeroes[rnd1].name_english_loc)
            .replace('%LINE%', lines)
            .replace('%ITEMS%', itemsHTML)
            .replace('%BUILD_ID%', currentBuilds.length);
        currentBuilds.push(currentBuild);
        filteredHeroes = filteredHeroes.filter(hero => hero.id != currentBuild.heroId);
    }
    console.log(currentBuilds);

    document.querySelectorAll('.btn-choose').forEach(btn => {
        btn.addEventListener('click', e => {
            // console.log(e.currentTarget.dataset.buildId)
            buildsHistory.push(currentBuilds[e.currentTarget.dataset.buildId])
            //currentBuildContainer.innerHTML = currentBuilds[e.currentTarget.dataset.buildId].heroId;
            let itemsHTML = '';
            currentBuilds[e.currentTarget.dataset.buildId].itemIds.forEach(itemId => {
                currentItem = items.find(item => item.id == itemId);
                itemsHTML += itemTemplate.replace('%ITEM_NAME%', currentItem.dname).replace('%ITEM_IMAGE%', currentItem.img);
            });
            let currentHero = heroes.find(hero => hero.id == currentBuilds[e.currentTarget.dataset.buildId].heroId);
            console.log(currentBuilds.heroId)
            currentBuildContainer.innerHTML = containerTemplate
            .replace('%HERO_IMAGE%', currentHero.name_english_loc
                .toLowerCase().split(' ').join('_') + '.png')
            .replace('%HERO_NAME%', currentHero.name_english_loc)
            .replace('%LINE%', currentBuilds[e.currentTarget.dataset.buildId].line)
            .replace('%ITEMS%', itemsHTML)
            .replace('%BUILD_ID%', '');
        })
    });
}

refreshButton.addEventListener('click', e => {
    cardsContainer.innerHTML = '';
    refreshBuilds();
});

refreshBuilds();