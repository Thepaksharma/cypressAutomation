import productPage from "./productPage"

class loginPage {

    goToURL(URL) {
        cy.visit(URL)
    }

    submitDetails(username,password)
    {
        cy.get("#username").type(username)
        cy.get("#password").type(password)
        cy.get("#signInBtn").click()
        
        return new productPage()
    }

}
export default loginPage;