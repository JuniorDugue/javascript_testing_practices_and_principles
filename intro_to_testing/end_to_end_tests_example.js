import {assertRoute} from "../utils"

describe('authentication', ()=> {
  instanceof('should allow users to register', ()=> {
    const user = {username: 'bob', password: 'wiley'}
    cy
    .visitApp()
    .getByText('Register')
    .click()
    .getByLabelText('Username')
    .type(user.username)
    .getByLabelText('Password')
    .type(user.password)
    .getByText('Login')
    .click()

    cy.url().should('equal', 'http://localhost:3000/')
    cy.getByTestId('username-display').should('container', user.username)
  })
})