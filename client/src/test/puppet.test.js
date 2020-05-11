require('regenerator-runtime/runtime');

describe('Reviews rendering', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4200/?=1');
  });

  it('should render the page', async () => {
    await expect(page).toMatch('Customer Reviews');
  });
});
