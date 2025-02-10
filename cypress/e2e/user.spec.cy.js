import userData from '../fixtures/users/userdata.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('Orange HRM Tests', () => {

  const selectorList = {
    fisrtNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    arrowButton: ".oxd-select-text--arrow",
  }

  it.only('User Info Update', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    // cy.get(selectorList.fisrtNameField).clear().type("First Name Test")
    // cy.get(selectorList.lastNameField).clear().type("Last Name Test")
    // cy.get(selectorList.genericField).eq(3).clear().type("Nick name test")
    // cy.get(selectorList.genericField).eq(4).clear().type("EmpoyeeID")
    // cy.get(selectorList.genericField).eq(5).clear().type("Other Id Test")
    // cy.get(selectorList.genericField).eq(6).clear().type("Driver License")
    // cy.get(selectorList.genericField).eq(7).clear().type("2026-08-25")
    // cy.get(selectorList.dateCloseButton).click()
    // cy.get(selectorList.genericField).eq(8).clear().type("SSN Test")
    // cy.get(selectorList.genericField).eq(9).clear().type("SIN Test")
    // cy.get(selectorList.arrowButton).eq(0).click()
    // cy.get('.oxd-select-dropdown > :nth-child(5)').click()
    // cy.get(selectorList.arrowButton).eq(1).click()
    // cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    // cy.get(selectorList.genericField).eq(10).clear().type("1990-10-15")
    // cy.get(selectorList.dateCloseButton).click()
    // cy.get(".oxd-radio-wrapper").eq(0).click()
    // cy.get(selectorList.submitButton).eq(0).click()
    // cy.get('body').should('contain', 'Successfully Update')
    // cy.get('.oxd-toast-close')
  })
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordFild).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
   })
})