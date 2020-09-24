const bcrypt = require('bcrypt');
const userService = require('../user/user.service');
const logger = require('../../services/logger.service');

const saltRounds = 10;

module.exports = {
    login,
    signup
}

async function login(userName, password) {
    logger.debug(`auth.service - login with username: ${userName}`);
    if (!userName || !password) return Promise.reject('username and password are required!');
    const user = await userService.getByUserName(userName);
    if (!user) return Promise.reject('Invalid username or password');
    const match = await bcrypt.compare(password, user.password);
    if (!match) return Promise.reject('Invalid username or password');
    delete user.password;
    return user;
}

async function signup(userName, password) {
    logger.debug(`auth.service - signup with userName: ${userName}`)
    if (!userName || !password) return Promise.reject('username and password are required!')
    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({userName, password: hash, forms: []})
}