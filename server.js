require("dotenv").config();

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use((req, res,next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('My Week 2 API!');
});

app.post("/user", (req, res) => {
    const{ name, email } = req.body;
    if (!name || !email) return res.status(400).json({ Error: "Missing field/s!" });
    res.send(`Hello, ${name}!`);
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} profile`); 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
