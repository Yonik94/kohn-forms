const express = require('express');
const router = express.Router();
const { getForms, getForm, addForm, addField, updateField, updateForm } = require('./form.controller');

module.exports = router;

router.get('/', getForms);
router.get('/:id', getForm);
router.post('/', addForm);
router.post('/:id', addField);
router.put('/:id/', updateForm);
router.put('/:id/field', updateField);