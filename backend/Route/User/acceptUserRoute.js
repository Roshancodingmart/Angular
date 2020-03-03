const express = require('express');
const router = express.Router();
const create=require('../../Controller/User/acceptUserController')
router.post('/',create.acceptUser);

module.exports=router;