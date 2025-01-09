import cartPage from "../../support/pageObjects/cartPage"
import loginPage from "../../support/pageObjects/loginPage"
import productPage from "../../support/pageObjects/productPage"

describe("First end to end framework", function () {

    //hooks - Before section will be excuted everytime before running any it section
    before(function () {
        cy.fixture('example').then(function (data) {  //converting fixture data into javascript object and passing it through the function
            this.data = data
            this.lgnPage = new loginPage()
        })
    })
    it("First test case for End to End framework", function () {
        Cypress.config('defaultCommandTimeout', 10000) //wait time will be 10s for entire test in it
        this.lgnPage.goToURL(Cypress.env('url'))     //passsing URL by env variable - defiend in config file
        cy.log(this.data.username)      //to log anything in the console

        const productpage = this.lgnPage.submitDetails(this.data.username, this.data.password)
        
        productpage.selectProduct()
        // cy.pause() to pause an execution

        const cartpage = productpage.selectCheckout()

        cartpage.getHeaderName().should('contain', "Nokia Edge")
        cartpage.getQuantity().should("have.length", 1)
        cartpage.getAmount().should("contain", 65000)

        const checkoutpage = cartpage.clickSuccessBtn()

        checkoutpage.checkoutItem()
    })
})