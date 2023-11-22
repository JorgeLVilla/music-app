function saveProfile() {
  // ... (rest of the saveProfile function)

function editProfile() {
  // ... (rest of the editProfile function)

function uploadPicture() {
  // ... (rest of the uploadPicture function)

// Example usage:
// Save profile
saveProfile();

// Edit profile
editProfile();

// Upload picture
uploadPicture();




function saveProfile() {

  var firstName = prompt("Enter your first name:");
  var lastName = prompt("Enter your last name:");
  var username = prompt("Enter your username:");
  var email = prompt("Enter your email address:");

  var profile = {
    FirstName: firstName,
    LastName: lastName,
    Username: username,
    Email: email,
    Picture: null, // Placeholder for the picture
  };

  var profileString = JSON.stringify(profile);
  localStorage.setItem("profile", profileString);

  console.log("Profile information saved successfully!");
}

function editProfile() {
  var storedProfile = localStorage.getItem("profile");
  if (storedProfile) {
    var profile = JSON.parse(storedProfile);

    console.log("Current Profile Information:");
    console.log(profile);

    var firstName = prompt(
      "Enter your new first name (current: " + profile.FirstName + "):"
    );
    var lastName = prompt(
      "Enter your new last name (current: " + profile.LastName + "):"
    );
    var username = prompt(
      "Enter your new username (current: " + profile.Username + "):"
    );
    var email = prompt(
      "Enter your new email address (current: " + profile.Email + "):"
    );

    profile.FirstName = firstName || profile.FirstName;
    profile.LastName = lastName || profile.LastName;
    profile.Username = username || profile.Username;
    profile.Email = email || profile.Email;

    var updatedProfileString = JSON.stringify(profile);
    localStorage.setItem("profile", updatedProfileString);

    console.log("Profile information updated successfully!");
  } else {
    console.log("No profile found. Please create a profile first.");
  }
}

function uploadPicture() {
  var fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.addEventListener("change", function (event) {
    var file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (event) {
        var imageData = event.target.result;
        var storedProfile = localStorage.getItem("profile");
        if (storedProfile) {
          var profile = JSON.parse(storedProfile);
          profile.Picture = imageData; // Saving image data to the profile
          var updatedProfileString = JSON.stringify(profile);
          localStorage.setItem("profile", updatedProfileString);
          console.log("Picture uploaded and saved to profile!");
        } else {
          console.log("No profile found. Please create a profile first.");
        }
      };
      reader.readAsDataURL(file);
    }
  });
  fileInput.click();
}

// Example usage:
// Save profile
saveProfile();

// Edit profile
editProfile();

// Upload picture
uploadPicture();
