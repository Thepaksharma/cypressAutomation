describe('My Second Test Suite', function () {
    it('My Second Test case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') //Visit keyword is being used to visit the website -> Xpath - driver.get
        cy.get('.search-keyword').type('ca') //get is to findElement
        cy.wait(2000).then(function () {
            console.log("Hello")
        })

        cy.get('.product:visible').should('have.length', 4) // To assert user Should keyword and its from Chai
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length', 4)

        //eq - helps to find any element using index number
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click() //Contains checks if values is present

        //each() command is byeing used to iterate though each value of the array
        cy.get('.products').find('.product').each(($el, index, $list) => {  //Promise Resolved

            const vegName = $el.find('.product-name').text() //Cypress + JQuery
            if (vegName.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }

        })

        //Print the heading name of the Webpage
        //cy.get('.brand.greenLogo').text() // Promise is not resolved and Cypress + JQuery

        //Always try to resolve Promise first = It should be only Cypress command
        // Once Promise is resolved then we allowed to use Cypress + JQuery

        cy.get('.brand.greenLogo').then(function (logoText)  //Promise Resolved
        {
            cy.log(logoText.text()) // Cypress + JQuery
        })
        cy.get('.brand.greenLogo').should('have.text','GREENKART')


    })
})