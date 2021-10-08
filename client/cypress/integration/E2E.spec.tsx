import urls from '../fixtures/urls.json';

context('E2E tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it.only('Converts a URL and copies the generated short URL', () => {
    cy
      .focused()
      .type(urls.validURL);

    cy
      .get('button')
      .click();

    cy.request({
      method: 'POST',
      url: `${Cypress.env().apiUrl}/url/shorten`,
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
      body: {
        longUrl: urls.validURL,
      },
    });
    // Try to copy the generated url
    let convertedURL = '';
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
