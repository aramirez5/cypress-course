describe('Testing Postman script...', () => {
  it('Execute script', () => {
    cy.exec('newman run cypress/data/Vimeo.postman_collection.json').then((data) => {
      cy.writeFile('cypress/data/output/postman-output.txt', data.stdout)
      cy.log(data.stdout)
      cy.addContext(data.stdout);
    })
  })
})