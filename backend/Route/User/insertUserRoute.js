const express = require('express');
const router = express.Router();
const create=require('../../Controller/User/insertUserController')
router.post('/',create.insertUser);

module.exports=router;