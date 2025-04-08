import Quiz from '../../client/src/components/Quiz.tsx';
// // import React from 'react'

describe('<Quiz />', () => {

    beforeEach(() => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions')
    })
    it('should show a start button at the beginning', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Quiz />)
        cy.get('button').should('exist')
    })
    it('should show the first question when start button is clicked', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Quiz />)
        cy.get('button').click()
        cy.get('h2').should('exist')
        cy.get('h2').contains('What is the output of print(2 ** 3)?')
    })
})