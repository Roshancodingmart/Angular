const express = require('express');
const router = express.Router();
const create=require('../../Controller/User/rejectUserController')
router.post('/',create.rejectUser);

module.exports=router;