/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../support/index.d.ts" />

import urls from '../fixtures/urls.json';

context('Form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(4000);
  });

  it('the input value matches the copied URL', () => {
    cy.get('[data-cy="form"]').within(() => {
      cy.get('input')
        .should('have.class', 'MuiInputBase-input')
        .type(urls.validURL)
        .should('have.value', urls.validURL);
    });
  });

  it('the button is clicked', () => {
    cy.get('button').should('have.class', 'MuiButtonBase-root').click();
  });

  it('tries to shorten an invalid URL', () => {
    cy.shorten(urls.invalidURL);

    cy.get('div').contains('Invalid entry').should('be.visible');
  });

  it('tries to shorten a valid URL', () => {
    cy.shorten(urls.validURL);

    cy.get('[data-cy="converted-url"]').within(() => {
      cy.get('input').should('have.attr', 'value').its('length').should('be.gt', 0);
    });
  });

  it('tries to copy the converted URL', () => {
    let convertedURL = '';
    cy.shorten(urls.validURL);
    cy.get('[data-cy="copy-clipboard-btn"]').click();
    cy.get('[data-cy="converted-url"]').within(() => {
      cy.get('input')
        .invoke('val')
        .then((val) => {
          convertedURL = val as string;
          // cy.log(convertedURL as string);
          cy.window().then((win) => {
            win.navigator.clipboard.readText().then((text) => {
              assert.equal(text, convertedURL);
            });
          });
        });
    });
  });
});
