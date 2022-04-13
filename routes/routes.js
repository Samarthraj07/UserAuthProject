const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllers')

router.get('/signup', controller.signup_get)

router.get('/login', controller.login_get)
router.post('/signup', controller.signup_post)
router.post('/login', controller.login_post)
router.get('/logout', controller.logout_get)


module.exports= router