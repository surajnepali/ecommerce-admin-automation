/// <reference types="cypress" />

const LoginPage = require('../support/PageOject/LoginPage')
const HomePage = require('../support/PageOject/HomePage');
const ManageProductPage = require('../support/PageOject/ManageProductPage');
const CreateProdutPage = require('../support/PageOject/CreateProductPage');
const ProductImagePage = require('../support/PageOject/ProductImagePage');
const ProductDescriptionPage = require('../support/PageOject/ProductDescriptionPage');
const ProductPricingPage = require('../support/PageOject/ProductPricingPage');

const loginPage = new LoginPage()
const homePage = new HomePage()
const manageProductPage = new ManageProductPage()
const createProductPage = new CreateProdutPage()
const productImagePage = new ProductImagePage()
const productDescriptionPage = new ProductDescriptionPage()
const productPricingPage = new ProductPricingPage()

describe('Convert excel file to jspn file', () => {
  it('read data from Excel', () => {
    cy.parseXlsx('cypress/fixtures/excelDataEcommerce.xlsx').then((x) => {
      let allArray = x[0].data;
      console.log(allArray, "Array");
      let colNameArray = x[0].data[0];
      let i = 1;
      let arr = [];
      while (allArray[i]?.length != 0) {
        let obj = {};
        colNameArray.forEach((element) => {
          obj[element] = allArray[i][colNameArray.indexOf(element)];
        });
        arr.push(obj);
        i++;
      }
      cy.writeFile('cypress/fixtures/xlsxData.json', { Ecommerce: arr });
    });
  });

  it('should add three categories', () => {
    cy.visit(Cypress.env('url'));
  });
});

describe("Reading Data from newly created json file",function()
{
    it("Automation to add products in Ecommerce Admin Site", function()
    {
        cy.viewport(1920, 1080)
        cy.visit(Cypress.env('url'))
        loginPage.getTitle().should('exist').contains('Login')
        loginPage.getSemiTitle()
          .should('exist')
          .contains('Get to admin panel for the ecommerce.')
        
        loginPage.getEmailField().should('exist').type(Cypress.env('email')) 
        loginPage.getPasswordField().should('exist').type(Cypress.env('password'))
        loginPage.getBtn().should('exist').should('contain', 'Login').click()
        loginPage.getToastMessage().should('exist').should('have.text','Admin successfully logged in.')
        
        homePage.getListContainer().find('div.mt-8').each(($el, index, $list) => {

          const text = $el.text()
          if(text.includes('Manage Product')){
            cy.wrap($el).click()
          }

        })

        manageProductPage.getTitle().should('exist').contains('Manage Product')
        manageProductPage.getSemiTitle().should('exist').contains('Manage the product for sell.')
        
        cy.fixture('xlsxData').then((user) =>
        {

            for(let j = 0; j < user.Ecommerce.length; j++){
              manageProductPage.getAddProductBtn().should('exist').click()

              // Create Product with name, category, head category, sub category, brand, size
              createProductPage.getProductName().should('exist').type(user.Ecommerce[j].productName)
              createProductPage.getProductCategory().should('exist').each(($el, index, $list) => {
                const text = $el.text()
                if(text.includes('Select a Category')){
                  cy.wrap($el).select(user.Ecommerce[j].category)
                  cy.wait(1000)
                }
                
                if(text.includes('Select a Head Category')){
                  cy.wrap($el).select(user.Ecommerce[j].headCategory)
                  cy.wait(1000)
                }
                
                if(text.includes('Select a Sub Category')){
                  cy.wrap($el).select(user.Ecommerce[j].subCategory)
                  cy.wait(1000)
                }

                if(text.includes('Select a Product Brand')){
                  cy.wrap($el).select(user.Ecommerce[j].productBrand)
                }
                if(text.includes('Select a size')){
                  cy.wrap($el).select(user.Ecommerce[j].sizeType)
                }
              })
              createProductPage.getNextImage().should('exist').click()
              createProductPage.getToastMessage().should('exist').should('have.text','success')

              // Upload cover image and other images of the product

              const image = user.Ecommerce[j].images
              const imageArray = image.split(', ')
              for(let k = 0; k < imageArray.length; k++){
                if(k == 0){
                  productImagePage.getUploadCoverBtn().should('exist').click().then(() => {
                    productImagePage.getUploadPopUp().should('exist')
                    productImagePage.getUpload().selectFile('images/'+imageArray[k], {force: true})
                    productImagePage.getSubmitBtn().eq(1).should('exist').and('have.text', 'Upload Image').click()
                    cy.wait(1500)
                  })
                }else{
                  productImagePage.getUploadImageBtn().should('exist').click().then(() => {
                    productImagePage.getUploadPopUp().should('exist')
                    productImagePage.getUpload().selectFile('images/'+imageArray[k], {force: true})
                    productImagePage.getSubmitBtn().eq(1).should('exist').and('have.text', 'Upload Image').click()
                    cy.wait(1500)
                  })
                }
              }
              productImagePage.getSubmitBtn().eq(0).should('exist').and('have.text', 'Next:Product Description').click()
              productImagePage.getToastMessage().should('exist').should('have.text','Updated Product Image')
              
              // Add description of the product
              productDescriptionPage.getTitle().should('exist').and('have.text', 'Product Description')
              productDescriptionPage.getDescriptionField().should('exist').type(user.Ecommerce[j].productDescription)
              productDescriptionPage.getSubmitBtn().should('exist').and('have.text', 'Next: Product Variant and Stock').click()
              productDescriptionPage.getToastMessage().should('exist').should('have.text','Edited Product')

              // Add variant and stock of the product
              productPricingPage.getTitle().should('exist').and('have.text', 'Product Pricing & Variant')
              productPricingPage.getSelectDropdown().should('exist').each(($el, index, $list) => {
                const text = $el.text()
                if(text.includes('Select a color')){
                  cy.wrap($el).select(user.Ecommerce[j].selectColor)
                  cy.wait(1000)
                }
                if(text.includes('Select a size')){
                  cy.wrap($el).select(user.Ecommerce[j].selectSize).should('have.value', user.Ecommerce[j].selectSize)
                }
              })
              productPricingPage.getPriceField().should('exist').type(user.Ecommerce[j].productPrice)
              productPricingPage.getAfterDiscountField().should('exist').type(user.Ecommerce[j].priceAfterDiscount)
              productPricingPage.getQuantityField().should('exist').type(user.Ecommerce[j].productQuantity)
              productPricingPage.getSkuField().should('exist').type(user.Ecommerce[j].productSKU)
              productPricingPage.getSubmitBtn().should('exist').and('have.text', 'Save').click()
            }
        })

    })
})