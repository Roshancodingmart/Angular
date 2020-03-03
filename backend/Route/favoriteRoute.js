const express = require('express');
const router = express.Router();
const create=require('../Controller/favoriteController')
router.post('/',create.favorite);

module.exports=router;