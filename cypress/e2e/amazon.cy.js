describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('#W0wltc > .QS5gu').click()
    //cy.get('#APjFqb').click()
  })
})