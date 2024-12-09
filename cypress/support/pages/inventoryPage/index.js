const elem = require('./elements').ELEMENTS;

class InventoryPage {

    acessProductPageURL(){

        cy.visit('/inventory.html', { failOnStatusCode: false })
       
    }

    validateProductPageLogo(){
        cy.get(elem.logoPage).should('be.visible')
    }

    validateProductPageTitle(){
        cy.title().should('be.eq','Swag Labs')
        cy.get(elem.inventoryTitle).should('be.visible').contains('Products')
         
    }

    validateVisibleProducts(){
        cy.get(elem.productImage).should('be.visible')
        cy.get(elem.productName).should('be.visible').contains('Sauce Labs Backpack')
        cy.get(elem.produtValue).should('be.visible').contains('29.99')

    }

    validateLogoutBtn(){
        cy.get(elem.menu_btn).should('be.visible').click()
        cy.get(elem.menu_btnLogout).should('be.visible')
     
    }

    validateAddProductItemBtn(){
        cy.get(elem.btn_AddProduct).should('be.visible').contains('Add to cart').click()
        cy.get(elem.removeProductShopping).should('be.visible').contains('Remove')
        cy.get(elem.shoppingCartBadge).should('be.visible').contains('1')
        
    }

    acessShoppingCart(){
        cy.get(elem.shoppingCartIcon).should('be.visible').click()
    }

}
export default new InventoryPage();