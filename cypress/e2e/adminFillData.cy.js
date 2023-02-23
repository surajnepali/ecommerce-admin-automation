/// <reference types="cypress" />

const LoginPage = require('../support/PageOject/LoginPage')

const loginPage = new LoginPage()

describe('To add category, head category, sub category, image, and product', () => {
  it('should convert Excel file to .json file', () => {
    cy.parseXlsx('cypress/fixtures/excelData.xlsx').then((x) => {
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
        // homePage.getHotelModule().should('exist').and('have.text', 'Hotel').click()
        // cy.url().should('contain', '/hotel')

        // cy.fixture('xlsxDataaa').then((user) =>
        // {

        //     for(let j = 0; j < user.Ecommerce.length; j++){

        //     }
        // })

    })
})