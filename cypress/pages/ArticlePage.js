class ArticlePage {
  elements = {
    searchButton: (ms) => cy.get("[class='orbit-search-button-icon-with-text']", { timeout: ms }),
    searchTextBox: (ms) => cy.get("input[id='searchInput']", { timeout: ms }),
    listOfArticlesLink: (ms) => cy.get("div[data-testid='default-promo'] a p span[aria-hidden=true]",{ timeout: ms }) 
  };

  navigateToListOfArticles(text){
    this.elements.searchButton().should('be.visible').click({ force: true });
    this.elements.searchTextBox().should('be.visible').type(text).type('{enter}');
    
  }

  validateListOfArticles(){
    this.elements.listOfArticlesLink().first().then(articleLink=>{
      cy.log(articleLink.text());
    })
    this.elements.listOfArticlesLink().last().then(articleLink=>{
      cy.log(articleLink.text());
    })
  }
}

export const articlePage = new ArticlePage();