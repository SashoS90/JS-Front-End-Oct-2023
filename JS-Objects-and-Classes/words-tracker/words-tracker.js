// *** Words Tracker ***
// Write a function that receives an array of words and finds occurrences of given words in that sentence. 
// The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. 
// All strings after that will be the words in which you will check for a match.
// Print for each word how many times it occurs. The words should be sorted by count in descending.


function wordsTracker(wordsArray) {
    let trackedWords = wordsArray.shift().split(" ")
    let text = wordsArray.join(" ").toLowerCase();
    let result = {};

    trackedWords.forEach(word => {
        let regex = new RegExp(`\\b${word}\\b`, 'g');
        let occurrences = text.match(regex);
        
        if (occurrences) {
            result[word] = occurrences.length;
        } else {
            result[word] = 0
        }
    });

    let objArray = Object.entries(result);
    objArray.sort((a, b) => b[1] - a[1]);

    for (let [word, count] of objArray) {
        console.log(`${word} - ${count}`)
    }

}


wordsTracker([
    'laino',
    'In', 'this', 'sentence', 'you', 'THIS', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)

// wordsTracker([
//     'is the',
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
// )