
                       // Main     page
function makeSingleton(PageClass, contextPage) {
    if(PageClass.instance) {
        PageClass.instance._replacePage.call(PageClass.instance, contextPage) // вызываем метод _replacePage у объекта PageClass.instance с аргументом ctxPage
        return PageClass.instance
    }
    const page = new PageClass(contextPage);
    PageClass.instance = page;
    return PageClass.instance;
}

module.exports = {
    makeSingleton
}