describe("charac pharmacy signup", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        // Network calls
        cy.intercept({
            method: "POST",
            url: "**/auth/signup",
        }).as("signupApi");

        cy.visit("/#/home");
    });

    it("should be able to signup", () => {
        cy.title().should("eq", "Charac");

        cy.xpath("//span[contains(text(),'Sign Up')]").should("be.visible").click().log("clicked on signup button");

        cy.xpath("//ion-text[normalize-space()='I am a Customer']").should("be.visible").click().log("clicked on I am a customer button");

        cy.signUp("test","test","077721234566","test121212@example.com","test1234");

        cy.wait("@signupApi").then((interception) => {
            expect(interception.response.statusCode, "Signup auth API failed").to.eq(200);
        })
    });
});
