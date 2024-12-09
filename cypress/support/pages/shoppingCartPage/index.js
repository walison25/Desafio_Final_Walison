const elem = require('./elements').ELEMENTS;

class ShoppingCartPage {

    accessShoppingCartURL(){
        cy.visit('/cart.html', { failOnStatusCode: false })
    }

   


    validatePageShoppingCart(){
        cy.title().should('be.eq','Swag Labs')
        cy.get(elem.shop_productTitle).should('be.visible').contains('Sauce Labs Backpack')
        cy.get(elem.shop_title).should('be.visible').contains('Your Cart')
        cy.get(elem.shop_labelitemDescription).should('be.visible').contains('Description')
        cy.get(elem.shop_labelQtd).should('be.visible').contains('QTY')
        cy.get(elem.shop_btnContinueShopping).should('be.visible').contains('Continue Shopping')
        cy.get(elem.shop_btnCheckout).should('be.visible').contains('Checkout')


    }

    realizeCheckout(){

        cy.get(elem.shop_btnCheckout).should('be.visible').contains('Checkout').click()

    }

}
export default new ShoppingCartPage();