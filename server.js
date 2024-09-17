const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let bookings = [];

app.post('/bookings', (req, res) => {
    const { name, date, time } = req.body;
    bookings.push({ name, date, time });
    res.json({ message: 'Agendamento realizado com sucesso!' });
});

app.get('/bookings', (req, res) => {
    res.json(bookings);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
