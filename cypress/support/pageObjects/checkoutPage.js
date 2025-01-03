class checkoutPage {
    checkoutItem() {
        // cy.get("#country").type("In")
        // cy.wait(5000)       //wait will be 5s only for the below line of code
        // cy.get(".suggestions ul").each(($el, index, $list) => {
        //     const Country = $el.text()
        //     if (Country.includes("India")) {
        //         cy.wrap($el).click()
        //     }
        // })
        // cy.get("label[for='checkbox2']").click()
        // cy.get(".btn-success").click()
        // cy.get(".alert-success").contains("Success! Thank you! Your order will be delivered in next few weeks")
        cy.checkoutItem()  //Cypress commands functionality used for reusable menthods - find defined code under support->cammands
    }
}
export default checkoutPage;