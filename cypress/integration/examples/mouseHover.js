/// <reference types = "Cypress" />
describe("First test suite for Mouse Hover", function () {
    it("First test case for Mouse hover", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Locate the mouse hover button //Invoke - invokes the function
        // cy.get(".mouse-hover-content").invoke("show") //way 1
        cy.get(".mouse-hover-content a[href='#top']").click({ force: true }) // Force true it helps to find hidden element and gives an ability to click on it // way 2
        cy.url().should("include","top")
    
        //Click on the top
        
        //Verify the URL of the page
    })
})