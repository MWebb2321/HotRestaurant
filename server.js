// This array will contain all of our tables as objects
        const express = require('express');
        const path = require('path');
        const app = express();
        const PORT = 3000;
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        
        const tables = [];
        const waitlist = [];
// Routes for displaying HTML pages
        app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
        app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
        app.get('/table', (req, res) => res.sendFile(path.join(__dirname, 'table.html')));
// Displays tables
        app.get('/api/tables', (req, res) => res.json(tables));
// Add a table (JSON format)
        app.post('/api/tables', (req, res) => {
        const newTable = req.body;
        tables.push(newTable);
        res.json(newTable);
        });

        app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));