const utilService = require('../../services/util.service');
const logger = require('../../services/logger.service');
const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectID;

module.exports = {
    add,
    query,
    getById,
    addField,
    updateField,
    updateForm
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy);
    const collection = await dbService.getCollection('form');
    try {
        const forms = await collection.find(criteria).toArray();
        return forms
    } catch (err) {
        logger.error(err);
        throw err
    }
}
async function getById(id) {
    const collection = await dbService.getCollection('form');
    try {
        const form = collection.findOne({ "_id": ObjectId(id) });
        return form;
    } catch (err) {
        logger.error(err);
        throw err
    }
}

async function add() {
    const collection = await dbService.getCollection('form');
    try {
        const newForm = _createForm();
        await collection.insertOne(newForm)
        return newForm
    } catch (err) {
        logger.error(err);
        throw err
    }
}

async function addField(formId) {
    const collection = await dbService.getCollection('form');
    try {
        const form = await getById(formId);
        const newField = _createField();
        form.fields.push(newField);
        await collection.updateOne({ "_id": ObjectId(formId) }, { $set: { fields: form.fields } });
        return form;
    } catch (err) {
        logger.error(err);
        throw err
    }
}

async function updateForm(form) {
    const collection = await dbService.getCollection('form');
    const formId = form._id
    delete form._id
    try {
        await collection.replaceOne({ "_id": ObjectId(formId) }, form);
        return form;
    } catch (err) {
        logger.error(err);
        throw err
    }
}

async function updateField(formId, field) {
    const collection = await dbService.getCollection('form');
    try {
        const form = await getById(formId);
        const fieldIdx = form.fields.findIndex(currField => currField.id === field.id);
        form.fields[fieldIdx] = field;
        await collection.updateOne({ "_id": ObjectId(formId) }, { $set: { fields: form.fields } });
        return form;
    } catch (err) {
        logger.error(err);
        throw err
    }
}

function _createForm() {
    return {
        title: '',
        description: '',
        fields: []
    }
}

function _createField() {
    return {
        id: utilService.makeId(),
        title: '',
        isRequired: false,
        type: 'multipleChoice',
        options: []
    }
}

function _buildCriteria(filterBy) {
    var searchString = new RegExp(filterBy.txt, 'i');
    const criteria = { $or: [{ _id: { $regex: searchString } }] }
    return criteria;
}