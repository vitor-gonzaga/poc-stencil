import { r as registerInstance, h } from './index-569e9931.js';

const childComponentCss = ":host{display:block}";

const ChildComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("father-component", { color: "red" })));
  }
};
ChildComponent.style = childComponentCss;

export { ChildComponent as child_component };
