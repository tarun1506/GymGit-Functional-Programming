/* global cy */
/// <reference types="cypress" />

describe("GymGit Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should load the app", () => {
    cy.get("img").should("have.attr", "alt", "Bootstrap");
  });

  it("should have a link to Home", () => {
    cy.get(".navbar-nav", { timeout: 10000 })
      .find(".nav-link")
      .contains("Home")
      .should("exist");
  });

  it("should have a Fork Button", () => {
    cy.get(".btn")
      .contains("Fork")
      .should("exist");
  } );
});
