import { LitElement, html } from "@polymer/lit-element/";
import { render } from "lit-html";

class NabcHeader extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  _render() {
    return html`
        <style>
        .nabc-header {
          font-family: var(--font-family-base);
          position: relative;
          z-index: 333;
        }
        .nabc-header__logo {
          order: 1;
          width: 140px;
        }
        .nabc-header__logo img
          width: 140px;
          margin-left: -3px;
        }
        .nabc-header__logo a {
          display: block;
        }
        .nabc-header__heading {
          font-family: var(--fony-family-headline);
          color: var(--white);
          text-transform: uppercase;
          margin: 0 0 0 25px;
          display: flex;
          font-size: var(--h2-font-size);
          order: 2;
          padding-top: 5px;
        }
        .nabc-header__accessibility-access {
          align-items: center;
          display: flex;
          order: 3;
        }
        .nabc-header__accessibility-access a {
          color: #000;
          cursor: pointer;
          position: absolute;
          height: 1px;
          width: 1px;
          overflow: hidden;
          clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: polygon(0px 0px, 0px 0px,0px 0px, 0px 0px);
          align-items: center;
        }
        .nabc-header__accessibility-access a:focus,
        .nabc-header__accessibility-access a:active,
        .nabc-header__accessibility-access a:focus:hover {
          font-size: var(--font-size-sm);
          font-family: var(--font-family-base);
          cursor: pointer;
          color: var(--white);
          padding: 0 3px;
          text-decoration: none;
          height: 60px;
          top: 3px;
          clip-path: none;
          clip: auto;
          width: auto;
          display: flex;
          margin: 0 15px;
        }
        .nabc-header__banner {
          background: var(--black);
          height: var(--header-height);
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          margin-right: auto;
          margin-left: auto;
          padding-left: 15px;
          padding-right: 15px;
          max-width: 980px;
        }
        .nabc-header__link-section {
          display: flex;
          flex: 1;
          justify-content: flex-end;
          margin: 0 15px 0 0;
          order: 4;
          height: 60px;
        }
        .nabc-header__link-section:after {
          content: '';
          display: block;
        }
        </style>
        <div class="nabc-header">
          <slot name="before"></slot>
          <div class="nabc-header__banner">
            <div class="container">
              <div class="nabc-header__accessibility-access">
                <a href="#content" tabindex="1" accesskey="1" skip-to-content="">Skip to Content</a>
              </div>
              <div class="nabc-header__logo">
                  <img src="/assets/images/nab-logo.svg?v=20180824132611" alt="NAB Logo" width="140" height="40">
              </div>

              <span class="nabc-header__heading">NAB Connect</span>

              <ul class="nabc-header__link-section">
                <slot name="user-menu"></slot>
              </ul>
            </div>
          </div>
          <slot name="after"></slot>
        </div>
	`;
  }
}

customElements.define("nabc-header", NabcHeader);
