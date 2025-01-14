// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkoutItem', () => { //below method from checkoutPage.js
    cy.get("#country").type("In")
    cy.wait(5000)       //wait will be 5s only for the below line of code
    cy.get(".suggestions ul").each(($el, index, $list) => {
        const Country = $el.text()
        if (Country.includes("India")) {
            cy.wrap($el).click()
        }
    })
    cy.get("label[for='checkbox2']").click()
    cy.get(".btn-success").click()
    cy.get(".alert-success").contains("Success! Thank you! Your order will be delivered in next few weeks")
})

Cypress.Commands.add("LoginAPI", () => {
    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login",
        { "userEmail": "deepsharma0312@gmail.com", "userPassword": "Test0312" }).
        then(function (response) {
            expect(response.status).to.eq(200)
            Cypress.env("token", response.body.token)
        })
})

