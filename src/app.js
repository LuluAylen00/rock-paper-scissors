const express = require('express');
const {resolve} = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Servidor corriendo en el puerto " + port));

const public = resolve(__dirname, '../public');
const static = express.static(public);
app.use(static);

app.get('/', (req, res) => res.sendFile(resolve(__dirname, 'views/index.html')));