describe('Challenge from Cypress Udemy course', () => {
  it('Fill all the data in the form and send it successfully', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type('John')
    cy.get('[name="last_name"]').type('Doe')
    cy.get('[name="email"]').type('john.doe@gmail.com')
    cy.get('textarea.feedback-input').type('Testing!')
    cy.get('[type="submit"]').click()
    cy.get('h1').should('have.text', 'Thank You for your Message!')
  })

  it('Fill some of the data in the form and send it to show us an alert', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type('John')
    cy.get('[name="last_name"]').type('Doe')
    cy.get('textarea.feedback-input').type('Testing!')
    cy.get('[type="submit"]').click()
    cy.get('body').contains('Error: all fields are required')
    cy.get('body').contains('Error: Invalid email address')
  })

  it('Click in Contact Us footer and print the value in console', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.info_links_footer').contains('Contact Us').click().then(function(itemHeaderText) {
      console.log(itemHeaderText.text())
    })
  })

  it('Back challenge', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true})
    cy.url().should('include', 'To-Do-List')
    cy.go('back')

  })

  it('Alert challenge', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
    cy.get('#button4').click()
    cy.on('window:confirm', (str) => {
      return false;
    })
    cy.get('#confirm-alert-text').contains('You pressed Cancel!')
  })

  it('Checkbox challenge', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
    cy.get(':nth-child(5) > input').as('option-3')
    cy.get('@option-3').uncheck().should('not.be.checked')
  })
  
  it.only('Dropdown challenge', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
    cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
    cy.get('#dropdowm-menu-2').select('testng').contains('TestNG')
  })
})