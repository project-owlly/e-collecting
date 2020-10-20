import {Component, h, Host, Prop, State, Watch, Element} from '@stencil/core';

import {Owlly} from '../types/owlly';

import {injectCSS, loadOwlly} from '../helpers/owlly.utils';

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

  // TODO: ID is a reserved word. OwllyId or another idea?

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
  observerRootMargin: string = '100px 0px';

  /**
   * IntersectionObserver threshold property.
   */
  @Prop()
  observerThreshold: number | number[];

  @State()
  private owlly: Owlly | undefined;

  @State()
  private logo: boolean = false;

  // TODO: Likewise as fetch config, constant?
  private baseUrl: string = 'https://owlly.ch';

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
    await Promise.all([this.loadOwlly(), this.loadGoogleFont()]);

    this.logo = true;
  }

  private async loadOwlly() {
    this.owlly = await loadOwlly(this.owllyId);
  }

  private async loadGoogleFont() {
    await injectCSS('owlly-font-lato', 'https://fonts.googleapis.com/css?display=swap&family=Lato:wght@700');
  }

  private navigate() {
    if (this.owlly === undefined) {
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
        <button disabled={this.owlly === undefined} onClick={() => this.navigate()} aria-label={this.owlly ? this.owlly.title : undefined} part="button">
          <div class="logo" aria-hidden={true} />
          <slot>{translate('sign')}</slot>
        </button>
        {this.renderLink()}
      </Host>
    );
  }

  private renderLink() {
    if (this.owlly === undefined) {
      return undefined;
    }

    return (
      <a
        ref={(el) => (this.anchor = el as HTMLAnchorElement)}
        href={`${this.baseUrl}${this.owlly.link}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden="true"></a>
    );
  }
}
