class ProductDescriptionPage{

    constructor(){
        this.title = 'h4',
        this.descriptionField = 'textarea[placeholder="Enter the product description"]'
        this.submitBtn = 'button[type="submit"]'
        this.toastMessage = 'div[role="status"]'
    }

    getTitle(){
        return cy.get(this.title)
    }

    getDescriptionField(){
        return cy.get(this.descriptionField)
    }

    getSubmitBtn(){
        return cy.get(this.submitBtn)
    }

    getToastMessage(){
        return cy.get(this.toastMessage)
    }

}

export default ProductDescriptionPage