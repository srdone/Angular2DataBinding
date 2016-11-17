import { Angular2DataBindingPage } from './app.po';

describe('angular2-data-binding App', function() {
  let page: Angular2DataBindingPage;

  beforeEach(() => {
    page = new Angular2DataBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
