import { LitElement, html } from '@polymer/lit-element/';
import { render } from "lit-html";

import './components/home-page.js';
import './components/nabc-header.js';
import './components/nabc-footer.js';
import './components/nabc-menu.js';
import './components/nab-icon';
import "./components/nabc-list/nabc-list.js";
import "./components/nabc-list/nabc-icon-listitem.js";
import "./components/nabc-list/nabc-advanced-listitem.js";

import { AppStyles } from './styles/AppStyles';

class LitApp extends LitElement {
  _createRoot() {
    return this;
  }

  _applyRender(result, node) {
    render(result, node);
  }

  _firstRendered() {

  }

  _render() {


    return html`
			${AppStyles}

			<a href="javascript:;">
			<nabc-icon icon="car-loan">
				<div slot="content">some custom content <b>hi</b></div>
			</nabc-icon></a>


			<nabc-list containerHeight="200">
				<nabc-icon-list-item label="thing" icon="boat"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing2" icon="boat2"></nabc-icon-list-item>
				<!--<nabc-advanced-list-item label="<p>hello there <div><h3>title</h3></div></p>"></nabc-advanced-list-item>-->
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing3" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing4" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing5" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing6" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing7" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing8" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing9" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing10" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing11" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing12" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing13" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing14" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing15" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing16" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing17" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing18" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing19" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing20" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing21" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing22" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing23" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing24" icon="boat3"></nabc-icon-list-item>
				<nabc-icon-list-item label="thing25" icon="boat3"></nabc-icon-list-item>
			</nabc-list>

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
