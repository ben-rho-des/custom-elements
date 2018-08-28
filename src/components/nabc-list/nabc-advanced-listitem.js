import { LitElement, html } from "@polymer/lit-element/";
import { render } from "lit-html";
import { unsafeHTML } from 'lit-html/lib/unsafe-html';

class NabcAdvancedListItem extends LitElement {
  static get properties() {
    return {
      label: String
    }
  }

  constructor() {
    super();
  }

  _render({ label }) {
    return html`
      <li><span></span>${unsafeHTML(label)}</li>
	`;
  }
}

customElements.define("nabc-advanced-list-item", NabcAdvancedListItem);
