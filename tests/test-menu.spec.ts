import { searchTest as test } from './tests';

test.beforeEach(async ({ yaHomePage }) => {
  await yaHomePage.visit('/');
});

test('Click menu button in navbar - menu should be opened and contain mail button', async ({ yaHomePage, yaMenuPage }) => {
  await yaHomePage.navbar.openMenu();

  await yaMenuPage.mailButtonPresent();

  await yaHomePage.navbar.page.waitForTimeout(2000);
});
