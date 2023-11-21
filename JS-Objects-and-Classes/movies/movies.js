// *** Movies ***
// Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. 
// You can receive several types of input:
// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.


function movieInfo(dataArray) {
    let moviesLibrary = [];

    function addMovie(movieName) {
        let movieObject = { name: movieName };
        moviesLibrary.push(movieObject);
    }

    function addDirector(movie, director) {
        let searchedMovie = moviesLibrary.find((movieObject) => movieObject.name === movie);
        if (searchedMovie) {
            searchedMovie['director'] = director;
        };
    }

    function addDate(movie, date) {
        let searchedMovie = moviesLibrary.find((movieObject) => movieObject.name === movie);
        if (searchedMovie) {
            searchedMovie['date'] = date;
        };
    }

    dataArray.forEach(element => {
        if (element.includes('addMovie')) {
            let movieName = element.split('addMovie ')[1];
            addMovie(movieName);

        } else if (element.includes('directedBy')) {
            let [movieName, directorName] = element.split(" directedBy ");
            addDirector(movieName, directorName);
        }

        else if (element.includes('onDate')) {
            let [movieName, movieDate] = element.split(" onDate ");
            addDate(movieName, movieDate);
        }
    });

    for (const movie of moviesLibrary) {
        if (movie.name && movie.director && movie.date)
            console.log(JSON.stringify(movie))
    }
}


movieInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)