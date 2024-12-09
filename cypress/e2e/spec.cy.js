/// <reference types = "cypress" />
import user_fac from '../Factories/user_fac.js'
import user_fixture from '../fixtures/user_fixture.json'
import loginPage from '../support/pages/loginPage/index.js'
import inventoryPage from '../support/pages/inventoryPage/index.js'
import shopCartPage from '../support/pages/shoppingCartPage/index.js'
import checkout from '../support/pages/checkoutPage/index.js'

describe('Acessar URL', () => {
  let newUser = user_fac.createUser();
  let userNameFix = user_fixture.user_fix.username;
  let userPassWord = user_fixture.user_fix.password;




  it('Validar página de login', () => {
    loginPage.accessURL()
    loginPage.validatePageTitle()
    loginPage.validateLogo()
  
  })

  it('Validar realização do login', () => {
    loginPage.accessURL()
    loginPage.fillInUserName(userNameFix)
    loginPage.fillInPassWord(userPassWord)
    loginPage.clickLoginButton()  
    inventoryPage.validateLogoutBtn()
  })


  beforeEach(()=>{

    cy.login(userNameFix, userPassWord)

   })

       
  it('Validar página de produtos', () => {
    
    inventoryPage.acessProductPageURL()
    inventoryPage.validateProductPageLogo()
    inventoryPage.validateProductPageTitle()
    inventoryPage.validateVisibleProducts()
   

  })

  it('Validar inclusão de itens no carrinho de compras', () => {

    inventoryPage.acessProductPageURL()
    inventoryPage.validateAddProductItemBtn()
    

  })

  it('Validar carrinho de compras', () => {
    inventoryPage.acessProductPageURL()
    inventoryPage.validateAddProductItemBtn()
    inventoryPage.acessShoppingCart()
    shopCartPage.validatePageShoppingCart()
   

  })

  it('Validar e preencher campos na página checkout - suas informações', () => {
    inventoryPage.acessProductPageURL()
    inventoryPage.validateAddProductItemBtn()
    inventoryPage.acessShoppingCart()
    shopCartPage.validatePageShoppingCart()
    shopCartPage.realizeCheckout()
    checkout.validatePageYourInformation()
    checkout.fillRegistration(newUser.firstName, newUser.lastname, newUser.postalCode)
    checkout.clickBtnContinue()

  })


 
})