import constants from "./constants"; constants
describe("charac pharmacy signup", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        // Network calls
        cy.intercept({
            method: "POST",
            url: "**/auth/signup",
        }).as("signupApi");

        cy.visit("/#/home");
        cy.title().should("eq", constants.PAGE_TITLE);
    });

    it("should be able to signup", () => {

        cy.xpath("//span[contains(text(),'Sign Up')]").should("be.visible").click().log("clicked on signup button");

        cy.xpath("//ion-text[normalize-space()='I am a Customer']").should("be.visible").click().log("clicked on I am a customer button");

        cy.signUp("test","test","077721234566","test121212@example.com","test1234");

        cy.wait("@signupApi").then((interception) => {
            expect(interception.response.statusCode, "Signup auth API failed").to.eq(200);
        })
    });

    it("Shouldn't be able to signup with existing email address", () => {

        cy.xpath("//span[contains(text(),'Sign Up')]").should("be.visible").click().log("clicked on signup button");

        cy.xpath("//ion-text[normalize-space()='I am a Customer']").should("be.visible").click().log("clicked on I am a customer button");

        cy.signUp("test","test","077721234566","test121212@example.com","test1234");

        cy.wait("@signupApi").then((interception) => {
            expect(interception.response.statusCode, "Signup auth API should throw 500 status code").to.eq(500);
        })
    });
});
