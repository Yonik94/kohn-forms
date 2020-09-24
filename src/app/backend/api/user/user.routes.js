const express = require('express');
const router = express.Router();
const { getUsers, getUser, addForm } = require('./user.controller');

module.exports = router;

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/form', addForm);