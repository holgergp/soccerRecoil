describe('Webapp visible', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Change Teamname', () => {
    const firstTeamSelector = ':nth-child(1)  > .col-md-12 > .textPointer';
    const newTeamName = 'Der beste Verein';
    return cy
      .get(firstTeamSelector)
      .type(`{selectall}{backspace}${newTeamName}`)
      .and('contain', newTeamName);
  });
  it('Move Team around', () => {
    const firstTeamSelector = ':nth-child(1) > .col-md-12';
    const firstTeamNameSelector = ':nth-child(1) > .col-md-12 > .textPointer';
    const thirdTeamSelector = ':nth-child(3) > .col-md-12';
    const thirdTeamNameSelector = ':nth-child(3) > .col-md-12 > .textPointer';
    cy.get(firstTeamNameSelector).invoke('text').as('firstTeamName');
    cy.get(thirdTeamNameSelector).invoke('text').as('thirdTeamName');

    cy.get(firstTeamSelector).drag(thirdTeamSelector);

    cy.get('@firstTeamName').then((firstTeamName) => {
      cy.get(thirdTeamNameSelector).should('contain', firstTeamName);
    });

    return cy.get('@thirdTeamName').then((thirdTeamName) => {
      cy.get(firstTeamNameSelector).should('contain', thirdTeamName);
    });
  });
});
