const express = require('express');
const router = express.Router();
const create=require('../../Controller/User/registerUserController')
router.post('/',create.registerUser);

module.exports=router;