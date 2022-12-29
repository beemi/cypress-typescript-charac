describe("charac pharmacy signup", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);

        cy.visit("/#/home");
    });

    it("should be able to signup", () => {
        cy.title().should("eq", "Charac");

        cy.get("span[class='auth-btn-text'] span")
            .should("be.visible")
            .click()
            .log("clicked on signup button");
    });
});
