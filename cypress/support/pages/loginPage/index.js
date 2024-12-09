const elem = require('./elements').ELEMENTS;

class LoginPage {

    accessURL(){
        cy.visit('/', { failOnStatusCode: false })
    }

    validateLogo(){
        cy.get(elem.login_logo).should('be.visible').contains("Swag Labs")
    }

    validatePageTitle(){
        cy.title().should('be.eq','Swag Labs')
    }

    fillInUserName(username){
        cy.get(elem.login_username).should('be.visible').type(username)
    }

    fillInPassWord(password){
        cy.get(elem.login_password).should('be.visible').type(password)
    }

    clickLoginButton(){
        cy.get(elem.login_button).contains('Login').click()
    }

}
export default new LoginPage();