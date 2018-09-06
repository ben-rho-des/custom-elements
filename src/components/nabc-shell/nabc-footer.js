import { LitElement, html } from '@polymer/lit-element/';

class NabcFooter extends LitElement {
  static get properties() {
    return {
      copyright: {
        type: String
      },
      text: {
        type: String
      }
    };
  }

  constructor() {
    super();

    //defaults
    this.copyright = "© National Australia Bank Limited.";
    this.text = "Use of the information contained on this page is governed by Australian Law and is subject to the disclaimers which can be read on the disclaimer page.";
  }

  _render() {
    return html`
        <style>
        .nabc-footer {
            background-color: var(--black);
            font-family: var(--font-family-base);
            height: 160px;
            width: 100%;
            color: #fff;
            min-width: 980px;
        }
        .nabc-footer .copy {
            font-weight: var(--font-weight-semi-bold);
            font-size: var(--font-size-base);
            line-height: var(--font-size-base);
            margin-bottom: 5px;
        }
        .nabc-footer p {
            font-size: 13px;
            line-height: 15px;
            margin: 0;
            text-align: center;
        }
        .nabc-footer p:not(.copy) {
            max-width: 450px;
        }
        .container {
            max-width: 982px;
            margin-right: auto;
            margin-left: auto;
            padding-left: 15px;
            padding-right: 15px;
            justify-content: center;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        </style>
        <div class="nabc-footer">
                <slot name="before"></slot>
                <div class="container">
                    <p class="copy">${this.copyright}</p>
                    <p>${this.text}</p>
                </div>
                <slot name="after"></slot>
        </div>
		`;
  }
}

customElements.define("nabc-footer", NabcFooter);