describe('Test the form', function() {
  it('the form should exist', function(browser) {
    browser.url('http://localhost:8080/')
      .assert.visible('form[name="post"]');
  });
  it('short values should display errors', function(browser) {
    browser.url('http://localhost:8080/')
      .sendKeys('input[name="title"]', "Oh")
      .sendKeys('textarea[name="content"]', "My")
      .pause(800)
      .assert.visible('.title-error')
      .assert.visible('.content-error');
  });
});
