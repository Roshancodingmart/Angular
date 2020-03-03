const express = require('express');
const router = express.Router();
const create=require('../Controller/getPlayListController')
router.get('/',create.getPlayList);

module.exports=router;