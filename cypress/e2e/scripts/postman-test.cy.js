describe('Testing Postman script...', () => {
    it('Execute script', () => {
      cy.exec('newman run cypress/data/Vimeo.postman_collection.json').then((data) => {
        cy.log(data.stdout)
      })
    })
  })