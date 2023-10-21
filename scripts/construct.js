const titleInput = document.getElementById('title');
const artistInput = document.getElementById('artist');
const songKeyInput = document.getElementById('songKey');
const submitButton = document.getElementById('add-song-btn');
const songList = document.getElementById('song-list');

class Song {
    constructor(title, artist, songKey) {
    this._title = title;
    this._artist = artist;
    this._songKey = songKey;
    }
    get title() {
        return this._title;
    }
    get artist() {
        return this._artist;
    }
    get songKey() {
        return this._songKey;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    set artist(newArtist) {
        this._artist = newArtist;
    }
    set songKey(newSongKey) {
        this._songKey = newSongKey;
    }
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const newSong = new Song(titleInput.value, artistInput.value, songKeyInput.value);
    console.log(titleInput.value);
    console.log(newSong);
    return newSong;
});

// const addSong = () => {
//     const newSong = new Song(titleInput.value, artistInput.value, songKeyInput.value);
//     console.log(newSong);
//     return newSong;
// }
