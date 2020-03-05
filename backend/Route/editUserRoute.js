const express = require('express');
const router = express.Router();
const create=require('../Controller/editUserController')
router.post('/',create.editUser);

module.exports=router;