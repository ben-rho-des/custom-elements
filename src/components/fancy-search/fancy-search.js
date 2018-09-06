import { LitElement, html } from '@polymer/lit-element/';

// should come from config file... not base
import { variables } from "../../styles/BaseVariables";

export const ENTER_KEY = 13;
export const ESC_KEY = 27;

class FancySearch extends LitElement {
  static get properties() {
    return {
      selected: Object,
      items: Array,
      itemTemplateProps: Object,
      itemTemplate: String,
      filterText: String,
      open: Boolean,
      listPXHeight: Number,
      placeholder: String,
      searchPlaceholder: String
    };
  }

  constructor() {
    super();
    this.items = [];
    this.itemTemplateProps = [];
    this.itemTemplate = 'default';
    this.selected = undefined;
    this.filterText = "";
    this.placeholder = "";
    this.searchPlaceholder = "";
    this.open = false;
  }

  _propertiesChanged(props, changed, oldProps) {
    if (changed && changed.open == true) {
      setTimeout(
        () =>
          this.shadowRoot.querySelector(".nab-select__search input").focus(),
        0
      );
    }
    super._propertiesChanged(props, changed, oldProps); //This is needed here
  }

  _firstRendered() {
    const compare = (item1, item2) =>
      item1.title < item2.title ? -1 : item1.title == item2.title ? 0 : 1;
    this.items.sort(compare);
  }

  filterItem(item) {
    return item.title.contains(this.filterText);
  }

  selectItem(item) {
    this.selected = item;
    this.resetFilterText();
    this.dispatchEvent(
      new CustomEvent("select", {
        bubbles: true,
        composed: true,
        detail: { value: this.selected }
      })
    );
  }

  resetFilterText() {
    this.filterText = "";
    this.open = false;
    this.shadowRoot.querySelector(".nab-select__toggle button").focus();
  }

  inputFilterText({ target }) {
    const value = target.value.trim();
    this.filterText = value;
    this.dispatchEvent(
      new CustomEvent("filter", {
        bubbles: true,
        composed: true,
        detail: { value: this.filterText }
      })
    );
  }

  keydownFilterText({ keyCode }) {
    if (keyCode === ESC_KEY) {
      this.resetFilterText();
    }
  }

  checkIfShouldClose() {
    if (this._shouldClose) {
      this.open = false;
    }
  }

  dropdownFocusOut(e) {
    this._shouldClose = true;
    //increase timeout if required...
    setTimeout(this.checkIfShouldClose.bind(this));
  }

  clearSelected(e) {
    this.selected = undefined;
  }

  itemFocusIn(e) {
    this._shouldClose = false;
  }

  toggleDropdown() {
    this.open = !this.open;
  }

  createItem(type, item) {
    switch (type) {
      case "icon":
        return html`
            <button class="nab-select__dropdown-item nab-select__dropdown-item--icon"
              on-click="${e => this.selectItem(item)}"
              on-focus="${e => this.itemFocusIn(e)}"
            >
              <nab-icon icon="${item.icon}" color="${variables.primary}"></nab-icon>
              ${item.title}
            </button>
          `;
      case "href":
        return html`
            <a class="nab-select__dropdown-item"
              href="${item.href}"
            >
              ${item.title}
            </a>
          `;
      default:
        return html`
            <button class="nab-select__dropdown-item"
              on-click="${e => this.selectItem(item)}"
              on-focus="${e => this.itemFocusIn(e)}"
            >
              ${item.title}
            </button>
          `;
    }
  }

  _render() {
    return html`
      ${this.renderStyles()}
      <div class="nab-select">
      ${this.renderBasic()}
      <div class="nab-select__dropdown"
        style="display: ${(this.open === true) ? "block" : "none"}"
        on-focusout="${e => this.dropdownFocusOut(e)}"
        >
          ${this.renderSearch()}
          <ul>
          ${this.renderDropdownList()}
          </ul>
      </div>
      </div>
    `;
  }

