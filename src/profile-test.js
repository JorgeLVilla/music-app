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

// Example usage:
// Save profile
saveProfile();

// Edit profile
editProfile();
