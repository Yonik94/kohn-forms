const userService = require('./user.service');
const logger = require('../../services/logger.service');
module.exports = {
    getUsers,
    getUser,
    addForm
}

async function getUsers(req, res) {
    try {
        const users = await userService.query(req.query);
        logger.debug(users)
        res.send(users);
    }catch (err) {
        logger.error(err);
        throw err;
    }
}

 async function getUser(req, res) {
     try {
         const user = await userService.getById(req.params.id);
         res.send(user)
     } catch (err) {
         logger.error(err);
         throw err;
     }
 }

 async function addForm(req, res) {
     const {form, userId} = req.body;
     try {
        const user = await userService.addForm(form, userId);
        res.send(user)
     }catch(err) {
         logger.error(err);
         throw err
     }
 }