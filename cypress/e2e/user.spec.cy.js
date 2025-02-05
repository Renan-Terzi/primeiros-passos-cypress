import userData from '../fixtures/users/userdata.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordFild: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    fisrtNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('User Info Update', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordFild).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.fisrtNameField).clear().type("First Name Test")
    cy.get(selectorList.lastNameField).clear().type("Last Name Test")
    cy.get(selectorList.genericField).eq(3).clear().type("EmpoyeeID")
    cy.get(selectorList.genericField).eq(4).clear().type("Other Id Test")
    cy.get(selectorList.genericField).eq(5).clear().type("Driver License")
    cy.get(selectorList.genericField).eq(6).clear().type("2026-08-25")
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordFild).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
   })
})