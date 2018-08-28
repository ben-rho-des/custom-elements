import { LitElement, html } from "@polymer/lit-element/";
import { render } from "lit-html";

class NabcHeader extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

//   _createRoot() {

//     return this.attachShadow({ mode: "open" });
//   }

//   _applyRender(result, node) {
//     render(result, node);
//   }

  _render() {
    return html`
        <style>
        </style>
        <div class="nabc-header">
            <slot name="content-pre"></slot>
            <p>header</p>
            <slot name="content-post"></slot>
        </div>
	`;
  }
}

customElements.define("nabc-header", NabcHeader);
