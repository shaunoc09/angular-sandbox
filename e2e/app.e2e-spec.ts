import { AngularSandboxPage } from './app.po';

describe('angular-sandbox App', () => {
  let page: AngularSandboxPage;

  beforeEach(() => {
    page = new AngularSandboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });

  it('should display Shaun O\'Connor', () => {
    page.navigateTo();
    expect(page.getH3Text()).toEqual('Shaun O\'Connor');
  });
});
