const express = require('express')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

const { signupView, signupProcess, loginView, loginProcess } = require('../controllers/auth')

router.get('/signup', signupView)
router.post('/signup', signupProcess)

router.get('/login', loginView)
router.post('/login', loginProcess)

module.exports = router
