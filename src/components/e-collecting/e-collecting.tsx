import {Component, h, Host, Prop, State, Watch, Element} from '@stencil/core';

import {injectCSS} from '../helpers/owlly.utils';

import {translate} from '../helpers/translations.utils';
import {Logo} from '../styles/logo';

/**
 * @slot - A custom text to be displayed in the button. Per default "sign" translated in de, fr, it or en according browser lang.
 * @part button - The part attribute to access the button
 */
@Component({
  tag: 'owlly-collect',
  styleUrl: 'e-collecting.scss',
  shadow: true,
})
export class ECollecting {
  @Element() el: HTMLElement;

  /**
   * The ID to be provided to Owlly in order to load the initiative and other content for navigation.
   */
  @Prop()
  owllyId: string;

  /**
   * Style the button with a dark or light theme?
   */
  @Prop({reflect: true})
  mode: 'dark' | 'light' = 'light';

  /**
   * IntersectionObserver rootMargin property.
   */
  @Prop()
  observerRootMargin: string = '640px 0px';

  /**
   * IntersectionObserver threshold property.
   */
  @Prop()
  observerThreshold: number | number[] = 0.25;

  @State()
  private logo: boolean = false;

  // TODO: Likewise as fetch config, constant?
  private baseUrl: string = 'https://owlly.ch/start/';

  private anchor!: HTMLAnchorElement;

  private observer: IntersectionObserver;

  async componentWillLoad() {
    await this.initOwlly();
  }

  @Watch('owllyId')
  async onOwllyIdChange() {
    await this.initOwlly();
  }

  private async initOwlly() {
    if (window && 'IntersectionObserver' in window) {
      await this.deferLoad();
    } else {
      await this.load();
    }
  }

  private async deferLoad() {
    this.observer = new IntersectionObserver(this.onIntersection, {
      rootMargin: this.observerRootMargin,
      threshold: this.observerThreshold,
    });

    this.observer.observe(this.el.shadowRoot.host);
  }

  private onIntersection = async (entries: IntersectionObserverEntry[]) => {
    if (!entries || entries.length <= 0) {
      return;
    }

    await this.handleIntersection(entries[0]);
  };

  private async handleIntersection(entry: IntersectionObserverEntry) {
    if (entry.isIntersecting) {
      if (this.observer) {
        this.observer.disconnect();
      }

      await this.load();
    }
  }

  private async load() {
    await this.loadGoogleFont();

    this.logo = true;
  }

  private async loadGoogleFont() {
    await injectCSS('owlly-font-lato', 'https://fonts.googleapis.com/css?display=swap&family=Lato:wght@700');
  }

  private navigate() {
    if (this.owllyId === undefined) {
      return;
    }

    if (!this.anchor) {
      return;
    }

    this.anchor.click();
  }

  render() {
    return (
      <Host>
        {this.logo ? <Logo mode={this.mode}></Logo> : undefined}
        <button disabled={this.owllyId === undefined} onClick={() => this.navigate()} aria-label={translate('sign')} part="button">
          <div class="logo" aria-hidden={true} />
          <slot>{translate('sign')}</slot>
        </button>
        {this.renderLink()}
      </Host>
    );
  }

  private renderLink() {
    if (this.owllyId === undefined) {
      return undefined;
    }

    return (
      <a
        ref={(el) => (this.anchor = el as HTMLAnchorElement)}
        href={`${this.baseUrl}${this.owllyId}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden="true"></a>
    );
  }
}