  renderStyles() {
    const ddownPad = 5;
    const toggleButtonHeight = 40;
    return html`
    <style>
        :host {
            width: auto;
            font-family: 'Source Sans Pro';
        }
        input, button {
          font-family: inherit;
        }
        :focus { outline: 1px solid var(--focus-color); }
        .nab-select {
            position: relative;
            margin-bottom: 20px;
        }
        .nab-select__toggle-button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid var(--grey-medium-light);
            border-radius: var(--border-radius);
            padding: 5px;
            background: none;
            width: 100%;
            height: ${toggleButtonHeight}px;
            cursor: pointer;
        }
        .nab-select__toggle-button span {
          flex-grow: 1;
          text-align: left;
        }
        .nab-select__dropdown {
            box-sizing: border-box;
            margin: 0px auto 0px auto;
            position: absolute;
            z-index: 1;
            width: 100%;
            border-radius: var(--border-radius);
            top: 0;
        }
        .nab-select__dropdown::after {
            width: 100%;
            content: '';
            box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
            background: white;
            position: absolute;
            top: 0;
            height: calc(100% - ${toggleButtonHeight - ddownPad}px);
            border-radius: 0px 0px var(--border-radius) var(--border-radius);
            z-index: -1;
            margin-top: ${toggleButtonHeight - ddownPad}px;
            box-sizing: border-box;
        }
        .nab-select__search {
            height: ${toggleButtonHeight}px;
        }
        .nab-select__search input {
            height: 100%;
            width: 100%;
            padding: 5px;
            box-sizing: border-box;
            margin-bottom: 10px;
            border-radius: var(--border-radius);
            border: 1px solid var(--grey-medium-light);
        }
        .nab-select__search input:focus {
            outline: 0;
            border: 1px solid var(--focus-color);
        }
        .nab-select__search__icon {
            position: absolute;
            right: ${ddownPad}px;
            top: ${ddownPad}px;
            pointer-events: none;
        }
        .nab-select__toggle-clear {
            position: absolute;
            right: 40px;
            top: 5px;
            height: 30px;
            border: 0;
            background: none;
            padding: 0;
            cursor: pointer;
        }
        .nab-select__dropdown ul {
            margin: 0;
            padding: 0;
            list-style: none;
            height: ${this.listPXHeight}px;
            overflow-y: scroll;
        }
        .nab-select__dropdown-item {
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            border: 1px solid transparent;
            border-bottom-color: var(--grey-medium-light);
            background: transparent;
            cursor: pointer;
            font-family: inherit;
        }
        .nab-select__dropdown-item:focus {
          outline: 0;
          border: 1px solid var(--focus-color);
        }
        .nab-select__dropdown-item--icon {
          height: 40px;
        }
        .nab-select__dropdown-item--icon nab-icon {
          margin-right: 10px;
        }
    </style>
    `;
  }

  renderSearch() {
    return html`
      <div class="nab-select__search">
          <input
              on-input="${e => this.inputFilterText(e)}"
              on-keydown="${e => this.keydownFilterText(e)}"
              on-focus="${e => this.itemFocusIn(e)}"
              type="text"
              placeholder="${this.searchPlaceholder}"
          >
          <span class="nab-select__search__icon">
              <nab-icon icon="search"></nab-icon>
          </span>
      </div>
    `;
  }

  renderBasic() {
    return html`
      <div class="nab-select__toggle" on-click="${() => this.toggleDropdown()}">
          <button class="nab-select__toggle-button" on-focus="${e => this.itemFocusIn(e)}">
              ${this.selected ? html`
                <nab-icon icon="${this.selected.icon}" color="${variables.primary}"></nab-icon>
                <span>${this.selected.title}</span>` : html`
                <span>${this.placeholder}</span>
                `}
              <nab-icon icon="chevron_down" color="${variables.greyMedium}"></nab-icon>
          </button>
      </div>
      ${this.selected ? html`<button class="nab-select__toggle-clear" on-click="${() => this.clearSelected()}">
            <nab-icon icon="close" size="15"></nab-icon>
          </button>` : ""}
      `;
  }

  renderDropdownList() {
    const filterText = this.filterText.toLowerCase();
    const list = this.items
      .filter(
        (item, idx) =>
          item.title && item.title.toLowerCase().includes(filterText)
      )
      .map(
        item =>
          html`<li>${this.createItem(
            this.itemTemplate,
            item,
            this.itemTemplateProps
          )}</li>`
      );
    return list;
  }
}

customElements.define('fancy-search', FancySearch);


