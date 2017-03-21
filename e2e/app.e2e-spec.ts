import { CzujduchAppPage } from './app.po';

describe('czujduch-app App', function() {
  let page: CzujduchAppPage;

  beforeEach(() => {
    page = new CzujduchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
