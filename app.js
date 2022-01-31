const express = require('express')

const app = express()

const CF = require('./config')


// API
app.use('/api', require('./api/index'))

const port = process.env.PORT || CF.port
app.listen(port, () => {
    console.log('.. listen port: ' + port)
})
