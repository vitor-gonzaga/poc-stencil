import { newE2EPage } from '@stencil/core/testing';

describe('father-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<father-component></father-component>');

    const element = await page.find('father-component');
    expect(element).toHaveClass('hydrated');
  });
});
