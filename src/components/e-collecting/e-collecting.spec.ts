import {newSpecPage} from '@stencil/core/testing';

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
});
