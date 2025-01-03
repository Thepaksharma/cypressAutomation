import cartPage from "./cartPage"

class productPage {
    selectProduct() {
        cy.get(".col-lg-9 [class='row'] app-card").each(($el, index, $list) => {
            const deviceName = $el.text()
            if (deviceName.includes("Nokia Edge")) {
                cy.get(".btn-info").eq(index).click() //here we have used the index number for item selection
            }
        })
    }

    selectCheckout() {
        cy.get(".btn-primary").click()
        return new cartPage()
    }
}
export default productPage;