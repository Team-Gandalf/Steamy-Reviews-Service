/* eslint-disable no-undef */
require('regenerator-runtime/runtime');

xdescribe('Reviews rendering', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4200/?=1');
  });

  it('should render the page', async () => {
    await expect(page).toMatch('Customer Reviews');
  });
});
