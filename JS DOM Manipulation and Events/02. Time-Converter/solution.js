// *** Time Converter ***
// Create a program that converts different time units. Your task is to add a click event listener to all [CONVERT] buttons. 
// When a button is clicked, read the corresponding input field, convert the value to the three other time units and display it in the input fields.



function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const daysConvertBtn = document.getElementById('daysBtn');
    const hoursConvertBtn = document.getElementById('hoursBtn');
    const minutesConvertBtn = document.getElementById('minutesBtn');
    const secondsConvertBtn = document.getElementById('secondsBtn');

    daysConvertBtn.addEventListener('click', convertDays);
    hoursConvertBtn.addEventListener('click', convertHours);
    minutesConvertBtn.addEventListener('click', convertMinutes);
    secondsConvertBtn.addEventListener('click', convertSeconds);

    function convertDays(e) {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function convertHours(e) {
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function convertMinutes(e) {
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
        secondsInput.value = minutesInput.value * 60;
    }

    function convertSeconds(e) {
        minutesInput.value = secondsInput.value / 60;
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
    }
}