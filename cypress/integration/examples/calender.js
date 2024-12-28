/// <reference types = "Cypress" />

describe("First test suite for Calender", function () {
    it("First test case for calender", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // cy.get(".search-keyword").type("ca")
        // cy.get(".products").find(".product").each(($el, index, $list) => {
        //     const vegName = $el.find("h4[class='product-name']").text()
        //     if (vegName.includes("Cauliflower")) {
        //         cy.wrap($el).find("button").click()
        //     }
        // })
        // cy.get(".cart-icon").click()
        // cy.get(".cart-preview .action-block button[type='button']").click()
        cy.get("a[href='#/offers']").invoke("removeAttr","target").click()
    
        const date = "3"
        const month = "December"
        const year = "2025"
        const expValue = ["12",date,year]

        cy.get(".react-date-picker__calendar-button").click()
        cy.get(".react-date-picker__calendar .react-calendar__navigation button[class='react-calendar__navigation__label']").click()
        cy.get(".react-date-picker__calendar .react-calendar__navigation button[class='react-calendar__navigation__label']").click()
        cy.get(".react-calendar__decade-view__years button").contains(year).click()
        cy.get(".react-calendar__year-view__months button").contains(month).click()
        cy.get(".react-calendar__month-view__days button").contains(date).click()

        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
        {
            cy.wrap($el).invoke("val").should("eq",expValue[index])
        })
    })
})