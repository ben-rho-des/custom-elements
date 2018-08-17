(function(document) {
  const template = document.createElement("template");
  template.innerHTML = `
        <style>
            .nab-dropdown__container {
                display: none;
            }
            .is-open .nab-dropdown__container {
                display: block;
            }
            .nab-dropdown__button {
                border: 0;
                background: red;
                color: white;
                font-weight: bold;
            }
        </style>
        <div class="nab-dropdown">
            <button class="nab-dropdown__button">dropdown</button>
            <div class="nab-dropdown__container">
                <slot name="content-pre"></slot>
                <slot name="content"></slot>
                <slot name="content-post"></slot>
            </div>
        </div>
    `;

  // Creates an object based in the HTML Element prototype
  class NabDropdown extends HTMLElement {
    constructor() {
        super();


    }

    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this._root = this.shadowRoot.querySelector(".nab-dropdown");

        this._container = this.shadowRoot.querySelector(".nab-dropdown__container");
        this._contentSlot = this.shadowRoot.querySelector("slot[name=content]");

        this._toggleButton = this.shadowRoot.querySelector(".nab-dropdown__button");

        this._isOpen = false;

        this._toggleButton.addEventListener("click", this._onClick.bind(this));
    }

    disconnectedCallback() {
        this._toggleButton.removeEventListener("click", this._onClick);
    }

    _onClick(){

        this._isOpen = !this._isOpen;
        const stateClass = this._isOpen ? 'is-open' : '';
        //   console.log(stateClass, this.shadowRoot);
        this._root.className = `${stateClass}`;
    }
  }
  // Define the new custom Element
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
  customElements.define("nab-dropdown", NabDropdown);
})(document);

module.exports.NabDropdown;
