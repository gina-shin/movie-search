describe('Modal', () => {
  context('Modal toggling', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/');
    });

    it('opens the modal when clicking a movie card', () => {
      cy.get('.grid > :nth-child(1)').click();
      cy.get('.modal-content').should('be.visible');
    });

    it('closes the modal when clicking the close button', () => {
      cy.get('.grid > :nth-child(1)').click();
      cy.get('.button-close').click();
      cy.get('.modal-content').should('not.be.visible');
    });

    it('CLOSES the modal when clicking OUTSIDE of the modal content card', () => {
      cy.get('.grid > :nth-child(1)').click();
      cy.get('.modal-backdrop').click('topRight');
      cy.get('.modal-content').should('not.be.visible');
    });

    it('DOES NOT close the modal when clicking INSIDE of the modal content card', () => {
      cy.get('.grid > :nth-child(1)').click();
      cy.get('.modal-content').click();
      cy.get('.modal-content').should('be.visible');
    });
  });
});
