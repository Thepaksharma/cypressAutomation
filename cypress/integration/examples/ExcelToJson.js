const excelToJson = require("convert-excel-to-json");
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
            productNameClicked = ele.text();
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
        cy.contains("Excel").click()


        const filePath = Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_deepsharma0312.xlsx"
        cy.task('ExcelToJSONConvertor', filePath).then(function (result) { //Task will be called here with its name and filepath - > Config
            expect(productNameClicked).to.equal(result.data[1].B)
        })


        //readFile function can be used to scan the full file after converting into text format - Only content can be validated not the position
        cy.readFile(filePath).then(function (text) {
            expect(text).to.include(productNameClicked)
        })

    });

})

