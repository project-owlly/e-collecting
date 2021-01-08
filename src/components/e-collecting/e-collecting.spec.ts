import {newSpecPage} from '@stencil/core/testing';

import {darkLogo, lightLogo} from '../styles/logo';

// @ts-ignore
global.IntersectionObserver = class IntersectionObserver {
  // @ts-ignore
  constructor(private func, private options) {}

  observe(element: HTMLElement) {
    this.func([{isIntersecting: true, target: element}]);
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }
};

jest.mock('../helpers/owlly.utils', () => ({
  injectCSS: async (_id: string, _src: string): Promise<string> => 'Done.',
}));

const mockStyleLight: string = `<style>
      div.logo {
        background-image: url("${lightLogo}");
      };
</style>
`;

const mockStyleDark: string = `<style>
      div.logo {
        background-image: url("${darkLogo}");
      };
</style>
`;

import {ECollecting} from './e-collecting';

describe('e-collecting', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ECollecting],
      html: '<owlly-collect></owlly-collect>',
    });

    expect(root).toEqualHtml(`
      <owlly-collect mode="light">
        <mock:shadow-root>
          ${mockStyleLight}
          <button aria-label="sign" disabled="" part="button">
            <div aria-hidden="" class="logo"></div>
            <slot>sign</slot>
          </button>
        </mock:shadow-root>
      </owlly-collect>
    `);
  });

  it('renders with custom text', async () => {
    const {root} = await newSpecPage({
      components: [ECollecting],
      html: '<owlly-collect>Hello World</owlly-collect>',
    });
    expect(root).toEqualHtml(`
      <owlly-collect mode="light">
        <mock:shadow-root>
          ${mockStyleLight}
          <button aria-label="sign" disabled="" part="button">
            <div aria-hidden="" class="logo"></div>
            <slot>sign</slot>
          </button>
        </mock:shadow-root>
        Hello World
      </owlly-collect>
    `);
  });

  it('renders an enabled button', async () => {
    const owllyId: string = 'mkro4noxKW9CNGE7mGFE';

    const {root} = await newSpecPage({
      components: [ECollecting],
      html: `<owlly-collect owlly-id="${owllyId}"></owlly-collect>`,
    });
    expect(root).toEqualHtml(`
      <owlly-collect mode="light" owlly-id="${owllyId}">
        <mock:shadow-root>
          ${mockStyleLight}
          <button aria-label="sign" part="button">
            <div aria-hidden="" class="logo"></div>
            <slot>sign</slot>
          </button>
          <a aria-hidden="true" href="https://owlly.ch/start/${owllyId}" rel="noopener noreferrer" target="_blank"></a>
        </mock:shadow-root>
      </owlly-collect>
    `);
  });

  it('renders dark mode', async () => {
    const {root} = await newSpecPage({
      components: [ECollecting],
      html: '<owlly-collect mode="dark"></owlly-collect>',
    });

    expect(root).toEqualHtml(`
      <owlly-collect mode="dark" mode="dark">
        <mock:shadow-root>
          ${mockStyleDark}
          <button aria-label="sign" disabled="" part="button">
            <div aria-hidden="" class="logo"></div>
            <slot>sign</slot>
          </button>
        </mock:shadow-root>
      </owlly-collect>
    `);
  });

  it('renders with custom lang', async () => {
    const {root} = await newSpecPage({
      components: [ECollecting],
      html: '<owlly-collect custom-lang="it"></owlly-collect>',
    });
    expect(root).toEqualHtml(`
      <owlly-collect custom-lang="it" mode="light">
        <mock:shadow-root>
          ${mockStyleLight}
          <button aria-label="firmare" disabled="" part="button">
            <div aria-hidden="" class="logo"></div>
            <slot>firmare</slot>
          </button>
        </mock:shadow-root>
      </owlly-collect>
    `);
  });
});
