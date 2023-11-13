// *** Loading Bar ***
// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.


function loadingBarFunc(statusPercent) {
    let emptyBar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];
    let loadingBarsCount = statusPercent / 10;

    for (let index = 0; index < loadingBarsCount; index++) {
        emptyBar[index] = '%';
    }

    if (loadingBarsCount === 10) {
        console.log(`100% Complete!\n[${emptyBar.join("")}]`)
    } else {
        console.log(`${statusPercent}% [${emptyBar.join("")}]\nStill loading...`)
    }
}


loadingBarFunc(100)