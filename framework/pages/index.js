const mainPage = require('./mainPage');
const loginPage = require('./loginPage');
const registerPage = require('./registerPage');

module.exports = {
    ...mainPage,
    ...loginPage,
    ...registerPage,
}