///<reference types = "Cypress" />

describe("First Static Dropdwon Test Suite", function () {
    it("First Static Test Case", function () {

        // Static Drop Down
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option2').and('have.value', 'option2')

        //Dynamic Dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text()==='India') {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value',"India")


        //Visibility and Invisibility
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // Radio button
        cy.get('input[value="radio3"]').check().should('be.checked')

        //pop up

    })
})