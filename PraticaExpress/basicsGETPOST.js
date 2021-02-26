const express = require('express')
const app = express()

const router = require('./roteador')

app.get('/', (req, res) => {
    res.send('GET request to the server')
})

app.post('/', (req, res) => {
    res.send('POST request to the server')
})

app.all('/secret', (req, res, next) => {
    res.send('Every method that you use serves here')
    next() // pass the controle to the next handler
})


// Usando manipuladores de rota
app.get('/example/a', function(req, res) {
    res.send('response from A')
})

app.get('/example/b', function(req, res, next) {
    console.log('jajá vai ter outra resposta do next...')
    next()
}, function(req, res) {
    res.send('Agora chegou a resposta de B')
})

// usando route

app.route('/livro')
    .get((req, res) => res.send('books GET'))
    .post((req, res) => res.send('books POST'))
    .put((req, res) => res.send('books PUT'))

app.listen(3000, () => {
    console.log(`Rodando na porta 3000`)
})

// usando router
app.use(router)