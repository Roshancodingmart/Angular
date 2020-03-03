const express = require('express');
const router = express.Router();
const create=require('../Controller/watchedController')
router.post('/',create.watched);

module.exports=router;