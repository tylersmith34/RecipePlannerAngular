import { RecipePlannerAngularPage } from './app.po';

describe('recipe-planner-angular App', () => {
  let page: RecipePlannerAngularPage;

  beforeEach(() => {
    page = new RecipePlannerAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
