import { LitElement, html } from "@polymer/lit-element/";

class NabcMenu extends LitElement {
  static get properties() {
    return {
      variation: String
    };
  }
  constructor() {
    super();
    this.variation = "default"; //default : dark
  }

  _getItems() {
      return [...this.querySelectorAll('[slot="item"')];
  }

  _firstRendered() {
    this._getItems().map(item => {
        item.setAttribute("variation", this.variation);
        item.addEventListener("toggleOpen", this.closeAllDropdowns.bind(this));
    });
  }

  closeAllDropdowns(e) {
    this._getItems().map(item => {
        if(e.target != item) {
            item.close();
        }
    });
  }

  _render(props) {
    const variation = "default" ? "menu-section" : "menu-section menu-section--" + props.variation;
    return html`
        <style>
        .menu-section {
            border-bottom: 1px solid #a3adb2;
            background-color: #f1f2f6;
            height: 60px;
        }
        .container {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 980px;
            margin: auto;
            flex-direction: row;
        }
        .main-menu {
            display: inline-flex;
            margin: 0;
            padding: 0;
            height: 100%;
        }
        .menu-section.menu-section--dark {
            background-color: var(--grey-darkest);
            border-bottom: 0;
        }
        .menu-section.menu-section--dark li > a {
            color: var(--white);
            font-size: var(--font-size-sm);
        }
        </style>
        <nav class$=${props.variation == "default" ? "menu-section" : "menu-section menu-section--" + props.variation}>
            <div class="container">
                <slot name="before"></slot>
                <ul class="main-menu">
                    <slot name="item"></slot>
                </ul>
                <slot name="after"></slot>
            </div>
        </nav>
    `;
  }
}

customElements.define("nabc-menu", NabcMenu);
