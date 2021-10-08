declare namespace Cypress {
  interface Chainable {
    /**
     * custom Cypress command for simply typing in
     * a long URL and the converting it to a short url
     * @example cy.shorten(input: string)
     */
    shorten(input: string): Chainable<Element>;
  }
}
