class InfoPage{
    selectorList() {
        const selectors = {
            fisrtNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            arrowButton: ".oxd-select-text--arrow",
        }
        return selectors
    }

    fillPersonalDetails(firstName, lastName, nickName){
        
        cy.get(this.selectorList().fisrtNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
        //cy.get(this.selectorList().genericField).eq(3).clear().type("nickName")
    }

    fillEmployeeDetails(employeeId, otherId, driversLicence, driversLicenceExpiry, ssnNumber, sinNumber){

        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicence)
        cy.get(this.selectorList().genericField).eq(6).clear().type(driversLicenceExpiry)
        cy.get(this.selectorList().dateCloseButton).click()
        //cy.get(this.selectorList().genericField).eq(8).clear().type(ssnNumber)
        //cy.get(this.selectorList().genericField).eq(9).clear().type(sinNumber)
    }

    fillStatus(birthDate){

        cy.get(this.selectorList().arrowButton).eq(0).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(5)').click()
        cy.get(this.selectorList().arrowButton).eq(1).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get(this.selectorList().genericField).eq(7).clear().type(birthDate)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(".oxd-radio-wrapper").eq(0).click()
    }

    saveForm(){

        cy.get(this.selectorList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Update')
        cy.get('.oxd-toast-close')
    }

}

export default InfoPage