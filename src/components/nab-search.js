(function(document) {
  const template = document.createElement("template");
  template.innerHTML = `
        <label>Search:</label><input type="text" />
    `;

  // Creates an object based in the HTML Element prototype
  class NabSearch extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  // Define the new custom Element
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
  customElements.define("nab-search", NabSearch);
})(document);

module.exports.NabSearch;
