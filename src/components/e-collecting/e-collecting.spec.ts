import {newSpecPage} from '@stencil/core/testing';

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

import {Owlly} from '../types/owlly';

const owllyMock: Partial<Owlly> = {
  title: 'Sichere Velorouten für Zürich',
  description: 'Mehr als die Hälfte der Velofahrenden gibt an, dass sie sich im Strassenverkehr häufig unsicher fühlen.',
  link: `/initiative/sichere-velorouten-fuer-zuerich`,
  organisation: 'Initiativkomitee «Sichere Velorouten für Zürich»',
};

jest.mock('../helpers/owlly.utils', () => ({
  loadOwlly: async (id): Promise<Owlly | undefined> => {
    return id
      ? ({
          id: `${id}`,
          ...owllyMock,
        } as Owlly)
      : undefined;
  },
}));

const mockStyleLight: string = `<style>
      div.logo {
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg width='100%25' height='100%25' viewBox='0 0 591 591' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3E%3Cg transform='matrix(4.16667,0,0,4.16667,-1336.85,-2626.12)'%3E%3Cpath d='M444.031,678.325C442.717,675.25 440.902,672.621 438.586,670.443C436.269,668.265 433.538,666.571 430.393,665.361C427.245,664.152 423.841,663.546 420.177,663.546C416.511,663.546 413.106,664.152 409.96,665.361C406.813,666.571 404.083,668.265 401.767,670.443C399.449,672.621 397.634,675.25 396.322,678.325C395.008,681.403 394.351,684.808 394.351,688.542C394.351,692.275 395.008,695.682 396.322,698.758C397.634,701.835 399.449,704.462 401.767,706.64C404.083,708.818 406.813,710.513 409.96,711.722C413.106,712.931 416.511,713.537 420.177,713.537C423.841,713.537 427.245,712.931 430.393,711.722C433.538,710.513 436.269,708.818 438.586,706.64C440.902,704.462 442.717,701.835 444.031,698.758C445.344,695.682 446.002,692.275 446.002,688.542C446.002,684.808 445.344,681.403 444.031,678.325ZM433.297,694.077C432.778,695.888 431.948,697.506 430.807,698.933C429.667,700.36 428.215,701.509 426.451,702.38C424.688,703.25 422.596,703.684 420.177,703.684C417.755,703.684 415.665,703.25 413.902,702.38C412.138,701.509 410.686,700.36 409.546,698.933C408.405,697.506 407.575,695.888 407.056,694.077C406.538,692.267 406.279,690.421 406.279,688.542C406.279,686.662 406.538,684.817 407.056,683.007C407.575,681.197 408.405,679.578 409.546,678.15C410.686,676.724 412.138,675.575 413.902,674.705C415.665,673.835 417.755,673.399 420.177,673.399C422.596,673.399 424.688,673.835 426.451,674.705C428.215,675.575 429.667,676.724 430.807,678.15C431.948,679.578 432.778,681.197 433.297,683.007C433.815,684.817 434.074,686.662 434.074,688.542C434.074,690.421 433.815,692.267 433.297,694.077Z' style='fill:white;fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(4.16667,0,0,4.16667,-1336.85,-2626.12)'%3E%3Cpath d='M388.516,678.325C387.202,675.25 385.387,672.621 383.071,670.443C380.754,668.265 378.023,666.571 374.877,665.361C371.73,664.152 368.325,663.546 364.661,663.546C360.996,663.546 357.591,664.152 354.445,665.361C351.298,666.571 348.568,668.265 346.252,670.443C343.934,672.621 342.119,675.25 340.807,678.325C339.492,681.403 338.836,684.808 338.836,688.542C338.836,692.275 339.492,695.682 340.807,698.758C342.119,701.835 343.934,704.462 346.252,706.64C348.568,708.818 351.298,710.513 354.445,711.722C357.591,712.931 360.996,713.537 364.661,713.537C368.325,713.537 371.73,712.931 374.877,711.722C378.023,710.513 380.754,708.818 383.071,706.64C385.387,704.462 387.202,701.835 388.516,698.758C389.829,695.682 390.487,692.275 390.487,688.542C390.487,684.808 389.829,681.403 388.516,678.325ZM377.781,694.077C377.263,695.888 376.433,697.506 375.292,698.933C374.151,700.36 372.699,701.509 370.936,702.38C369.173,703.25 367.081,703.684 364.661,703.684C362.24,703.684 360.15,703.25 358.387,702.38C356.623,701.509 355.171,700.36 354.03,698.933C352.89,697.506 352.06,695.888 351.541,694.077C351.023,692.267 350.763,690.421 350.763,688.542C350.763,686.662 351.023,684.817 351.541,683.007C352.06,681.197 352.89,679.578 354.03,678.15C355.171,676.724 356.623,675.575 358.387,674.705C360.15,673.835 362.24,673.399 364.661,673.399C367.081,673.399 369.173,673.835 370.936,674.705C372.699,675.575 374.151,676.724 375.292,678.15C376.433,679.578 377.263,681.197 377.781,683.007C378.3,684.817 378.559,686.662 378.559,688.542C378.559,690.421 378.3,692.267 377.781,694.077Z' style='fill:url(%23_Linear1);'/%3E%3C/g%3E%3Cg transform='matrix(4.16667,0,0,4.16667,-1336.85,-2626.12)'%3E%3Cpath d='M392.363,708.228L373.804,726.787L392.363,754.255L410.922,726.787L392.363,708.228Z' style='fill:url(%23_Linear2);'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='_Linear1' x1='0' y1='0' x2='1' y2='0' gradientUnits='userSpaceOnUse' gradientTransform='matrix(94.4329,105.989,-105.989,94.4329,329.064,655.054)'%3E%3Cstop offset='0' style='stop-color:white;stop-opacity:1'/%3E%3Cstop offset='0.1' style='stop-color:rgb(0,175,225);stop-opacity:1'/%3E%3Cstop offset='1' style='stop-color:rgb(151,187,115);stop-opacity:1'/%3E%3C/linearGradient%3E%3ClinearGradient id='_Linear2' x1='0' y1='0' x2='1' y2='0' gradientUnits='userSpaceOnUse' gradientTransform='matrix(94.4329,105.989,-105.989,94.4329,329.064,655.054)'%3E%3Cstop offset='0' style='stop-color:white;stop-opacity:1'/%3E%3Cstop offset='0.1' style='stop-color:rgb(0,175,225);stop-opacity:1'/%3E%3Cstop offset='1' style='stop-color:rgb(151,187,115);stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
      };
</style>
`;

