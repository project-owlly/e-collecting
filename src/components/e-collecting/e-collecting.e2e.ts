import {newE2EPage} from '@stencil/core/testing';

describe('e-collecting', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<e-collecting></e-collecting>');
    const element = await page.find('e-collecting');
    expect(element).toHaveClass('hydrated');
  });

  it('renders custom text', async () => {
    const page = await newE2EPage();

    await page.setContent('<e-collecting>Hello World</e-collecting>');
    const component = await page.find('e-collecting');
    expect(component.textContent).toEqual(`Hello World`);
  });
});
