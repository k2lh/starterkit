'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /viewA when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/viewA");
  });


  describe('viewA', function() {

    beforeEach(function() {
      browser.get('index.html#/viewA');
    });


    it('should render viewA when user navigates to /viewA', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('viewB', function() {

    beforeEach(function() {
      browser.get('index.html#/viewB');
    });


    it('should render viewB when user navigates to /viewB', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
