/// <reference types = "cypress-iframe"/>
import "cypress-iframe"

describe("First test suite for iFrame", function () {
    it("First test case for iframe", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       //iframe
       cy.frameLoaded("#courses-iframe") //loaded the freame with freame id
       cy.iframe().find("a[href='mentorship']").eq(0).click() //under the frame we are finding the element
       cy.wait(3000)
       cy.iframe().find("h1[class*='pricing-title']").should("have.length",2)

    })
})
