// *** Locked Profile ***
// In this problem, you should create a JS functionality that shows and hides the additional information about users.
// When one of the [Show more] buttons is clicked, the hidden information inside the div should
// be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.
// If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working! 
// Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.



function lockedProfile() {
    const showMoreButtons = document.querySelectorAll('button');
    
    for (const btn of showMoreButtons) {
        btn.addEventListener('click', showOrHideInfo);
    }

    function showOrHideInfo(e) {
        const button = e.currentTarget;
        const profile = button.parentNode;
        const hiddenDiv = profile.querySelector('div');
        const lockRadioBtn = profile.querySelector('input[type=radio]');

        if (!lockRadioBtn.checked && button.textContent === 'Show more') {
            hiddenDiv.style.display = 'block';
            button.textContent = 'Hide it';
        } else if (!lockRadioBtn.checked && button.textContent === 'Hide it') {
            hiddenDiv.style.display = 'none';
            button.textContent = 'Show more';
        }

    }

}