import {Component, h, Host, Prop, State, Watch} from '@stencil/core';

import {Owlly} from '../types/owlly';

import {initOwlly} from '../helpers/utils';

@Component({
  tag: 'e-collecting',
  styleUrl: 'e-collecting.scss',
  shadow: true,
})
export class ECollecting {
  // TODO: ID is a reserved word. OwllyId or another idea?

  /**
   * The ID to be provided to Owlly in order to load the initiative and other content for navigation.
   */
  @Prop()
  owllyId: string;

  @State()
  private owlly: Owlly | undefined;

  private anchor!: HTMLAnchorElement;

  async componentWillLoad() {
    await this.initOwlly();
  }

  @Watch('owllyId')
  async onOwllyIdChange() {
    await this.initOwlly();
  }

  private async initOwlly() {
    this.owlly = await initOwlly(this.owllyId);
  }

  // TODO: Likewise as fetch config, constant?
  private baseUrl: string = 'https://owly.ch';

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
        <button disabled={this.owlly === undefined} onClick={() => this.navigate()} aria-label={this.owlly ? this.owlly.title : undefined}>
          <slot>e-Collecting</slot>
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
