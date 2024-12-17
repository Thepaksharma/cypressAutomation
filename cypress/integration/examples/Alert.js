describe("Alert Test Suite", function () {
    it("Alert Test Case", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('input[id="confirmbtn"]').click()

        cy.on('window:alert',(String)=>  //on will trigger thr event again
        {
            expect(String).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(String)=>
        {
            expect(String).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})