describe('the spec to test the-mentalist project', () => {
    beforeEach(() => {
      // Visit the project site before each test
      cy.visit('http://localhost:3000/')
    })
  
    it('verifies the text displayed on screen', () => {
      cy.contains('Hello World!')
    })
})
