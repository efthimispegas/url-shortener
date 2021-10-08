context('Router', () => {
  it('navigates to \'/\' and the text field is focused', () => {
    cy.visit('/');
    // Wait for animation to complete
    cy.wait(4000);
    cy.get('div').should('have.class', 'MuiInputBase-root').within(() => {
      cy.get('input').should('be.focused');
    });
  });

  it('redirects to home', () => {
    cy.visit('/something');
    cy.url().should('equal', 'http://localhost:3000/');
  });
});

export {};
