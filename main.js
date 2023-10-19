// Helper function to load HTML content into the container
function loadPage(pageName) {
    const container = document.getElementById("content-container");
    const url = `src/${pageName}.html`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => {
            console.error(`Error loading ${pageName}: ${error.message}`);
        });
}

// Event listeners to load pages when links are clicked
const playlistsLink = document.getElementById("playlists-link");
playlistsLink.addEventListener("click", () => loadPage("playlists"));

const userLink = document.getElementById("profile-link");
userLink.addEventListener("click", () => loadPage("profile"));

const contactLink = document.getElementById("contact-link");
contactLink.addEventListener("click", () => loadPage("contact"));

const aboutLink = document.getElementById("about-link");
aboutLink.addEventListener("click", () => loadPage("about"));

const spotifyLink = document.getElementById("spotify-link");
spotifyLink.addEventListener("click", () => loadPage("spotify-user"));

// Initial page load
loadPage("profile");

