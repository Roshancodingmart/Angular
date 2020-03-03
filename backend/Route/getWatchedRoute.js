const express = require('express');
const router = express.Router();
const create=require('../Controller/getWatchedController')
router.get('/',create.getWatched);

module.exports=router;