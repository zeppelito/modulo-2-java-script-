const express = require('express')
const app = express();

app.get('/httpbin.org', (request, response) => {
    return response.send("O usúario está devidamente 100% conectado");
});

app.listen(777);
console.log("Rodando...")