
(function () {
    let howtoPanelCounter = 0;

    class HowtoPanel extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.setAttribute('role', 'tabpanel');
            if (!this.id)
                this.id = `howto-panel-generated-${howtoPanelCounter++}`;
        }
    }
    customElements.define('howto-panel', HowtoPanel);
})();

module.exports.HowToPanel;
