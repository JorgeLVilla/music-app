class Song {
    constructor(title, artist, key) {
        this.title = title;
        this.artist = artist;
        this.key = key;
    }
}

function addSongToList(song) {
    const songList = document.getElementById("songList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `${song.title} by ${song.artist}, Key: ${song.key} 
        <button class="editButton">Edit</button>`;
    songList.appendChild(listItem);

    // Add an event listener to the "Edit" button
    const editButton = listItem.querySelector(".editButton");
    editButton.addEventListener("click", () => {
        populateEditForm(song);
    });
}

// Function to populate the edit form with song information
function populateEditForm(song) {
    const editTitle = document.getElementById("editTitle");
    const editArtist = document.getElementById("editArtist");
    const editKey = document.getElementById("editKey");

    editTitle.value = song.title;
    editArtist.value = song.artist;
    editKey.value = song.key;
}

document.getElementById("songForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const key = document.getElementById("key").value;

    const newSong = new Song(title, artist, key);
    addSongToList(newSong);

    // Clear the form inputs
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("key").value = "";
});

document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the edited song information from the form
    const editedTitle = document.getElementById("editTitle").value;
    const editedArtist = document.getElementById("editArtist").value;
    const editedKey = document.getElementById("editKey").value;

    // Update the song in the list with the edited information
    const songList = document.getElementById("songList");
    const selectedListItem = songList.querySelector(".selected");
    if (selectedListItem) {
        const song = new Song(editedTitle, editedArtist, editedKey);
        const editButton = selectedListItem.querySelector(".editButton");
        editButton.textContent = `${editedTitle} by ${editedArtist}, Key: ${editedKey}`;
        selectedListItem.classList.remove("selected");
    }

    // Clear the edit form inputs
    document.getElementById("editTitle").value = "";
    document.getElementById("editArtist").value = "";
    document.getElementById("editKey").value = "";
});