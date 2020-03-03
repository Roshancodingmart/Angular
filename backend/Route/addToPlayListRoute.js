const express = require('express');
const router = express.Router();
const create=require('../Controller/addToPlayListController')
router.post('/',create.addToPlayList);

module.exports=router;