import { LitElement, html } from '@polymer/lit-element/';

import './components/home-page.js';

import "./components/nabc-header.js";
import "./components/nabc-footer.js";
import "./components/nabc-menu.js";

import { AppStyles } from './styles/AppStyles';

class LitApp extends LitElement {

	_firstRendered(){

	}

	_render() {
		return html`
			${AppStyles}

			<div class="app">
				<nabc-header>
					<nabc-menu slot='content-post' data-collection='[{"title":"Click here to view the disclaimer page", "label": "Disclaimer", "href": "http://www.nab.com.au/wps/wcm/connect/nab/nab/home/About_Us/9/6"},{"title":"Click here to view the NAB privacy policy page", "label": "Privacy policy", "href": "http://www.nab.com.au/wps/wcm/connect/nab/nab/home/about_us/10/1"},{"title":"Click here to view contact information", "label": "Contact us", "href": "https://www.nab.com.au/nabc-content/nab-connect-help/"},{"label": "Loan calculators", "href": "https://www.nab.com.au/business/calculators"},{"label": "Currency conversion", "href": "https://www.nab.com.au/personal/international/foreign-exchange-rates#/calculator"}]'></nabc-menu>
				</nabc-header>

				<div class="app-content">
					<home-page></home-page>
				</div>

				<nabc-footer copyright="© National Australia Bank Limited." text="Use of the information contained on this page is governed by Australian Law and is subject to the disclaimers which can be read on the disclaimer page.">
					<nabc-menu slot='footer-pre' data-collection='[{"title":"Click here to view the disclaimer page", "label": "Disclaimer", "href": "http://www.nab.com.au/wps/wcm/connect/nab/nab/home/About_Us/9/6"},{"title":"Click here to view the NAB privacy policy page", "label": "Privacy policy", "href": "http://www.nab.com.au/wps/wcm/connect/nab/nab/home/about_us/10/1"},{"title":"Click here to view contact information", "label": "Contact us", "href": "https://www.nab.com.au/nabc-content/nab-connect-help/"},{"label": "Loan calculators", "href": "https://www.nab.com.au/business/calculators"},{"label": "Currency conversion", "href": "https://www.nab.com.au/personal/international/foreign-exchange-rates#/calculator"}]'></nabc-menu>
				</nabc-footer>
			</div>
		`;
	}
}

customElements.define('lit-app', LitApp);
