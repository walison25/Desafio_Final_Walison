const elem = require('./elements').ELEMENTS;

class CheckoutPage {

    acessCheckoutPageURL(){

        cy.visit('/checkout-step-one.html', { failOnStatusCode: false })
       
    }

    validatePageYourInformation(){
        cy.title().should('be.eq','Swag Labs')
        cy.get(elem.checkoutTitlePage).should('be.visible').contains('Checkout: Your Information')
        cy.get(elem.input_firstName).should('be.visible')
        cy.get(elem.input_lastName).should('be.visible')
        cy.get(elem.input_postalCode).should('be.visible')
        cy.get(elem.check_btnCancel).should('be.visible').contains('Cancel')
        cy.get(elem.check_btnContinue).should('be.visible').contains('Continue')


    }

    fillRegistration(firstName, lastname, postalCode){
        cy.get(elem.input_firstName).should('be.visible').type(firstName)
        cy.get(elem.input_lastName).should('be.visible').type(lastname)
        cy.get(elem.input_postalCode).should('be.visible').type(postalCode)

    }

    clickBtnContinue(){
        cy.get(elem.check_btnContinue).should('be.visible').contains('Continue').click()

    }

}
export default new CheckoutPage();