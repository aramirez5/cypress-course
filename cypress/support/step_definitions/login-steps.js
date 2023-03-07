import { Before, Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I access the WebdriverUniversity Login Portal Page', () => {
    cy.visit('https://www.webdriveruniversity.com/Login-Portal/index.html')
})

When('I enter a username {word}', (userName) => {
    cy.get('#text').type(userName)
})

And('I enter a password {word}', (userPassword) => {
    cy.get('#password').type(userPassword)
})

And('I click on the login button', () => {
    cy.get('#login-button').click()
})

Then('I should be presented with the following message {word} {word}', (message, message2) => {
    cy.on('window:alert', (text) => {
        expect(text).to.contains(message + message2)
    });
})