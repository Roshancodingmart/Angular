const express = require('express');
const router = express.Router();
const create=require('../Controller/createPlayListController')
router.post('/',create.createPlayList);

module.exports=router;