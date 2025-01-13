describe("First intercept URL", function () {
    it("First intercept test case", function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        // cy.intercept(method, url, routeHandler)
        cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", (req) => {
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"  //Modify the URL
            req.continue((res) =>    //Hitting the modified URL to the server
            {
                // expect(res.statusCode).to.equal(403)
            })
        }).as("dummyURL")
        cy.get(".btn-primary").click()
        cy.wait("@dummyURL")

    })
})

//Modify the URL