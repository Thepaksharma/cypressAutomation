
/// <reference types="Cypress" />
describe("Locators Test", function () {
    it("First Locators Test", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      cy.get('#checkBoxOption1').check().should('be.checked').should('have.value','option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      cy.get('input[type="checkbox"]').check(['option2','option3']).and('be.checked').should('have.value','option2','option3')
      cy.get('input[type="checkbox"]').uncheck(['option2','option3']).should('not.be.checked')
    })
})