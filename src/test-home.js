// Function to save data to local storage
function saveDataToLocalStorage(data) {
  // Convert the data to a JSON string
  const jsonData = JSON.stringify(data);

  // Save the JSON string to local storage
  localStorage.setItem("appData", jsonData);
}

// Function to get data from local storage
function getDataFromLocalStorage() {
  // Retrieve the JSON string from local storage
  const jsonData = localStorage.getItem("appData");

  // Parse the JSON string to get the data
  const data = JSON.parse(jsonData);

  return data;
}

// Example usage:
// Assume you have some data on your homepage, for example:
const homepageData = {
  appName: "MyApp",
  version: "1.0",
  // ... other data properties
};

// Save the current data to local storage
saveDataToLocalStorage(homepageData);

// Retrieve the saved data from local storage
const retrievedData = getDataFromLocalStorage();

// Log the retrieved data to the console
console.log(retrievedData);
