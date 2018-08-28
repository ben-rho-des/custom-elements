import { LitElement, html } from "@polymer/lit-element/";
import { render } from "lit-html";

class NabcListItemIcon extends LitElement {
  static get properties() {
    return {
        label: String,
        icon: String
    };
  }

  constructor() {
    super();
  }

  _render({label, icon}) {
    return html`
        <style>
        li {
            border: 1px solid #FF5733;
            height: 40px;
            display: flex;
            align-items: center;
            border-radius: 5px;
            background: rgba(255, 87, 51, 0.1);
            justify-content: center;
            box-sizing: border-box;
        }
        </style>
        <li><span>${icon}</span>${label}</li>
	`;
  }
}

customElements.define("nabc-icon-list-item", NabcListItemIcon);
