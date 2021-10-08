/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../support/index.d.ts" />

context('Form', () => {
  const URL =
    'https://www.amazon.co.uk/dp/B07ZZW7QCM/ref=gw_uk_desk_mso_smp_shl_avs_c?pf_rd_r=J67HASZ2T6W3MDDD3JY8&pf_rd_p=98e41ac4-8217-46d8-b59c-110cb975a667&pd_rd_r=e48bffd3-4469-441b-b8b5-64495b0eaa6e&pd_rd_w=bIDlZ&pd_rd_wg=RdudP&ref_=pd_gw_unk';

  const invalidURL = 'some.dummy.domain';

  beforeEach(() => {
    cy.visit('/');
    cy.wait(4000);
  });

  it('the input value matches the copied URL', () => {
    cy.get('[data-cy="form"]')
      .within(() => {
        cy.get('input').should('have.class', 'MuiInputBase-input').type(URL).should('have.value', URL);
      });
  });

  it('the button is clicked', () => {
    cy.get('button').should('have.class', 'MuiButtonBase-root').click();
  });

  it('tries to shorten an invalid URL', () => {
    cy.shorten(invalidURL);

    cy.get('div').contains('Invalid entry').should('be.visible');
  });

  it('tries to shorten a valid URL', () => {
    cy.shorten(URL);

    cy.get('[data-cy="converted-url"]')
      .within(() => {
        cy
          .get('input')
          .should('have.attr', 'value')
          .its('length')
          .should('be.gt', 0);
      });
  });

  it.only('tries to copy the converted URL', () => {
    let convertedURL = '';
    cy.shorten(URL);
    cy
      .get('[data-cy="copy-clipboard-btn"]')
      .click();
    cy
      .get('[data-cy="converted-url"]')
      .within(() => {
        cy
          .get('input')
          .invoke('val')
          .then((val) => {
            convertedURL = val as string;
            // cy.log(convertedURL as string);
            cy.window().then((win) => {
              win.navigator.clipboard.readText().then((text) => {
                assert.equal(
                  text,
                  convertedURL,
                );
              });
            });
          });
      });
  });
});

export {};
