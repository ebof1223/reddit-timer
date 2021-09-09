import describeOnBranches from '../utils/describeOnBranches';

describeOnBranches('hero-section')('Hero Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Contains "Search" link (e.g. "/search/javascript")', () => {
    cy.contains(/show me the best time/i)
      .click();
    cy.url()
      .should('include', `${Cypress.config().baseUrl}/search`)
      .and('include', 'javascript');
  });
});
