// *** Meetings ***
// Write a function that manages meeting appointments. The input comes as 
// an array of strings. Each string contains a weekday and person's name.
// For each successful meeting, print a message. If you receive the same
// weekday twice, the meeting cannot be scheduled so print a conflicting
// message. In the end, print a list of all successful meetings.


function meetingsScheduler(dataArray) {
    const scheduleObj = {};
    for (const element of dataArray) {
        let [weekday, person] = element.split(" ")

        if (Object.keys(scheduleObj).includes(weekday)) {
            console.log(`Conflict on ${weekday}!`)
        } else {
            scheduleObj[weekday] = person;
            console.log(`Scheduled for ${weekday}`)
        }
    }

    for (const [key, value] of Object.entries(scheduleObj)) {
        console.log(`${key} -> ${value}`)
    }
}


// meetingsScheduler(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])
meetingsScheduler(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George'])