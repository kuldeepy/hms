import { HmsPage } from './app.po';

describe('hms App', function() {
  let page: HmsPage;

  beforeEach(() => {
    page = new HmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
