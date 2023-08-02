function generateUniqueEmail() {
	var timestamp = Math.floor(new Date().getTime() / 1000);
	return "test_" + timestamp + "@mail.com";
}

describe("Back Market Login", function () {
	before(function () {
		// Generate a unique email and password
		const uniqueEmail = generateUniqueEmail();
		const password = "Azerty12345*";
		// Store them as global variables
		Cypress.env("uniqueEmail", uniqueEmail);
		Cypress.env("password", password);
	});

	it("Create an account to Back Market", function () {
		// Visitez la page de connexion
		cy.visit("https://preprod.backmarket.fr/fr-fr/register");
		cy.get('[data-qa="accept-cta"]').click();
		// Saisissez l'email et le mot de passe dans les champs appropriés
		// Remplacez 'your_email' et 'your_password' par vos identifiants de connexion
		// Remplacez également 'email_locator' et 'password_locator' par les bons selecteurs
		cy.get("#firstName").type("yellow");
		cy.get("#lastName").type("team");
		const uniqueEmail = Cypress.env("uniqueEmail");
		const password = Cypress.env("password");
		cy.get("#signup-email").type(uniqueEmail);
		cy.get("#signup-password").type(password);
		console.log(uniqueEmail);

		cy.get("._2OVE0h6V").click();
		cy.get("._1UsvLiQk").click();
		// Cliquez sur le bouton de connexion
		// Remplacez 'submit_locator' par le bon selecteur
		cy.get('[data-qa="signup-submit-button"]').click();

		// Vérifiez que vous êtes connecté en vérifiant un élément de la page de profil
		// Remplacez 'profile_element_locator' par le bon selecteur
		cy.contains("Adopter un produit");
	});

	it("Fails to create an account to Back Market", function () {
		// Visitez la page de connexion
		cy.visit("https://preprod.backmarket.fr/fr-fr/register");
		cy.get('[data-qa="accept-cta"]').click();
		// Saisissez l'email et le mot de passe dans les champs appropriés
		// Remplacez 'your_email' et 'your_password' par vos identifiants de connexion
		// Remplacez également 'email_locator' et 'password_locator' par les bons selecteurs
		cy.get("#firstName").type("yellow");
		cy.get("#lastName").type("team");
		const uniqueEmail = Cypress.env("uniqueEmail");
		const password = "password";
		cy.get("#signup-email").type(uniqueEmail);
		cy.get("#signup-password").type(password);
		console.log(uniqueEmail);

		cy.get("._2OVE0h6V").click();
		cy.get("._1UsvLiQk").click();
		// Cliquez sur le bouton de connexion
		// Remplacez 'submit_locator' par le bon selecteur
		cy.get('[data-qa="signup-submit-button"]').click();

		// Vérifiez que vous êtes connecté en vérifiant un élément de la page de profil
		// Remplacez 'profile_element_locator' par le bon selecteur
		cy.get('[data-qa="signup-submit-button"]').should("be.disabled");
	});

	it("Logs in to Back Market", function () {
		// Visitez la page de connexion
		cy.visit("https://preprod.backmarket.fr/fr-fr/register");
		cy.get('[data-qa="accept-cta"]').click();
		// Saisissez l'email et le mot de passe dans les champs appropriés
		// Remplacez 'your_email' et 'your_password' par vos identifiants de connexion
		// Remplacez également 'email_locator' et 'password_locator' par les bons selecteurs
		const uniqueEmail = Cypress.env("uniqueEmail");
		const password = Cypress.env("password");
		cy.get("#signin-email").type(uniqueEmail);
		cy.get("#signin-password").type(password);

		console.log(uniqueEmail);
		// Cliquez sur le bouton de connexion
		// Remplacez 'submit_locator' par le bon selecteur
		cy.get('[data-qa="signin-submit-button"]').click();

		// Vérifiez que vous êtes connecté en vérifiant un élément de la page de profil
		// Remplacez 'profile_element_locator' par le bon selecteur
		cy.contains("Adopter un produit");
	});
});
