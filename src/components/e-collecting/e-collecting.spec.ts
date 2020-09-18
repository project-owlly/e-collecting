import {newSpecPage} from '@stencil/core/testing';

import {Owlly} from '../types/owlly';

const owllyMock: Partial<Owlly> = {
  title: 'Sichere Velorouten für Zürich',
  description: 'Mehr als die Hälfte der Velofahrenden gibt an, dass sie sich im Strassenverkehr häufig unsicher fühlen.',
  link: `/initiative/sichere-velorouten-fuer-zuerich`,
  organisation: 'Initiativkomitee «Sichere Velorouten für Zürich»',
};

jest.mock('../helpers/utils', () => ({
  initOwlly: async (id): Promise<Owlly | undefined> => {
    return id
      ? ({
          id: `${id}`,
          ...owllyMock,
        } as Owlly)
      : undefined;
  },
}));

import {ECollecting} from './e-collecting';

describe('e-collecting', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ECollecting],
      html: '<e-collecting></e-collecting>',
    });
    expect(root).toEqualHtml(`
      <e-collecting>
        <mock:shadow-root>
          <button disabled="">
            <slot>e-Collecting</slot>
          </button>
        </mock:shadow-root>
      </e-collecting>
    `);
  });

  it('renders with custom text', async () => {
    const {root} = await newSpecPage({
      components: [ECollecting],
      html: '<e-collecting>Hello World</e-collecting>',
    });
    expect(root).toEqualHtml(`
      <e-collecting>
        <mock:shadow-root>
          <button disabled="">
            <slot>e-Collecting</slot>
          </button>
        </mock:shadow-root>
        Hello World
      </e-collecting>
    `);
  });

  it('renders an enabled button', async () => {
    const owllyId: string = 'mkro4noxKW9CNGE7mGFE';

    const {root} = await newSpecPage({
      components: [ECollecting],
      html: `<e-collecting owlly-id="${owllyId}"></e-collecting>`,
    });
    expect(root).toEqualHtml(`
      <e-collecting owlly-id="${owllyId}">
        <mock:shadow-root>
          <button aria-label="${owllyMock.title}">
            <slot>e-Collecting</slot>
          </button>
          <a aria-hidden="true" href="https://owly.ch${owllyMock.link}" rel="noopener noreferrer" target="_blank"></a>
        </mock:shadow-root>
      </e-collecting>
    `);
  });
});