const mockStyleDark: string = `<style>
      div.logo {
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg width='100%25' height='100%25' viewBox='0 0 591 591' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3E%3Cg transform='matrix(4.16667,0,0,4.16667,-552.913,-2626.12)'%3E%3Cpath d='M255.885,678.325C254.571,675.25 252.756,672.621 250.44,670.443C248.123,668.265 245.392,666.571 242.246,665.361C239.099,664.152 235.694,663.546 232.03,663.546C228.365,663.546 224.96,664.152 221.814,665.361C218.667,666.571 215.937,668.265 213.621,670.443C211.303,672.621 209.488,675.25 208.176,678.325C206.861,681.403 206.205,684.808 206.205,688.542C206.205,692.275 206.861,695.682 208.176,698.758C209.488,701.835 211.303,704.462 213.621,706.64C215.937,708.818 218.667,710.513 221.814,711.722C224.96,712.931 228.365,713.537 232.03,713.537C235.694,713.537 239.099,712.931 242.246,711.722C245.392,710.513 248.123,708.818 250.44,706.64C252.756,704.462 254.571,701.835 255.885,698.758C257.198,695.682 257.855,692.275 257.855,688.542C257.855,684.808 257.198,681.403 255.885,678.325ZM245.15,694.077C244.632,695.888 243.802,697.506 242.661,698.933C241.52,700.36 240.068,701.509 238.305,702.38C236.542,703.25 234.45,703.684 232.03,703.684C229.609,703.684 227.519,703.25 225.756,702.38C223.992,701.509 222.54,700.36 221.399,698.933C220.259,697.506 219.429,695.888 218.91,694.077C218.392,692.267 218.132,690.421 218.132,688.542C218.132,686.662 218.392,684.817 218.91,683.007C219.429,681.197 220.259,679.578 221.399,678.15C222.54,676.724 223.992,675.575 225.756,674.705C227.519,673.835 229.609,673.399 232.03,673.399C234.45,673.399 236.542,673.835 238.305,674.705C240.068,675.575 241.52,676.724 242.661,678.15C243.802,679.578 244.632,681.197 245.15,683.007C245.669,684.817 245.928,686.662 245.928,688.542C245.928,690.421 245.669,692.267 245.15,694.077Z' style='fill:rgb(35,31,32);fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(4.16667,0,0,4.16667,-552.913,-2626.12)'%3E%3Cpath d='M200.37,678.325C199.056,675.25 197.241,672.621 194.925,670.443C192.607,668.265 189.877,666.571 186.731,665.361C183.584,664.152 180.179,663.546 176.515,663.546C172.849,663.546 169.445,664.152 166.299,665.361C163.152,666.571 160.421,668.265 158.106,670.443C155.788,672.621 153.973,675.25 152.66,678.325C151.346,681.403 150.69,684.808 150.69,688.542C150.69,692.275 151.346,695.682 152.66,698.758C153.973,701.835 155.788,704.462 158.106,706.64C160.421,708.818 163.152,710.513 166.299,711.722C169.445,712.931 172.849,713.537 176.515,713.537C180.179,713.537 183.584,712.931 186.731,711.722C189.877,710.513 192.607,708.818 194.925,706.64C197.241,704.462 199.056,701.835 200.37,698.758C201.683,695.682 202.341,692.275 202.341,688.542C202.341,684.808 201.683,681.403 200.37,678.325ZM189.635,694.077C189.117,695.888 188.287,697.506 187.146,698.933C186.005,700.36 184.553,701.509 182.79,702.38C181.027,703.25 178.935,703.684 176.515,703.684C174.094,703.684 172.004,703.25 170.24,702.38C168.477,701.509 167.025,700.36 165.884,698.933C164.743,697.506 163.914,695.888 163.395,694.077C162.877,692.267 162.617,690.421 162.617,688.542C162.617,686.662 162.877,684.817 163.395,683.007C163.914,681.197 164.743,679.578 165.884,678.15C167.025,676.724 168.477,675.575 170.24,674.705C172.004,673.835 174.094,673.399 176.515,673.399C178.935,673.399 181.027,673.835 182.79,674.705C184.553,675.575 186.005,676.724 187.146,678.15C188.287,679.578 189.117,681.197 189.635,683.007C190.154,684.817 190.413,686.662 190.413,688.542C190.413,690.421 190.154,692.267 189.635,694.077Z' style='fill:white;fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(4.16667,0,0,4.16667,-552.913,-2626.12)'%3E%3Cpath d='M204.217,708.228L185.658,726.787L204.217,754.255L222.775,726.787L204.217,708.228Z' style='fill:white;fill-rule:nonzero;'/%3E%3C/g%3E%3C/svg%3E%0A");
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
          <button disabled="" part="button">
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
          <button disabled="" part="button">
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
          <button aria-label="${owllyMock.title}" part="button">
            <div aria-hidden="" class="logo"></div>
            <slot>sign</slot>
          </button>
          <a aria-hidden="true" href="https://owly.ch${owllyMock.link}" rel="noopener noreferrer" target="_blank"></a>
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
          <button disabled="" part="button">
            <div aria-hidden="" class="logo"></div>
            <slot>sign</slot>
          </button>
        </mock:shadow-root>
      </owlly-collect>
    `);
  });
});
