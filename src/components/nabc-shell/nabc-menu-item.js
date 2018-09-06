import { LitElement, html } from "@polymer/lit-element/";

class NabcMenuItem extends LitElement {
  static get properties() {
    return {
      variation: String,
      text: String,
      href: String,
      title: String,
      hasChildren: Boolean,
      icon: String,
      open: Boolean
    };
  }
  constructor() {
    super();
    this.variation = "default"; //default : dark
    this.text = "Add a text prop to nabc-menu-item";
    this.href = "javascript:;";
    this.title = "";
    this.hasChildren = false;
    this.open = false;
  }

  _firstRendered() {
    this.hasChildren = this.querySelectorAll('[slot="first"').length > 0;
  }

  toggleDropdown(e) {
    if (this.hasChildren)
    this.open = !this.open;

    if (this.open) {
        let event = new Event("toggleOpen");
        this.dispatchEvent(event);
    }
  }

  close() {
      this.open = false;
  }

//<nab-icon size="22" icon="chevron_${chevronDirection}" color="${chevronColor}"></nab-icon>
  _render(props) {
    const href = this.hasChildren ? "javascript:;" : this.href;
    const cssClass = this.text == "" ? "nabc-menu-item nabc-menu-item--icon" : "nabc-menu-item";
    return html`
        <style>
        ::slotted(nab-icon) {
            margin-left: 5px;
            transition: all .3s ease;
        }
        li {
            display: flex;
            height: 100%;
            position: relative;
        }
        :host-context(.menu-section__drop-down-container) li {
            height: auto;
            text-align: left;
            display: block;
            border-bottom: 1px solid #eee;
        }
        :host-context(.menu-section__drop-down-container) a {
            box-sizing: border-box;
            text-decoration: none;
            display: block;
	        white-space: nowrap;
	        padding: 10px 20px;
		    border: 1px solid transparent;
        }
        :host-context(.menu-section__drop-down-container) a:hover {
            background-color: #f5f5f5;
            text-decoration: underline;
        }
        :host-context(.menu-section__drop-down-container) a:focus {
		    border: 1px solid var(--focus-color);
        }
        :host-context(.menu-section__drop-down-container) li>a:focus::after,
        :host-context(.menu-section__drop-down-container) li>a:hover::after {
            height: 0;
        }
        li > a {
            color: var(--black);
            font-size: 16px;
            padding: 0 15px 0 25px;
            font-weight: var(--font-weight-normal);
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            text-decoration: none;
        }
        li > a.nabc-menu-item--icon {
            padding: 0 15px;
        }
        .nabc-menu-item--icon nab-icon {
            margin-left: 0;
        }
        li > a::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0;
            transition: height .2s ease-out;
        }
        li>a::after {
            background-color: var(--primary);
        }
        li>a:focus::after,
        li>a:hover::after {
            height: 3px;
        }
        .menu-section__drop-down {
            animation-name: slideUp;
            animation-duration: .3s;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            display: none;
            position: absolute;
            bottom: 0;
            left: 0;
            background: #fff;
            padding: 0;
            box-shadow: 0 2px 5px rgba(0,0,0,.5);
            margin: 0;
            width: auto;
            z-index: -2;
            visibility: hidden;
        }
        .is-active ::slotted(nab-icon)  {
            transform: rotateZ(180deg);
        }
        li.is-active a::after {
            height: 3px;
        }
        .is-active .menu-section__drop-down {
            animation-name: slideDown;
            animation-duration: 0.3s;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
            -webkit-transform: translateY(100%);
            transform: translateY(100%);
            z-index: -1;
            visibility: visible;
            display: block;
        }
        @keyframes slideDown {
            from { transform: translateY(0) }
            to { transform: translateY(100%) }
        }
        @keyframes slideUp {
            from { transform: translateY(100%) }
            to { transform: translateY(0) }
        }
        .menu-section__drop-down-container {
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-radius: 3px;
            display: flex;
            width: auto;
        }
        .menu-section__drop-down-container ul {
            flex-shrink: 0;
            white-space: nowrap;
            padding: 0;
            margin: 0;
            list-style: none;
        }
        .menu-section__drop-down-container ul + ul {
            border-left: 1px solid #eee;
        }
        ::slotted(h2) {
            font-size: 1rem;
            padding-left: 20px;
        }
        :host([variation='dark']) li > a {
            color: var(--white);
            font-size: var(--font-size-sm);
        }
        </style>
        <li class$="${this.open ? "is-active" : ""}">
            <a class$="${cssClass}" href="javascript:;" title="${this.title}"
                on-click="${e => this.toggleDropdown(e)}">
                <slot name="before"></slot>
                ${this.text}
                <slot name="after"></slot>
            </a>
            ${this.hasChildren ? html`
                <div class="menu-section__drop-down">
                    <div class="menu-section__drop-down-container">
                        <ul><slot name="first"></slot></ul>
                        <ul><slot name="second"></slot></ul>
                    </div>
                </div>
            ` : ""}
        </li>
    `;
  }
}

customElements.define("nabc-menu-item", NabcMenuItem);
