import { Component, h } from '@stencil/core';

@Component({
  tag: 'child-component',
  styleUrl: 'child-component.css',
  shadow: true,
})
export class ChildComponent {

  render() {
    return (
      <div>
        <father-component color="red"></father-component>
      </div>
    );
  }

}
