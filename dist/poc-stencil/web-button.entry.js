import { r as registerInstance, h } from './index-569e9931.js';

const webButtonCss = ".button{color:rgb(255, 255, 255);background-color:rgb(53, 157, 255)}";

const WebButtonComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Button name
     */
    this.buttonName = 'teste';
  }
  render() {
    return (h("div", null, h("button", { class: "button" }, this.buttonName)));
  }
};
WebButtonComponent.style = webButtonCss;

export { WebButtonComponent as web_button };
