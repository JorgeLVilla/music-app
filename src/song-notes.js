// Function to handle form submission
document
  .getElementById("song-note-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    if (title.trim() === "" || body.trim() === "") {
      alert("Song title and notes cannot be empty.");
      return;
    }

    // Create a new song note object
    const songNote = {
      title: title,
      notes: body,
    };

    // Retrieve existing song notes from local storage
    let existingSongNotes = JSON.parse(localStorage.getItem("songNotes")) || [];

    // Add the new song note to the list
    existingSongNotes.push(songNote);

    // Save the updated list to local storage
    localStorage.setItem("songNotes", JSON.stringify(existingSongNotes));

    // Clear the form
    document.getElementById("title").value = "";
    document.getElementById("body").value = "";

    // Refresh the list of song notes
    displaySongNotes();
  });

// Function to delete a song note
function deleteSongNote(index) {
  let existingSongNotes = JSON.parse(localStorage.getItem("songNotes")) || [];
  existingSongNotes.splice(index, 1);
  localStorage.setItem("songNotes", JSON.stringify(existingSongNotes));
  displaySongNotes();
}

// Function to edit a song note
function editSongNote(index) {
  let existingSongNotes = JSON.parse(localStorage.getItem("songNotes")) || [];
  const songNote = existingSongNotes[index];
  document.getElementById("title").value = songNote.title;
  document.getElementById("body").value = songNote.notes;
  existingSongNotes.splice(index, 1);
  localStorage.setItem("songNotes", JSON.stringify(existingSongNotes));
  displaySongNotes();
}

// Function to display song notes from local storage
function displaySongNotes() {
  const noteList = document.getElementById("note-list");
  noteList.innerHTML = "";

  const storedSongNotes = JSON.parse(localStorage.getItem("songNotes")) || [];

  for (let i = 0; i < storedSongNotes.length; i++) {
    const songNote = storedSongNotes[i];

    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${songNote.title}</strong>: ${songNote.notes}
            <span class="edit-button" onclick="editSongNote(${i})">Edit</span>
            <span class="delete-button" onclick="deleteSongNote(${i})">Delete</span>`;
    noteList.appendChild(listItem);
  }
}

// Display any existing song notes on page load
displaySongNotes();
