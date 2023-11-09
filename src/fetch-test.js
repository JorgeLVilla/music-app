import axios from "axios";

const fetchApi = async () => {
  const response = await axios.get(
    "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl"
  );
  const data = response.data;
  console.log(data);
};
fetchApi().then((r) => console.log(r));

// const url = "https://jsonplaceholder.typicode.com/todos";
// const options = {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json;charset=UTF-8",
//   },
//   body: JSON.stringify({
//     a: 10,
//     b: 20,
//   }),
// };
// fetch(url, options)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
