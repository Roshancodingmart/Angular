const express = require('express');
const router = express.Router();
const create=require('../Controller/getWatchListController')
router.post('/',create.getWatchList);

module.exports=router;