import {Component, h} from '@stencil/core';

@Component({
  tag: 'e-collecting',
  styleUrl: 'e-collecting.scss',
  shadow: true,
})
export class ECollecting {
  render() {
    return (
      <button>
        <slot>e-Collecting</slot>
      </button>
    );
  }
}
