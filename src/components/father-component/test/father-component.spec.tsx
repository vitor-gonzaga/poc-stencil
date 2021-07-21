import { newSpecPage } from '@stencil/core/testing';
import { FatherComponent } from '../father-component';

describe('father-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FatherComponent],
      html: `<father-component></father-component>`,
    });
    expect(page.root).toEqualHtml(`
      <father-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </father-component>
    `);
  });
});
