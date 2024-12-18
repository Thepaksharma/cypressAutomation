/// <reference types = "Cypress" />

//Invoke - Helps to modify the DOM
//origin - Allows cross domain functionality

describe("First test suite for Child Window", function () {
    it("First test case for Child Window", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Open child tab in same window using invoke function - We have removed target attribute below which redirects the page
        cy.get("#opentab").invoke("removeAttr", "target").click() //invoke jquery function which helps to make changes in DOM/ HTML

        cy.origin("https://www.qaclickacademy.com/", function () //Origin is being used whenever there are ps=osiibility of change in domain
        // 

        {
            //click on About us in new domain
            cy.get("#navbarSupportedContent a[href='about.html']").click()
            cy.get(".page-banner-cont h2").should("contain", "")
        })







    })
})
