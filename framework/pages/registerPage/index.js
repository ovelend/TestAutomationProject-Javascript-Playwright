const {} = require('../../../lib')
const {RegisterFragment} = require('./fragments/register')
const {decoratePage, BasePage} = require('../../../lib')


class RegisterPage extends BasePage {

    constructor(page, pageRootSelector='body') {
        super(page, pageRootSelector)
        this.rootSelector = pageRootSelector;
        this.registerFragment = new RegisterFragment(page)

    }
    async register(userName, password, mail) {
        await this.registerFragment.register(userName,password,mail)
    }
    async getHeaderTitle() {
        return this.registerFragment.getHeaderTitle();
    }
}

decoratePage(RegisterPage)

module.exports = {
    RegisterPage
}