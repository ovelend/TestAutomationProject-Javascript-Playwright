const {waits} = require('./helpers')
const chalk = require('chalk')

/**
 *
 * @param {function Constructor context} page
 */

function decoratePage(page) {
    const {name} = page;
    Object.getOwnPropertyNames(page.prototype)
        .filter(prop => !!Object.getOwnPropertyDescriptor(page.prototype, prop).value) //удаляем все геттеры и сеттеры
        .filter(prop => prop !== 'constructor') // удаляем конструкторы, можно также написать if(prop === 'constructor') => return false
        .filter(prop => typeof page.prototype[prop] === "function") //берем только во внимание методы
        .forEach(prop => {                                  // фор ич для декорации
            const originalProp = page.prototype[prop];
            page.prototype[prop] = async function(...args) {
                /**
                 * @example
                 * every page should have root selector
                 * this selector will be used to wait visibility of current page
                 */
                let message = `${name} executes ${prop}`;
                if(name.includes('Fragment')){
                        message = `\t${message}`;
                }
                console.log(chalk.green(message))
                await waits(this.page).waitVisibility(this.rootSelector)
                return originalProp.call(this, ...args)
            }
        })
}

module.exports = {
    decoratePage
}