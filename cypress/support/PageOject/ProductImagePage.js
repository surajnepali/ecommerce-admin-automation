class ProductImagePage {
  constructor() {
    this.uploadCoverBtn = 'div.mx-auto'
    this.uploadPopUp = 'div[id*="headlessui-dialog-panel"]'
    this.upload = 'input.hidden'
    this.uploadImageBtn = '.justify-center'
    this.submitBtn = 'button[type="submit"]'
    this.toastMessage = 'div[role="status"]'
    
  }

  getUploadCoverBtn() {
    return cy.get(this.uploadCoverBtn)
  }

  getUploadPopUp(){
    return cy.get(this.uploadPopUp)
  }

  getUpload(){
    return cy.get(this.upload)
  }

  getUploadImageBtn(){
    return cy.get(this.uploadImageBtn)
  }

  getSubmitBtn(){
    return cy.get(this.submitBtn)
  }

  getToastMessage(){
    return cy.get(this.toastMessage)
  }

}

export default ProductImagePage