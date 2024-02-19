// Purpose: To test the functionality of the app
describe('The Home Page', () => {
  it('successfully loads', () => {
      cy.visit('http://localhost:3000')
  })
})

describe('The Category page', () => {
  it('successfully loads', () => {
      cy.visit('http://localhost:3000/categories')
  })
})

describe('The Quiz page', () => {
  it('successfully loads', () => {
      cy.visit('http://localhost:3000/quiz')
  })
})

describe('The Result page', () => {
  it('successfully loads', () => {
      cy.visit('http://localhost:3000/result')
  })
})

describe('check if page is responsive', () => {
  it('checks if page is responsive', () => {
      cy.viewport(320, 480)
      cy.visit('http://localhost:3000')
      cy.viewport(1280, 800)
      cy.visit('http://localhost:3000')
  })
})

describe('check if error message shows up when form is not filled out', () => {
  it('checks if error message shows up when form is not filled out', () => {
      cy.visit('http://localhost:3000/categories')
      cy.get('form').submit()
      cy.get('div[class="col mb-4"]').contains('Please fill in all the fields').should('be.visible')
  })
})


