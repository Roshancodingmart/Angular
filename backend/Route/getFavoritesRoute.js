const express = require('express');
const router = express.Router();
const create=require('../Controller/getFavoritesController')
router.post('/',create.getFavorites);

module.exports=router;