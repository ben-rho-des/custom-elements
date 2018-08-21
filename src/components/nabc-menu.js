import { LitElement, html } from "@polymer/lit-element/";

class NabcMenu extends LitElement {

  static get observedAttributes() {
    return ["data-collection"]; // https://github.com/Polymer/lit-element/issues/29
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }

  _render() {
    let links = html`${JSON.parse(this["data-collection"]).map(item => html`<li><a href="${item.href}" title="${item.title}">${item.label}</a></li>`)}`;
    return html`
            <style>
            .menu-section {
                background-color: #272727;
                height: 60px;
            }
            .container {
                height: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
            }
            .main-menu {
                display: flex;
                margin: 0;
                padding: 0;
                height: 100%;
            }
            li {
                display: flex;
            }
            li > a {
                color: #fff;
                font-size: 14px;
                padding: 0 40px 0 25px;
                font-weight: 400;
                cursor: pointer;
                position: relative;
                display: flex;
                align-items: center;
            }
            li > a:after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 0;
                transition: height .2s ease-out;
            }
            li>a:focus:after, li>a:hover:after {
                background-color: #c20000;
                height: 3px;
            }
            </style>
			<div class="menu-section">
                <div class="container">
                    <ul class="main-menu">
                        ${links}
                    </ul>
                </div>
            </div>
		`;
  }
}

customElements.define("nabc-menu", NabcMenu);
