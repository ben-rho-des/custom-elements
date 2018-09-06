import { LitElement, html } from "@polymer/lit-element/";

class NabcIAA extends LitElement {
  static get properties() {
    return {};
  }
  constructor() {
    super();
  }

  _render(props) {
    return html`
        <style>

        </style>
        <p>IAA</p>
    `;
  }
}

customElements.define("nabc-iaa", NabcIAA);
