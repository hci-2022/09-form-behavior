module.exports = async (page, scenario, vp) => {
  await page.evaluateOnNewDocument(function() {
    console.log('Clearing local storage');
    localStorage.clear();
  });
};
