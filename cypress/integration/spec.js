/* global cy */

describe('Actions', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should have input, button, select and trending carousel', () => {
        cy.getByTestId('search-box-button').should('exist');
        cy.getByTestId('search-discovery-box-button').should('exist');
        cy.getByTestId('search-box-input').should('exist');
        cy.getByTestId('language-select-menu').should('exist');
        cy.getByTestId('rating-select-menu').should('exist');
        cy.getByTestId('genre-select-menu').should('exist');
        cy.getByTestId('trending-movies-carousel').should('exist');
    });

    it('should search a movie (by search)', () => {
        cy.getByTestId('search-box-input').type('inception');
        cy.getByTestId('search-box-button').click();
        cy.getByText('Inception (2010)').should('exist');
    });

    it('should insert then delete a input value', () => {
        cy.getByTestId('search-box-input').type('inception');
        cy.getByTestId('search-box-input-delete-button').click();
        cy.getByTestId('search-box-input').should('have.value', '');
    });

    it('should search movies (by discover)', () => {
        cy.getByTestId('search-discovery-box-button').click();
        cy.getByText('Venom: Let There Be Carnage (2021)').should('exist');
    });

    it('should search a movie, open and close more info', () => {
        cy.getByTestId('search-box-input').type('inception');
        cy.getByTestId('search-box-button').click();

        cy.getAllByTestId('movie-box-button')
            .first()
            .click({force: true});
        cy.getByText('Vote:').should('exist');
        cy.getByText('Genres:').should('exist');
        cy.getByText('Plot:').should('exist');
    });

    it('should search a movie without a query and get an error', () => {
        cy.getByTestId('search-box-button').click();
        cy.getByTestId('search-box-error').should('exist');
    });

    it('should search a movie, open and go to detail', () => {
        cy.getByTestId('search-box-input').type('inception');
        cy.getByTestId('search-box-button').click();

        cy.getAllByTestId('movie-box-button')
            .first()
            .click({force: true});
        cy.getAllByTestId('go-to-detail-link')
            .first()
            .click({force: true});
        cy.getByText('Inception (2010)').should('exist');
        cy.getByTestId('related-movies-carousel').should('exist');
    });

});

describe('Detail Actions', () => {
    beforeEach(() => {
        cy.visit('/movie/580489');
    });

    it('should have back button and description and back to home', () => {
        cy.getByText('Venom: Let There Be Carnage (2021)').should('exist');
        cy.getByTestId('related-movies-carousel').should('exist');
        cy.getAllByTestId('back-to-home')
            .first()
            .click({force: true});
        cy.getByTestId('search-box-button').should('exist');
    });

});


