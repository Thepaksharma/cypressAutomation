describe('My Second Test Suite', function () {
    it('My Second Test case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') //Visit keyword is being used to visit the website -> Xpath - driver.get
        cy.get('.search-keyword').type('ca') //get is to findElement

        //each() command is byeing used to iterate though each value of the array
        cy.get('.products').find('.product').each(($el, index, $list) => {  //Promise Resolved

            const vegName = $el.find('.product-name').text() //Cypress + JQuery
            if (vegName.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }

        })

        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


    })
})