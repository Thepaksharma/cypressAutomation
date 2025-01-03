import loginPage from "../../support/pageObjects/loginPage"
import productPage from "../../support/pageObjects/productPage"


describe("First end to end framework", function () {

    //hooks - Before section will be excuted everytime before running any it section
    before(function () {
        cy.fixture('example').then(function (data) {  //converting fixture data into javascript object and passing it through the function
            this.data = data
        })
    })
    it("First test case for End to End framework", function () {
        Cypress.config('defaultCommandTimeout', 10000) //wait time will be 10s for entire test in it
        const lgnPage = new loginPage()
        lgnPage.goToURL("https://rahulshettyacademy.com/loginpagePractise/")
        cy.log(this.data.username)      //to log anything in the console
        const productpage = lgnPage.submitDetails(this.data.username, this.data.password)
        productpage.selectProduct()
       // cy.pause() to pause an execution
        const cartpage = productpage.selectCheckout()
        const checkoutpage = cartpage.verifyValues()
        checkoutpage.checkoutItem()
    })
})