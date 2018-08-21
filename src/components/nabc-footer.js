import { LitElement, html } from '@polymer/lit-element/';

class NabcFooter extends LitElement {
  static get properties() {
    return {
      copyright: {
        type: String,
        value: "© National Australia Bank Limited."
      },
      text: {
        type: String,
        value: "Use of the information contained on this page is governed by Australian Law and is subject to the disclaimers which can be read on the disclaimer page."
      }
    };
  }

  constructor() {
    super();
  }

  _render() {
    return html`
        <style>
        .nabc-footer {
            background-color: #000;
            height: 160px;
            width: 100%;
            color: #fff;
            min-width: 982px;
        }
        .nabc-footer .content-section {
            height: 100px;
        }
        .nabc-footer .copy {
            font-family: SourceSansSemibold,Helvetica,Arial,sans-serif;
            font-size: 16px;
            line-height: 16px;
            margin-bottom: 5px;
        }
        .nabc-footer p {
            line-height: 15px;
            margin: 0;
            text-align: center;
        }
        .nabc-footer p:not(.copy) {
            font-size: .875rem;
            max-width: 450px;
        }
        .container {
            max-width: 982px;
            margin-right: auto;
            margin-left: auto;
            padding-left: 15px;
            padding-right: 15px;
            justify-content: center;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        </style>
        <div class="nabc-footer">
            <div class="content-section">
                <slot name="footer-pre"></slot>
                <div class="container">
                    <p class="copy">${this.copyright}</p>
                    <p>${this.text}</p>
                </div>
                <slot name="footer-post"></slot>
            </div>
        </div>
		`;
  }
}

customElements.define("nabc-footer", NabcFooter);