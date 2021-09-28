const {MainPage, LoginPage, RegisterPage} = require('./pages');
const {makeSingleton} = require('../lib/helpers/make.singleton')

const pageProvider = function(page) {
    return {
        main: () => makeSingleton(MainPage, page),
        login: () => makeSingleton(LoginPage, page),
        register: () => makeSingleton(RegisterPage, page)
    }
}

module.exports = {
    pageProvider
}