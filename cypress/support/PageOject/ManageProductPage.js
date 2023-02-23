class ManageProductPage {
    constructor() {
        this.title = 'h2.text-neutral-700',
        this.semiTitle = 'p.text-neutral-700'
        this.addProductBtn = 'a.flex-none.primary-btn'
    }

    getTitle() {
        return cy.get(this.title)
    }

    getSemiTitle() {
        return cy.get(this.semiTitle)
    }

    getAddProductBtn() {
        return cy.get(this.createProductBtn)
    }

}

export default ManageProductPage