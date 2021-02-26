const express = require('express')

const router = express.Router()

router.use(function tempo(req, res, next) {
    console.log('Nova requisição em ' + Date.now())
    next()
})

router.route('/tempo')
    .get((req, res) => res.send('GET do Tempo'))
    .post((req, res) => res.send('POST do tempo'))


module.exports = router