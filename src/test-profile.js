function saveProfile() {
  var name = prompt("Enter your name:");
  var username = prompt("Enter your username:");
  var email = prompt("Enter your email address:");

  // Create a JSON object with the profile information
  var profile = {
    Name: name,
    Username: username,
    Email: email,
  };

  // Convert the profile object to a JSON string
  var profileString = JSON.stringify(profile);

  // Saving the profile information to local storage
  localStorage.setItem("profile", profileString);

  console.log("Profile information saved successfully!");
}

// Call the function to save the profile information
saveProfile();
