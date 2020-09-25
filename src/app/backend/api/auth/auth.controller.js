const authService = require('./auth.service');
const logger = require('../../services/logger.service');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    login,
    signup,
    getLoggedIn
}

async function getLoggedIn(req, res) {
    const cookie = req.cookies && req.cookies.token
    const token = cookie
    if(token) {
        const {userName} = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await authService.getLoggedInUser(userName)
        res.send(user);
    } else {
        res.send()
    }
}

async function login(req, res) {
    const { userName, password } = req.body
    try {
        const user = await authService.login(userName, password);
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.cookie('token', accessToken, {httpOnly: true, secure: false, maxAge: 3600000});
        res.json(user)
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

async function signup(req, res) {
    try {
        const { userName, password, } = req.body
        logger.debug(userName + ', ' + password)
        const account = await authService.signup(userName, password);
        logger.debug(`auth.route - new account created: ` + JSON.stringify(account));
        const user = await authService.login(userName, password);
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.cookie('token', accessToken, {httpOnly: true, maxAge: 3600000, secure: false});
        res.json(user)
    } catch (err) {
        logger.error('[SIGNUP] ' + err)
        res.status(500).send({ error: 'could not signup, please try later' })
    }
}

