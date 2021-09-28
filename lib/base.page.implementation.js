class BasePage {

    constructor(page, pageRootSelector) {
        this.page = page
        this.rootSelector = pageRootSelector;
    }

    _replacePage(page) {
        console.log("BasePage STARTED")
        this.page = page;
        const excluded = ['page','rootSelector'];
        const expectedProps = Object
            .getOwnPropertyNames(this)
            .filter((item) => !excluded.includes(item))   //  item - очередной элемент массива expectedProps, если !excluded.includes(item) = false то такой элемент удалится из начального массива
        expectedProps.forEach((item) => {
            this[item]._replacePage.call(this[item], page);     //this это объект перед точкой, у которого вызывается метод изначально
        })
        console.log("BasePage ENDED for everyone")
    }
}


module.exports = {
    BasePage
}



// по факту что происходит в _replacePage: мы берем все поля из класса какой-либо страницы, записываем их в массив, исключаем из него page и rooSelector
// так как они не нужны, и потом для каждого из оставшихся полей (например headerFragment) мы вызываем этот ж метод _replacePage,
// но _replacePage вызывается уже у headerFragment (так как он достался ему от BaseFragment)