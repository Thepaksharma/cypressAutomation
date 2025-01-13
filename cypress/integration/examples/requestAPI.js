describe("First request send script", function () {
    it("First suite for send request to server", function () {
        //cy.request(method, url, body)
        cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {

            "name": "Learn Appium Automation with Java",
            "isbn": "deepa",
            "aisle": "8765",
            "author": "John foe"
        }).then((Response)=>
        {
            expect(Response.body).to.have.property("Msg","successfully added")
            expect(Response.body).to.have.property("ID","deepa8765")
            expect(Response.status).to.eq(200)
        })
    })


})