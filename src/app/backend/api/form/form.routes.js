const express = require('express');
const router = express.Router();
const { addForm, getForm, addField, updateField, updateForm } = require('./form.controller');

module.exports = router;

router.post('/', addForm);
router.post('/:id', addField);
router.get('/:id', getForm);
router.put('/:id/', updateForm);
router.put('/:id/field', updateField);