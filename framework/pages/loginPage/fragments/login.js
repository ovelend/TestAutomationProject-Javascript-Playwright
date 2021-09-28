const userNameFieldSelector = "input#UserName"
const passwordFieldSelector = "input#Password"
const loginSubmitBtnSelector = "#loginForm > form > div:nth-child(5) > div > input"
const registerBtnSelector = "#loginForm > form > p > a"
const {decoratePage, BaseFragment, $element} = require('../../../../lib')

class LoginFragment extends BaseFragment {

    constructor(page, rootFragmentSelector = 'form.form-horizontal') {
        super(page, rootFragmentSelector)
        this.userNameField = $element(page, userNameFieldSelector, 'userNameField');
        this.passwordField = $element(page, passwordFieldSelector, 'passwordField');
        this.loginSubmitBtn = $element(page, loginSubmitBtnSelector, 'loginSubmitBtn');
        this.registerBtn = $element(page, registerBtnSelector, 'registerBtn')

    }
    async login(userName, password) {
        await this.userNameField.fill(userName)
        await this.passwordField.fill(password)
        await this.loginSubmitBtn.click()  //{timeout : 3000}
    }
    async goRegisterPage() {
        await this.registerBtn.click({timeout : 3000})
    }
}

decoratePage(LoginFragment)

module.exports = {
    LoginFragment
}