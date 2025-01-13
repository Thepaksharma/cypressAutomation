describe("Fake Response 2", function () {
    it("Fake Response 2 Test Suite", function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept({
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
            method: "get"
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "LSA",
                    "aisle": "2303"
                }
            ]
        }).as("FakeBookRecord")
        cy.get(".btn-primary").click()

        //Length of the response array = rows of the table
        cy.wait("@FakeBookRecord").then(({request,response})=> //@fakeBookRecord contains Requeat and Response
        {
          //rows of the table ----------------- Length of the response array              
            cy.get("tr").should("have.length",response.body.length+1)
        })
        cy.get('p').should("have.text", "Oops only 1 Book available")


    })
})


//Mocking Response 
//Verifying response lenth and UI table length - To be sure same amount of details are being displayed on UI = Network
