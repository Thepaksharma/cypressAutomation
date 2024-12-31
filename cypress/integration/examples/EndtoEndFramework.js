describe("First end to end framework", function () {
    it("First test case for End to End framework", function () {
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
        cy.get("#username").type("rahulshettyacademy")
        cy.get("#password").type("learning")
        cy.get("#signInBtn").click()
        cy.get(".col-lg-9 [class='row'] app-card").each(($el, index, $list) => {
            const deviceName = $el.text()
            if (deviceName.includes("Nokia Edge")) {
                cy.get(".btn-info").eq(index).click() //here we have used the index number for item selection
            }
        })

        cy.get(".btn-primary").click()
        cy.get("h4[class='media-heading']").contains("Nokia Edge")
        cy.get("#exampleInputEmail1").should("have.value", "1")
        cy.get(".text-right").contains("65000")
        cy.get(".btn-success").click()
        cy.get("#country").type("In")
        cy.wait(5000)
        cy.get(".suggestions ul").each(($el, index, $list) => {
            const Country = $el.text()
            if (Country.includes("India")) {
                cy.wrap($el).click()
            }
        })
        cy.get("label[for='checkbox2']").click()
        cy.get(".btn-success").click()
        cy.get(".alert-success").contains("Success! Thank you! Your order will be delivered in next few weeks")

    })
})