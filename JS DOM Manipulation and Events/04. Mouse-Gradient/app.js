// *** Mouse Gradient ***
// Write a program that detects and displays how far along a gradient the user has moved their mouse. 
// The result should be rounded down and displayed as a percentage inside the <div> with id "result". 
// Submit only the attachGradientEvents() function in Judge. 
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.




function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const result = document.getElementById('result');
    
    gradientElement.addEventListener('mousemove', gradientMove);
    gradientElement.addEventListener('mouseout', gradientOut);

    function gradientMove(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        result.textContent = `${power}%`;
    }

    function gradientOut(e) {
        result.textContent = '';
    }

}