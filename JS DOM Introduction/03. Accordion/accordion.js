// *** Accordion ***
// An HTML file is given and your task is to show more/less information. 
// By clicking the [More] button, it should reveal the content of a hidden div and changes the text of the button to [Less]. 
// When the same link is clicked again (now reading Less), hide the div and change the text of the link to More. 
// Link action should be toggleable (you should be able to click the button an infinite amount of times).



function toggle() {
    const btnElement = document.getElementsByClassName('button')[0];
    const contentBox = document.querySelector('#extra');
    console.log(contentBox);

    if (btnElement.textContent === 'More') {
        contentBox.style.display = 'block';
        btnElement.textContent = 'Less';
    } else {
        contentBox.style.display = 'none';
        btnElement.textContent = 'More';
    }
}