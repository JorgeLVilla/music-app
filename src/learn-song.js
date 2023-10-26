
// Define a Song class
class Song {
    constructor(title, artist, key) {
        this.title = title;
        this.artist = artist;
        this.key = key;
    }
}

// Function to add a song to the to-do list
function addSongToList(song) {
    const songList = document.getElementById("songList");
    const listItem = document.createElement("li");
    listItem.textContent = `${song.title} by ${song.artist}, Key: ${song.key}`;
    songList.appendChild(listItem);
}

// Event listener for the form submission
document.getElementById("songForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const key = document.getElementById("key").value;

    // Create a new Song instance and add it to the list
    const newSong = new Song(title, artist, key);
    addSongToList(newSong);

    // Clear the form inputs
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("key").value = "";
});
