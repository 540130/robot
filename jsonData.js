// Fetch bot data from the API
fetch('http://localhost:8003/bots')
  .then((response) => response.json())
  .then((data) => {
    // Do something with the data (e.g., render it on the frontend)
    console.log(data);
  })
  .catch((error) => console.error('Error fetching data:', error));
