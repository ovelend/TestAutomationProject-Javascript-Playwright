const userNameFieldSelector = "input#UserName";
const passwordFieldSelector = "input#Password";
const confirmPassFieldSelector = "input#ConfirmPassword";
const eMailFieldSelector = "input#Email";
const registerSubmitBtnSelector = "body > div.container.body-content > form > div:nth-child(9) > div > input";
const headerSelector = 'body > div.container.body-content > form > h4';

const {waits} = require('../../../../lib/helpers/waits')
const {decoratePage, BaseFragment, $element} = require('../../../../lib')

class RegisterFragment extends BaseFragment {

    constructor(page, rootFragmentSelector = 'form.form-horizontal') {
        super(page, rootFragmentSelector);
        this.userNameField = $element(this.page, userNameFieldSelector,'userNameField');
        this.passwordField = $element(this.page, passwordFieldSelector,'passwordField');
        this.confirmPassField = $element(this.page, confirmPassFieldSelector,'confirmPassField');
        this.eMailField = $element(this.page, eMailFieldSelector,'eMailField')
        this.registerSubmitBtn = $element(this.page, registerSubmitBtnSelector,'registerSubmitBtn');
        this.header = $element(this.page, headerSelector,'header')
    }

    async register(userName,password,mail) {
        await this.userNameField.type(userName);
        await this.passwordField.type(password);
        await this.confirmPassField.type(password);
        await this.eMailField.type(mail);
        await this.registerSubmitBtn.click({timeout : 3000});
    }
    async getHeaderTitle() {
        await waits(this.page).waitVisibility(headerSelector) //сделать его в BasePage
        //const elementHandle = await this.page.$(headerSelector)
        //return elementHandle.textContent()
        return this.header.textContent()
    }
}

decoratePage(RegisterFragment)

module.exports = {
    RegisterFragment
}