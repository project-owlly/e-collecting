import {newE2EPage} from '@stencil/core/testing';

describe('e-collecting', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<owlly-collect></owlly-collect>');
    const element = await page.find('owlly-collect');
    expect(element).toHaveClass('hydrated');
  });

  it('renders custom text', async () => {
    const page = await newE2EPage();

    await page.setContent('<owlly-collect>Hello World</owlly-collect>');
    const component = await page.find('owlly-collect');
    expect(component.textContent).toEqual(`Hello World`);
  });

  it('should translate', async () => {
    const page = await newE2EPage();

    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', {
        get: function () {
          return 'de-CH';
        },
      });
      Object.defineProperty(navigator, 'languages', {
        get: function () {
          return ['de-CH', 'de'];
        },
      });
    });

    await page.setContent('<owlly-collect></owlly-collect>');
    const component = await page.find('owlly-collect >>> button');

    expect(component.textContent).toEqual(`unterschreiben`);
  });
});
