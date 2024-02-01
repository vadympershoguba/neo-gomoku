const express = require('express');
const path = require('path');

const app = express();
const port = 3000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});
/*
app.get('/join', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'student.html'));
});
*/

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
