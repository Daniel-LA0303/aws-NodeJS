const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h2>esto es un cambio del proyecto de NODEJS</h2>'));

app.listen(3000);
console.log('server on port 3000');