const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dis/proj_angular'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dis/proj_angular/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor inicial na porta ' + PORT);
})
