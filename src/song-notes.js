 
        // Function to handle form submission
        document.getElementById('song-note-form').addEventListener('submit', function (e) {
            e.preventDefault();

            // Get input values
            var title = document.getElementById('title').value;
            var body = document.getElementById('body').value;

            if (title.trim() === '' || body.trim() === '') {
                alert("Song title and notes cannot be empty.");
                return;
            }

            // Create a new song note object
            var songNote = {
                title: title,
                notes: body
            };

            // Retrieve existing song notes from local storage
            var existingSongNotes = JSON.parse(localStorage.getItem('songNotes')) || [];

            // Add the new song note to the list
            existingSongNotes.push(songNote);

            // Save the updated list to local storage
            localStorage.setItem('songNotes', JSON.stringify(existingSongNotes));

            // Clear the form
            document.getElementById('title').value = '';
            document.getElementById('body').value = '';

            // Refresh the list of song notes
            displaySongNotes();
        });

        // Function to display song notes from local storage
        function displaySongNotes() {
            var noteList = document.getElementById('note-list');
            noteList.innerHTML = '';

            var storedSongNotes = JSON.parse(localStorage.getItem('songNotes')) || [];

            for (var i = 0; i < storedSongNotes.length; i++) {
                var songNote = storedSongNotes[i];

                var listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${songNote.title}</strong>: ${songNote.notes}`;
                noteList.appendChild(listItem);
            }
        }

        // Display any existing song notes on page load
        displaySongNotes();