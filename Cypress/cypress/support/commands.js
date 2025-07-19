Cypress.Commands.add('getMediaAPI', (endpoint = '') => {
  const url = `${Cypress.env('BASE_URL')}${endpoint}`;
  const start = Date.now();
  return cy.request({
    method: 'GET',
    url,
    failOnStatusCode: false,
    time: true
  }).then((response) => {
    const duration = Date.now() - start;
    return { response, duration };
  });
});
