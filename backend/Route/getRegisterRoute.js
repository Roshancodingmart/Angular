const express = require('express');
const router = express.Router();
const create=require('../Controller/getRegisterController')
router.post('/',create.getRegister);

module.exports=router;