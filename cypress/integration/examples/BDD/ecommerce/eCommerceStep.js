import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../../support/pageObjects/loginPage";


Given("User visits the Ecommerce Page", function() {
    this.lgnPage = new loginPage()
    this.lgnPage.goToURL(Cypress.env('url'))
})

When("User submits the Username and Password", function () {
    this.productpage = this.lgnPage.submitDetails(this.data.username, this.data.password)
})


When("User click on the add product button", function () {
    this.productpage.selectProduct()
})

When("User clicks on the checkout button", function () {
    this.cartpage = this.productpage.selectCheckout()
})

When("User verifies the details on the Checkout Page", function () {
    this.cartpage.getHeaderName().should('contain', "Nokia Edge")
    this.cartpage.getQuantity().should("have.length", 1)
    this.cartpage.getAmount().should("contain", 65000)
})

When("User clicks on the Success button", function () {
    this.checkoutpage = this.cartpage.clickSuccessBtn()
})

Then("User checksout the product and verifies the Thank You message", function () {
    this.checkoutpage.checkoutItem()
})