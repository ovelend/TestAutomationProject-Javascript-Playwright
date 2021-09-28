const {LoginFragment} = require('./fragments/login')
const {decoratePage, BasePage} = require('../../../lib')

class LoginPage extends BasePage {

    constructor(page, pageRootSelector='body') {
        super(page, pageRootSelector)
        this.rootSelector = pageRootSelector;
        this.loginFragment = new LoginFragment(page)
    }

    async login(userName, password) {
        await this.loginFragment.login(userName, password)
    }
    async goRegisterPage() {
        await this.loginFragment.goRegisterPage();
    }
}

decoratePage(LoginPage)

module.exports = {
    LoginPage
}