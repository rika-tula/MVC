const express = require('express')
const router = express.Router()

const mainController = require('../controllers/main.Controller')

router.get('/',mainController.main) 
router.get('/about',mainController.about) 
router.get('/index',mainController.index)


module.exports = router