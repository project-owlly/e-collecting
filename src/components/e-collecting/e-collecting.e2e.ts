import {newE2EPage} from '@stencil/core/testing';
import {Owlly} from '../types/owlly';

const owllyMock: Partial<Owlly> = {
  title: 'Sichere Velorouten für Zürich',
  description: 'Mehr als die Hälfte der Velofahrenden gibt an, dass sie sich im Strassenverkehr häufig unsicher fühlen.',
  link: `/initiative/sichere-velorouten-fuer-zuerich`,
  organisation: 'Initiativkomitee «Sichere Velorouten für Zürich»',
};

jest.mock('../helpers/utils', () => ({
  initOwlly: async (id): Promise<Owlly | undefined> => {
    return {
      id: `${id}`,
      ...owllyMock,
    } as Owlly;
  },
}));

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

  it('renders an enabled button', async () => {
    const page = await newE2EPage();

    await page.setContent('<e-collecting id="28c72f42-5daa-4a28-b39d-b51b203c3740"></e-collecting>');
    const button = await page.find('e-collecting >>> button');

    expect(button).not.toBe(null);
    expect(button).not.toHaveAttribute('disabled');
  });
});
