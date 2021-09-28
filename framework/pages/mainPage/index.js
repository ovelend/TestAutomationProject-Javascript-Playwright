const {} = require('../../../lib')
const {HeaderFragment} = require('../mainPage/fragments/header')
const {decoratePage, BasePage} = require('../../../lib')


class MainPage extends BasePage {

    constructor(page, pageRootSelector='body') {
        super(page, pageRootSelector)
        this.rootSelector = pageRootSelector;
        this.headerFragment = new HeaderFragment(page)
    }

    async toLogin() {
       await this.headerFragment.toLogin();
    }
    async toRegister() {
        await this.headerFragment.toRegister();
    }
}

decoratePage(MainPage)

module.exports = {
    MainPage
}