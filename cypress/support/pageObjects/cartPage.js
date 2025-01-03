import checkoutPage from "./checkoutPage"

class cartPage {

    verifyValues() {
        cy.get("h4[class='media-heading']").contains("Nokia Edge")
        cy.get("#exampleInputEmail1").should("have.value", "1")
        cy.get(".text-right").contains("65000")
        cy.get(".btn-success").click()
        return new checkoutPage()
    }

}
export default cartPage;