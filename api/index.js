//
//
//
const router = require('express').Router()


const test = require('./test')
router.get('/test', test.test_get)
router.post('/test', test.test_post)


module.exports = router
