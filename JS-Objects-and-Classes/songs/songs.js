// *** Songs ***
// Define a class Song, which holds the following information about songs:
// typeList, name, and time.
// You will receive the input as an array.
// The first element N will be the number of songs. Next N elements will
// be the songs data in the following format:
// '{typeList}_{name}_{time}', and the last element will be typeList /'all'.
// Print only the names of the songs, which have the same typeList (obtained
// as the last parameter). If the value of the last element is 'all', print 
// the names of all songs.


function songsLibrary(songsArray) {
    const songsList = [];
    let songsCount = songsArray[0];
    let chosenPlaylist = songsArray[songsArray.length - 1];
    class Song {
        constructor(typeList, name, duration) {
            this.typeList = typeList;
            this.name = name;
            this.duration = duration;
        }
    }

    for (let count = 1; count <= songsCount; count++) {
        let [playlist, songName, duration] = songsArray[count].split("_");
        let songObject = new Song(playlist, songName, duration);
        songsList.push(songObject)
    }

    if (chosenPlaylist === 'all') {
        for (const song of songsList) {
            console.log(song['name'])
        }
    } else {
        for (const song of songsList) {
            if (song['typeList'] === chosenPlaylist) {
                console.log(song['name'])
            }
        }
    }
}

songsLibrary([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])