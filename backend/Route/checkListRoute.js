const express = require('express');
const router = express.Router();
const create=require('../Controller/checkListController')
router.post('/',create.checkList);

module.exports=router;