  beforeEach (function () {
        cy.fixture('example').then(function (data) {  //converting fixture data into javascript object and passing it through the function
            this.data = data
        })
    })