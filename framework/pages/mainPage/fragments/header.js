const {decoratePage, BaseFragment, $element} = require('../../../../lib')
const loginBtnSelector = 'a#loginLink';
const registerBtnSelector = 'a#registerLink';

class HeaderFragment extends BaseFragment {

    constructor(page, rootFragmentSelector = 'div.navbar.navbar-inverse.navbar-fixed-top') {
        super(page, rootFragmentSelector)
        this.loginBtn = $element(this.page, loginBtnSelector,'loginBtn' );
        this.registerBtn = $element(this.page, registerBtnSelector, 'registerBtn')
    }

    async toLogin() {
        await this.loginBtn.click();
    }
    async toRegister() {
        await this.registerBtn.click();
    }
}

decoratePage(HeaderFragment)

module.exports = {
    HeaderFragment
}