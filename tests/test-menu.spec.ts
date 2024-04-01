import { searchTest as test } from './tests';

test.beforeEach(async ({ yaHomePage }) => {
  await yaHomePage.visit('/e2e-tests/site/page1.html');
});

test('Click menu button in navbar - menu should be opened and contain mail button', async ({ yaHomePage, yaMenuPage }) => {
  await yaHomePage.navbar.openMenu();

  await yaMenuPage.mailButtonPresent();

  await yaHomePage.navbar.page.waitForTimeout(2000);
});
