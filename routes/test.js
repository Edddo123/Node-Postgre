const express = require('express')
const testController = require('../controllers/test')
const router = express.Router()


router.get('/', testController.getMain)


module.exports = router