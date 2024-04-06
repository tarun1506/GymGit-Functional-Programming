/* global cy */
/// <reference types="cypress" />

describe("GymGit Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  describe("1. Home Page", () => {
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
      cy.get(".btn").contains("Fork").should("exist");
    });
  });
});

describe("2. Fork Page", () => {
  it("Onclick of Fork Button, should redirect to ForkPage", () => {
    cy.visit("http://localhost:5173");
    cy.get(".btn").contains("Fork").click();
    cy.url().should("include", "/forkpage");
  });

  it("should have a view schedule Button", () => {
    cy.visit("http://localhost:5173/forkpage");
    cy.get(".btn").contains("View Schedule").should("exist");
  });

  it("should have days navbar", () => {
    cy.visit("http://localhost:5173/forkpage");
    cy.get("#nav-tab").should("exist");
  });

  it("Navbar should have days", () => {
    cy.visit("http://localhost:5173/forkpage");
    cy.get(".nav-link").contains("Monday").should("exist");
  });
});

describe("3. Schedule Page", () => {
  it("Onclick of View Schedule Button, should open Schedule offcanvas", () => {
    cy.visit("http://localhost:5173/forkpage");
    cy.get(".btn").contains("View Schedule").click();
    cy.get("#offcanvasRight").should("exist");
  });
});

describe("4. Save Schedule", () => {
  it("should have a Save Button", () => {
    cy.visit("http://localhost:5173/forkpage");
    cy.get(".btn").contains("Save").should("exist");
  });

  it("should have a Save As New Schedule Button", () => {
    cy.visit("http://localhost:5173/forkpage");
    cy.get(".btn").contains("Save As New Schedule").should("exist");
  });

  it("should save the schedule", () => {
    cy.visit("http://localhost:5173/forkpage");
    cy.window().then((win) => {
      cy.stub(win, "alert").as("alertStub");
    });
    cy.get(".btn").contains("Save As New Schedule").click();
    cy.get("@alertStub").should(
      "be.calledWith",
      "New schedule added successfully"
    );
  });
});


describe("5. Return to Home Page", () =>{
  it("should return to Home Page", () => {
    cy.visit("http://localhost:5173/forkpage");
    cy.get(".navbar-brand").click();
    cy.url().should("eq", "http://localhost:5173/");
  });
});
