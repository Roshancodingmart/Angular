const express = require('express');
const router = express.Router();
const create=require('../Controller/getListController')
router.post('/',create.getList);

module.exports=router;