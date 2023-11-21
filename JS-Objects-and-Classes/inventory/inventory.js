// *** Inventory ***
// Create a function, which creates a register for heroes, with their names, level, and items (if they have such). 
// The input comes as an array of strings. Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level. 
// The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}


function registerHero(dataArray) {
    let heroesList = [];

    dataArray.forEach(element => {
        let data = element.split(" / ")
        let name = data[0];
        let level = Number(data[1]);
        let items = data[2];
        let heroObject = { name, level, items }
        heroesList.push(heroObject)
    });

    let sortedHeroesList = heroesList.sort((a, b) => a.level - b.level);

    sortedHeroesList.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`)
    })
}


registerHero([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)