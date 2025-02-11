import userData from '../fixtures/users/userdata.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import InfoPage from '../pages/infoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const infoPage = new InfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    infoPage.fillPersonalDetails('First Name', 'Last Name')
    infoPage.fillEmployeeDetails('Employ ID', "Other ID", 'Drivers Licence', '2026-08-25')
    infoPage.fillStatus('1990-05-15')
    infoPage.saveForm()

  })
  
})