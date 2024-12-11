describe('My Second Test Suite', function () {
    it('My Second Test case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') //Visit keyword is being used to visit the website -> Xpath - driver.get
        cy.get('.search-keyword').type('ca') //get is to findElement
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4) // To assert user Should keyword and its from Chai
        cy.get('.products').find('.product').should('have.length', 4)

        //eq - helps to find any element using index number
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click() //Contains checks if values is present

//each() command is byeing used to iterate though each value of the array
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const vegName = $el.find('.product-name').text()
            if (vegName.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }

        })
    })
})