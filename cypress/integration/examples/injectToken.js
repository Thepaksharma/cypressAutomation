describe("First Inject token test case", function () {
    it("First Inject test case for token", function () {

        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client",
                {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem("token", Cypress.env("token"))
                    }
                })
        })

        cy.get(".w-10").eq(1).click()
        cy.get("[routerlink*='cart']").click()
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Country']").type("ind")
        cy.get(".list-group-item").each(($el, index, $list) => {
            if ($el.text() == " India") {
                cy.wrap($el).click()
            }
        })
        cy.get(".action__submit").click()
        cy.wait(2000)
        cy.contains("Click To Download Order Details in CSV").click()

    })
})