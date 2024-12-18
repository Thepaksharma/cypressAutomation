/// <reference types = "Cypress" />

describe("First test suite for Data table", function () {
    it("First test case for Data table", function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //grab the Master Selenium Automation in simple Python Language and its next value from Data table

        //Reaching out to the Master Selenium Automation in simple Python Language 
        cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Master Selenium Automation in simple Python Language")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (Text1) {
                    const grabbedText = Text1.text()
                    expect(grabbedText).to.equal("25")
                })
            }
        })

        //Reaching out to the next value
        //Grabing the value
        //Asserting the value

    })
})