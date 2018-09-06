import { LitElement, html } from "@polymer/lit-element/";
import { render } from "lit-html";
import * as iconHelper from './icon-helper';

class NabIcon extends LitElement {
  static get properties() {
    return {
      icon: String,
      color: String,
      reversed: Boolean,
      bg: String,
      size: String
    };
  }

  constructor() {
    super();
    this.color = "#000000";
    this.reversed = false;
    this.bg = "transparent";
    this.size = "24";
  }

  _render(props) {
    return html`
    <style>
    .txn-icon {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
    }
    .txn-icon svg #icon {
      fill: ${props.color};
    }
    .txn-icon {
      background-color: ${props.bg};
      border-radius: 50%;
    }
    </style>
    <span class$="txn-icon txn-icon--${props.icon}">
      ${iconHelper.getTemplate(props)}
    </span>
	`;
  }
}

customElements.define("nab-icon", NabIcon);
