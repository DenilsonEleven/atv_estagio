const express = require('express')
const app = express()
const port = 3000

// criando a calculadora e suas operações 


app.get('/calculadora', (req, res) => {
    const operacao = req.query.operacao;
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    if (!operacao || isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('error 400-bad request.');
    }

    let resultado;

    if (operacao === 'soma') {
        resultado = n1 + n2;
    } else if (operacao === 'subtracao') {
        resultado = n1 - n2;
    } else if (operacao === 'multiplicacao') {
        resultado = n1 * n2;
    } else if (operacao === 'divisao') {
        if (n2 === 0) {
            return res.status(400).send('error 400-bad request.');
        }
        resultado = n1 / n2;
    } else {
        return res.status(400).send('error 400-bad request.');
    }

    res.send(`Resultado: ${resultado}`);
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});