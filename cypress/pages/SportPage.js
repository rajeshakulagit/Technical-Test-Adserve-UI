class SportPage {
  elements = {
    pageHeader: (ms) => cy.get("[id='page']", { timeout: ms }),
    teamNameLable: (ms) => cy.get("[class='gs-u-display-none gs-u-display-block@m qa-full-team-name sp-c-fixture__team-name-trunc']", { timeout: ms }),
    allSportLink: (ms) => cy.get("[id='sp-nav-all-sport-button']", { timeout: ms }),
    linkForAtozSport: (ms) => cy.get("[data-stat-title='Full Sports A-Z']", { timeout: ms }),
    allSportPageHeader: (ms) => cy.get("[id='main-heading']", { timeout: ms }),
    showHideScoreLink: (ms) => cy.get('[class="gs-o-bullet__text sp-c-football-scores-button__text"]', { timeout: ms }),
    scorerDetails: (ms) => cy.get("[class='sp-c-fixture__aside sp-c-fixture-player-actions__aside gs-u-pt gs-u-pb']", { timeout: ms }),
    dateForwardLink: (ms) => cy.get("[class^='sp-c-content-slider__button gs-o-button gs-o-button--secondary sp-c-content-slider__button--next']",{ timeout: ms }),
    dateBackwardLink: (ms) => cy.get("[class^='sp-c-content-slider__button gs-o-button gs-o-button--secondary sp-c-content-slider__button--prev']", { timeout: ms }),
    dateLables: (ms) => cy.get("[class='sp-c-date-picker-timeline__item-inner  false']", { timeout: ms })
  
  };

navigateToSportUrl(){
    cy.wait(3000);
    cy.visit("/");
    cy.viewport(1920, 1080);
    this.elements.pageHeader().should('be.visible').contains('Football Scores & Fixtures');
}
  
displayTeamNames(){
this.elements.teamNameLable().each((teamName, index)=>{
  let count = index + 1;
  cy.log(`team ${count} `+teamName.text());
 })
}

noMatchConveyMessage(message){
  this.elements.teamNameLable().each(()=>{
   }).then(count=>{
    cy.log(count.length);
    if (count.length == 0)
    cy.log(message);
   })
}

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

validateForwardBackwardByDates(){
  cy.wait(1000);
  const date = new Date();
  const currentDate = date.getDate();
  this.elements.dateLables().eq(14).find('span').eq(0).contains('TODAY');
  this.elements.dateLables().eq(14).find('span').eq(1).contains(currentDate);
  this.elements.dateForwardLink().should('be.visible').click({ force: true });
  cy.wait(1000);
  this.elements.dateForwardLink().should('be.visible').click({ force: true });
  this.elements.dateForwardLink().should('be.visible').and('be.disabled').then(()=>{
   for (var i = 0; i < 4; i++){
    this.elements.dateBackwardLink().should('be.visible').click({ force: true });
    cy.wait(1000);
   }
   this.elements.dateBackwardLink().should('be.visible').and('be.disabled');
  })
}

validateShowHideScores(){
  this.elements.showHideScoreLink().should('be.visible').then(scoreLink => {
  if (scoreLink.text() == 'Show scorers')
  {
    cy.wrap(scoreLink).click({ force: true }).then(newScoreLink => {
      expect(newScoreLink.text()).to.equal('Hide scorers');
      this.elements.scorerDetails().should('be.visible');
    })
  } 

  else if (scoreLink.text() == 'Hide scorers')
  {
    cy.wrap(scoreLink).click({ force: true }).then(newScoreLink => {
      expect(newScoreLink.text()).to.equal('Show scorers')
    })
  } 
  })
}

validateAllSportPage(){
  this.elements.allSportLink().should('be.visible').click({ force: true });
  this.elements.linkForAtozSport().should('be.visible').click({ force: true });
  this.elements.allSportPageHeader().should('be.visible').contains('A-Z Sport');
  }
 
}
export const sportPage = new SportPage();