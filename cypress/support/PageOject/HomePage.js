class HomePage{

    constructor(){
        this.listContainer = '.flex-none'
    }

    getListContainer(){
        return cy.get(this.listContainer)
    }

}

export default HomePage