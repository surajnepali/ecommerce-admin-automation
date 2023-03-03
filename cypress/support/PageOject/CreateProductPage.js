class CreateProdutPage{

    constructor(){
        this.title = 'h2.text-neutral-700',
        this.semiTitle = 'p.text-neutral-700',
        this.productName = 'input[placeholder="Eg. Nike Air Force"]',
        this.productCategory = 'select.input.bg-transparent',
        this.nextImage = 'button[type="submit"]'
        this.toastMessage = 'div[role="status"]'
    }

    getTitle(){
        return cy.get(this.title)
    }

    getSemiTitle(){
        return cy.get(this.semiTitle)
    }

    getProductName(){
        return cy.get(this.productName)
    }

    getProductCategory(){
        return cy.get(this.productCategory)
    }

    getNextImage(){
        return cy.get(this.nextImage)
    }

    getToastMessage(){
        return cy.get(this.toastMessage)
    }

}

export default CreateProdutPage