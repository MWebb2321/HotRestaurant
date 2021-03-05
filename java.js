const path = require('path');
// This array will contain all of our tables as objects
const tables = [];
// Routes for displaying HTML pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/reservation-form', (req, res) => res.sendFile(path.join(__dirname, 'reservation-form.html')));
app.get('/reservation-view', (req, res) => res.sendFile(path.join(__dirname, 'reservation-view.html')));
// Displays tables
app.get('/api/tables', (req, res) => res.json(tables));
// Add a table (JSON format)
app.post('/api/tables', (req, res) => {
    const newTable = req.body;
    tables.push(newTable);
    res.json(newTable);
  });

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const waitlist = [
    {
    }
];
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));