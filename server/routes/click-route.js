const express = require('express')

const clickRoutes = require('../controllers/click-controller.js')

const router = express.Router()

router.post('/', clickRoutes.clickPost)

module.exports = router
