import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'father-component',
  styleUrl: 'father-component.css',
  shadow: true,
})
export class FatherComponent {

  @Prop() color: string = 'blue';

  render() {
    return (
      <div>My favorite color is {this.color}</div>
    );
  }

}
