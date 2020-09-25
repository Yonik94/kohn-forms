const formService = require('./form.service');
const logger = require('../../services/logger.service');

module.exports = {
    getForms,
    getForm,
    addForm,
    addField,
    updateField,
    updateForm
}

async function getForms(req, res) {
    try {
        const ids = req.query.ids.split(',');
        // console.log(ids);
        const forms = await formService.getUserForms(ids)
        res.send(forms);
    }catch(err) {
        logger.error(err);
        throw err;
    }
}
async function getForm(req, res) {
    try {
        const formId = req.params.id
        const form = await formService.getById(formId);
        res.send(form);
    }catch(err) {
        logger.error(err);
        throw err;
    }
}

async function addForm(req, res) {
    try {
        const form = await formService.add();
        res.send(form);
    } catch (err) {
        logger.error(err);
        throw err;
    }
}

async function addField(req, res) {
    const formId = req.params.id
    try {
        const form = await formService.addField(formId);
        res.send(form);
    } catch (err) {
        logger.error(err);
        throw err;
    }
}

async function updateForm(req, res) {
    try {
        const form = await formService.updateForm(req.body);
        res.send(form);
    } catch (err) {
        logger.error(err);
        throw err;
    }
}

async function updateField(req, res) {
    const formId = req.params.id
    const field = req.body
    try {
        const form = await formService.updateField(formId, field);
        res.send(form);
    } catch (err) {
        logger.error(err);
        throw err;
    }
}