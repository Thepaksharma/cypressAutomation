const neatCSV = require("neat-csv")
let productNameClicked

describe("First Inject token test case", function () {
    it("First Inject test case for token", async function () {


        //Under commands find below LoginAPI()
        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client",
                {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem("token", Cypress.env("token"))
                    }
                })
        })
        cy.get(".card-body b").eq(1).then(function (ele) {
           productNameClicked= ele.text();
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

        //CSV -> text conversion -> JS object
        //Await and .then - Asynchronous
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_deepsharma0312.csv").then(async function (text) {
            const csv = await neatCSV(text)
            console.log(csv)
            const productName = csv[0]["Product Name"]
            console.log(productName)
            console.log(productNameClicked)
            expect(productName).to.equal(productNameClicked)

        })


    })
})