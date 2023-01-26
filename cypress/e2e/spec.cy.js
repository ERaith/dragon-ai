describe('homepage spec', () => {
  it('opens the app', () => {
    cy.visit('/')
    cy.contains('React')
  })
})