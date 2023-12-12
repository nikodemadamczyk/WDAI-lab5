// index.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = [];

const SECRET_KEY = "twoj_tajny_klucz";
app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});

// Rejestracja
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { username: req.body.username, password: hashedPassword };
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
});

// Logowanie
app.post('/login', async (req, res) => {
    const user = users.find(u => u.username === req.body.username);
    if (user == null) {
        return res.status(400).send('Nie można znaleźć użytkownika');
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ username: user.username }, SECRET_KEY);
            res.json({ token: token });
        } else {
            res.send('Niepoprawne hasło');
        }
    } catch {
        res.status(500).send();
    }
});
