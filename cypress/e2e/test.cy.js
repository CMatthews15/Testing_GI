
describe('Home Page', () => {
  it('successful', () => {
      cy.visit('http://localhost:3000')
  })
})

describe('Categories', () => {
  it('successful', () => {
      cy.visit('http://localhost:3000/categories')
  })
})

describe('Quiz', () => {
  it('successful', () => {
      cy.visit('http://localhost:3000/quiz')
  })
})

describe('Results', () => {
  it('successful', () => {
      cy.visit('http://localhost:3000/result')
  })
})

describe('Page Responsivity', () => {
  it('page is responsive', () => {
      cy.viewport(320, 480)
      cy.visit('http://localhost:3000')
      cy.viewport(1280, 800)
      cy.visit('http://localhost:3000')
  })
})

describe('Displays error message if fields are empty', () => {
  it('error handling successful', () => {
      cy.visit('http://localhost:3000/categories')
      cy.get('form').submit()
      cy.get('div[class="col mb-4"]').contains('Please fill in all the fields').should('be.visible')
  })
})


