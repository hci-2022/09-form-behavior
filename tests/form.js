describe('The Post Form', function() {

  before(function(browser) {
    this.postform = browser.url('http://localhost:8080/');
    this.postform
      .executeScript(function() {
        localStorage.clear();
      });
  });

  it('the form should exist', function(browser) {
    this.postform
      .assert
      .elementPresent('form[name="post"]');
  });

  it('short input should display the correct error', function(browser) {
    this.postform
      .sendKeys('input#title', 'Oh')
      .sendKeys('textarea#content', 'My')
      .waitForElementPresent('.content-error')
      .assert.visible('.content-error')
      .assert.visible('.title-error')
      .assert.textContains('.content-error', 'Content must be at least 3 characters')
      .assert.textContains('.title-error', 'Title must be at least 3 characters');
  });

});
