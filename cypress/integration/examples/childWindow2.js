

// Picking the URL from DOM using Prop function of JQuery

describe("First test suite for Child Window 2", function () {
    it("First test case for Child Window 2", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#opentab").then(function (ele) {
            const url = ele.prop("href")
            cy.visit(url)
            cy.origin(url, () => {
                cy.get(".navbar-collapse a[href='about.html']").click()
                cy.get(".page-banner-cont h2").should("contain","About Us")
            })
        })
    })
})