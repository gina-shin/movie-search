describe('Nav Menus', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1280, 720);
      cy.visit('http://localhost:8080/');
    });

    it('displays full header', () => {
      cy.get('.desktop-only').should('be.visible');
      cy.get('.mobile-only').should('not.be.visible');
    });
  });

  context('600p resolution', () => {
    beforeEach(() => {
      // run these tests as if in iphone-x
      // browser with a 375p monitor
      cy.viewport('iphone-x');
      cy.visit('http://localhost:8080/');
    });

    it('displays mobile header', () => {
      cy.get('.mobile-only').should('be.visible');
      cy.get('.desktop-only').should('not.be.visible');
    });
  });
});
