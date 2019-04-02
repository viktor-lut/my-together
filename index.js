const express = require('express');
const logger = require('./modules/core/logger');

const PORT = 5000;
const app = express();

logger(app);


app.get('/', (req, res) => res.send('Main example') );

app.get('/info', (req, res) => res.status(200).json({ name: 'GET example' })) ;
app.post('/info', (req, res) => res.status(200).json({ name: 'POST example' })) ;


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
