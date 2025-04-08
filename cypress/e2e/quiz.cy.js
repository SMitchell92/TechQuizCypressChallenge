
describe('<Quiz />', () => {

    beforeEach(() => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions')
    })
    it('should show a start button at the beginning', () => {
        // see: https://on.cypress.io/mounting-react
        cy.visit('/')
        cy.get('button').should('exist')
    })
    it('should show the first question when start button is clicked', () => {
        // see: https://on.cypress.io/mounting-react
        cy.visit('/')
        cy.get('button').click()
        cy.get('h2').should('exist')
        cy.get('h2').contains('What is the output of print(2 ** 3)?')
    })
    it('should show the next question when next button is clicked', () => {
        cy.visit('/')
        cy.get('button').click()
        cy.get('button').eq(0).click()
        cy.get('h2').contains('Which of the following is a mutable data type in Python?')
    })
    it('should show the result when last questions button is clicked', () => {
        cy.visit('/')
        cy.get('button').click()
        cy.get('button').eq(0).click()
        cy.get('button').eq(0).click()
        cy.get('h2').contains('Quiz Completed')
    })
    it('should show the first questions when the try again button is clicked', () => {
        cy.visit('/')
        cy.get('button').click()
        cy.get('button').eq(0).click()
        cy.get('button').eq(0).click()
        cy.get('h2').contains('Quiz Completed')
        cy.get('button').click()
        cy.get('h2').contains('What is the output of print(2 ** 3)?')
    })
})