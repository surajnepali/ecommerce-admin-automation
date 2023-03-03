class ProductPricingPage{

    constructor(){
        this.title = 'h4',
        this.priceField = 'input[placeholder="Enter the price"]',
        this.selectDropdown = 'select.input.bg-transparent',
        this.afterDiscountField = 'input[placeholder="Enter the price after discount"]',
        this.quantityField = 'input[placeholder="Enter the quantity"]',
        this.skuField = 'input[placeholder="Enter SKU"]',
        this.addVariantBtn = 'button[type="button"]',
        this.toastMessage = 'div[role="status"]'
        this.submitBtn = 'button[type="submit"]'
    }

    getTitle(){
        return cy.get(this.title)
    }

    getPriceField(){
        return cy.get(this.priceField)
    }

    getSelectDropdown(){
        return cy.get(this.selectDropdown)
    }

    getAfterDiscountField(){
        return cy.get(this.afterDiscountField)
    }

    getQuantityField(){
        return cy.get(this.quantityField)
    }

    getSkuField(){
        return cy.get(this.skuField)
    }

    getAddVariantBtn(){
        return cy.get(this.addVariantBtn)
    }

    getToastMessage(){
        return cy.get(this.toastMessage)
    }

    getSubmitBtn(){
        return cy.get(this.submitBtn)
    }

}

export default ProductPricingPage