console.log('hello')

document.addEventListener("DOMContentLoaded", () => {
    class Song {
        constructor(id, text, done) {
            this.id = id;
            this.text = text;
            this.done = done;
        }
    }

    const songs = [];

    function addSong(text) {
        const newSong = new Song(songs.length + 1, text, false);
        songs.push(newSong);
    }

    function renderSongs() {
        const songList = document.getElementById("songList");
        if (!songList) return;

        songList.innerHTML = "";
        songs.forEach((song) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <input type="checkbox" ${song.done ? "checked" : ""}>
                <span>${song.text}</span>
            `;
            listItem.querySelector("input")?.addEventListener("change", (event) => {
                song.done = event.target.checked;
                renderSongs();
            });
            songList.appendChild(listItem);
        });
    }

    const addSongButton = document.getElementById("addSong");
    if (addSongButton) {
        addSongButton.addEventListener("click", () => {
            const songInput = document.getElementById("songInput");
            const songText = songInput.value.trim();
            if (songText !== "") {
                addSong(songText);
                songInput.value = "";
                renderSongs();
            }
        });
    }

    const songInput = document.getElementById("songInput");
    if (songInput) {
        songInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const songText = songInput.value.trim();
                if (songText !== "") {
                    addSong(songText);
                    songInput.value = "";
                    renderSongs();
                }
            }
        });
    }

    renderSongs();
});


