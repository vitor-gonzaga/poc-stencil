import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'web-button',
  styleUrl: 'web-button.css',
  shadow: true,
})
export class WebButtonComponent {
  /**
   * Button name
   */
  @Prop() buttonName: string = 'teste';

  render() {
    return (<div>
      <button class="button">{this.buttonName}</button>
    </div>);
  }
}
