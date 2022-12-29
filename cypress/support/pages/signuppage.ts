Cypress.Commands.add("signUp", (firstName,lastName, contactNumber,email,password) => {
    cy.get("#firstName").should("be.visible").type(firstName).log("entered first name");
    cy.get("#lastName").should("be.visible").type(lastName).log("entered last name");
    cy.get("#mobile").should("be.visible").type(contactNumber).log("entered contact number");
    cy.get("#email").should("be.visible").type(email).log("entered email");
    cy.get("#passwordData").should("be.visible").type(password).log("entered password");

    // Select terms and conditions checkbox
    cy.get("#privacyPolicy").should("be.visible").click().log("clicked on terms and conditions checkbox");
    // click next button
    cy.get("ion-button[color='secondary']").should("be.visible").click().log("clicked on next button");
});
