const express = require('express');
const router = express.Router();
const create=require('../Controller/watchListController')
router.post('/',create.watchList);

module.exports=router;