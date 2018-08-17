(function(document) {
  const template = document.createElement("template");
  template.innerHTML = `
        <ul class="nab-list">

        </ul>
    `;

  // Creates an object based in the HTML Element prototype
  class NabList extends HTMLElement {
    constructor() {
      super();
      this._list = '';
    }

    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this._list = this.shadowRoot.querySelector(".nab-list");
      this._collection = JSON.parse(this.dataset.collection);
      console.log(this._collection)
      const list = this._collection.map(item => `<li>${item.label}</li>`).join(" ");
      console.log(list)
      this._list.innerHTML = list;
    }

  }
  // Define the new custom Element
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
  customElements.define("nab-list", NabList);
})(document);

module.exports.NabList;
