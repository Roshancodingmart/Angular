const express = require('express');
const router = express.Router();
const create=require('../Controller/getFavoritesController')
router.get('/',create.getFavorites);

module.exports=router;