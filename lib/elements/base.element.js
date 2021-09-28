const {waits} = require('../helpers')
const chalk = require('chalk')

class BaseElement {

    constructor(page, selector, elementName) {
        this.page = page
        this.selector = selector
        this.currentElement = null;
        this.name = elementName;
    }

    _replacePage(page) {
        console.log("BaseElement STARTED")
        this.page = page;
        console.log("BaseElement ENDED")
    }

    async initThisElement() {
        await waits(this.page, this.selector).waitVisibility(this.selector)
        if (this.currentElement) {
            return this.currentElement
        }
        const el = await this.page.$(this.selector)
        this.currentElement = el
        return this.currentElement
    }
}

    function $element(page, selector, elementName) {
        const baseEl = new BaseElement(page, selector, elementName)
        return new Proxy(baseEl,  {
            get(_t, value) {

                if(value === '_replacePage') {      // здесь мы заменяем объект page для каждого существ. элемента
                    console.log(`${elementName} in PROXY`)
                    return (page) => baseEl._replacePage(page);
                }
                return (...args) => baseEl.initThisElement().then((curEl) => {
                    if(!baseEl.name) {
                        baseEl.name = 'BaseElement';
                    }
                    let message = `\t\t\t ${baseEl.name} executes ${value}`;
                    if(args.length) {
                        message = `${message} with arguments ${JSON.stringify(args)}`
                    }
                    console.log(chalk.green(message));
                    return curEl[value].call(curEl, ...args);
                })
            }
        })
    }

module.exports = {
    $element
}