describe("Test for Fake Response", function () {
    it("First test suite for fake response", function () {


        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        // cy.intercept({Request},{Response})
        cy.intercept({
            method: "get",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },
            {
                statusCode: "200",
                body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "LSA",
                    "aisle": "2303"
                }]
            }).as("bookRetrievals")
        cy.get(".btn-primary").click()
        cy.wait('@bookRetrievals')
        cy.get('p').should("have.text", "Oops only 1 Book available")


    })
})