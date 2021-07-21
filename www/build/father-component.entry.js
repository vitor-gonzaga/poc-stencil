import { r as registerInstance, h } from './index-569e9931.js';

const fatherComponentCss = ":host{display:block}";

const FatherComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = 'blue';
  }
  render() {
    return (h("div", null, "My favorite color is ", this.color));
  }
};
FatherComponent.style = fatherComponentCss;

export { FatherComponent as father_component };
