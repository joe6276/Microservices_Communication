const express = require('express');
const router = express.Router();

const {  getUsers,addPost } = require('../Controller/PostContoller')

router.get('/', getUsers);
router.post('/add', addPost);


module.exports= router