// Function to load pages into the container
function loadPage(pageUrl) {
    // Fetch the content of the selected page (external HTML file)
    fetch(pageUrl)
        .then(response => response.text())
        .then(data => {
            // Update the content container with the retrieved HTML content
            document.getElementById('content-container').innerHTML = data;

            // Load the associated JavaScript file (assuming it exists)
            loadScript(pageUrl.replace('.html', '.js'));
        })
        .catch(error => console.error('Error loading page: ', error));
}

// Function to load an associated JavaScript file
function loadScript(scriptUrl) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    document.body.appendChild(script);
}
