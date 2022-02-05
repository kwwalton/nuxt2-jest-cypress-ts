describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should visit the home page', () => {
    cy.visit('/')
  })

  it('should load users', () => {
    cy.get('[data-test=get-users-button]').click()
  })

  it('should be ten users', () => {
    cy.get('[data-test=get-users-button]').click()
    cy.get('[data-test=user-list]').children().should('have.length', 10)
  })
})
