describe('Testing Python script...', () => {
  it('Execute script', () => {
    cy.exec('python cypress/data/script.py').then((data) => {
      cy.log(data.stdout)
    })
  })
})