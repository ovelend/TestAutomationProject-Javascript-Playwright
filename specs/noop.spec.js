const {pageProvider} = require('../framework')
const {expect} = require('chai')
const {chromium} = require('playwright')
const userName = "asdAsd_346"
const password = "asdAsd_346"
const eMail= "olOleg123@mail.ru"

describe('noop test', function() {
    let browser = null
    let page = null

    beforeEach(async ()=> {
        browser = await chromium.launch({headless : false})
        const browserContext = await browser.newContext()
        page = await browserContext.newPage()
        await page.goto('http://eaapp.somee.com')
    })

    afterEach(async ()=>{
        await browser.close()
    })

    it('Register test', async function() {
        const mainPage = pageProvider(page).main()
        await mainPage.toRegister()
        const registerPage = pageProvider(page).register()
        await registerPage.register(userName, password, eMail)
        expect(await registerPage.getHeaderTitle()).to.includes("Create a new account.")
    })

    it('Login test', async function() {
        const mainPage = pageProvider(page).main()
        await mainPage.toLogin()
        const loginPage = pageProvider(page).login()
        await loginPage.login("admin","password")
    })


});