import { CrudTestsPage } from './app.po';

describe('crud-tests App', () => {
  let page: CrudTestsPage;

  beforeEach(() => {
    page = new CrudTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
