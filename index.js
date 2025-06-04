// index.js
const express = require("express");
const app = express();
const path = require("path")
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Halo dari Express!");
});

app.get('/10kb', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', '10kb.html'));
});

app.get('/100kb', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', '100kb.html'));
});

app.get('/1000kb', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', '1000kb.html'));
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
