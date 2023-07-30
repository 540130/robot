const express = require('express');
const cors = require('cors');
const jsonData = require('./jsonData');

const app = express();
const port = 8003;

app.use(cors());

// Endpoint to get all bot data
app.get('/bots', (req, res) => {
  res.json(jsonData.bots);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
