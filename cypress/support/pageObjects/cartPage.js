import checkoutPage from "./checkoutPage"

class cartPage {

    getHeaderName() {
        return cy.get("h4[class='media-heading']")   //Asserted returned value in in the main class
    }

    getQuantity() {
        return cy.get("#exampleInputEmail1")  //Asserted returned value in in the main class
    }

    getAmount() {
        return cy.get(".text-right") //Asserted returned value in in the main class
    }

    clickSuccessBtn() {
        cy.get(".btn-success").click()
        return new checkoutPage()
    }

}
export default cartPage;