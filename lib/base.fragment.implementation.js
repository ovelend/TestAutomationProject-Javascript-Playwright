class BaseFragment {

    constructor(page, pageRootSelector) {
        this.page = page
        this.rootSelector = pageRootSelector;
    }

    _replacePage(page) {
        console.log("BaseFragment STARTED")

        this.page = page;
        const excluded = ['page','rootSelector'];
        const expectedProps = Object
            .getOwnPropertyNames(this)
            .filter((item) => !excluded.includes(item))
        expectedProps.forEach((item) => {
            this[item]._replacePage.call(this[item], page)
        })

        console.log("BaseFragment ENDED")
    }

}

module.exports = {
    BaseFragment
}