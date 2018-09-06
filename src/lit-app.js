import { LitElement, html } from '@polymer/lit-element/';
import { render } from "lit-html";

import "./components/nabc-shell";
import './components/nab-icon';
import "./components/fancy-search";

import { AppStyles } from './styles/AppStyles';

class LitApp extends LitElement {
  _createRoot() {
    return this;
  }

  _render() {

    return html`
		${AppStyles}
		<nabc-header>
			<nabc-menu slot="after">
				<nabc-menu-item slot="item" href="/home" text="">
					<nab-icon slot="before" style="margin-left: 0" size="30" icon="home" color="#000000"></nab-icon>
				</nabc-menu-item>
				<nabc-menu-item slot="item" text="Products">
					<nabc-menu-item slot="first" href="/rewards" text="NAB Rewards"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/nabif" text="NAB Invoice Finance"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/transact" text="NAB Transact"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/tf" text="Trade Finance"></nabc-menu-item>

					<nab-icon slot="after" size="22" icon="chevron_down" color="#000000"></nab-icon>
				</nabc-menu-item>
				<nabc-menu-item slot="item" text="Admin">
					<h2 slot="first">Manage</h2>
					<nabc-menu-item slot="first" href="/amendments" text="Amendments"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/accounts" text="Accounts"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/perm" text="Users &amp; permissions"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/limits" text="Payment daily limits"></nabc-menu-item>

					<h2 slot="second">View</h2>
					<nabc-menu-item slot="second" href="/billing" text="Billing details"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/tax" text="Tax invoice"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/rules" text="Payment authorisation rules"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/log" text="Payment audit log"></nabc-menu-item>

					<nab-icon slot="after" size="22" icon="chevron_down" color="#000000"></nab-icon>
				</nabc-menu-item>
				<!--payments-->
				<nabc-menu-item slot="item" text="Accounts">
					<h2 slot="first">View</h2>
					<nabc-menu-item slot="first" href="/amendments" text="Account summary"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/amendments" text="Transaction history"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/amendments" text="Statements"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/amendments" text="Account details"></nabc-menu-item>

					<h2 slot="second">Reports</h2>
					<nabc-menu-item slot="second" href="/billing" text="Account balance history"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/billing" text="Account information file"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/billing" text="Merchant reports"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/billing" text="Set off reports"></nabc-menu-item>

					<nab-icon slot="after" size="22" icon="chevron_down" color="#000000"></nab-icon>
				</nabc-menu-item>

				<nabc-menu-item slot="item" text="Services">
					<h2 slot="first">Requests</h2>
					<nabc-menu-item slot="first" href="/amendments" text="Apply for a product"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/amendments" text="Secure messages"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/amendments" text="Service request"></nabc-menu-item>

					<h2 slot="second">Additional services</h2>
					<nabc-menu-item slot="second" href="/billing" text="Financial file transfer"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/billing" text="Term deposits"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/billing" text="Foreign exchange deals"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/billing" text="PayID register"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/billing" text="Vouchers (Cheque images)"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/billing" text="Stop cheques"></nabc-menu-item>
					<nabc-menu-item slot="second" href="/billing" text="Upload migration file"></nabc-menu-item>

					<nab-icon slot="after" size="22" icon="chevron_down" color="#000000"></nab-icon>
				</nabc-menu-item>

				<nabc-iaa slot="after"></nabc-iaa>
			</nabc-menu>

			<nabc-menu slot="user-menu" variation="dark">
				<nabc-menu-item slot="item" href="/home" text="My Settings"></nabc-menu-item>
				<nabc-menu-item slot="item" href="/home" text="Help"></nabc-menu-item>
				<nabc-menu-item slot="item" text="Contact us">
					<nabc-menu-item slot="first" href="/rewards" text="NAB Rewards"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/nabif" text="NAB Invoice Finance"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/transact" text="NAB Transact"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/tf" text="Trade Finance"></nabc-menu-item>

					<nab-icon slot="after" size="22" icon="chevron_down" color="#FFFFFF"></nab-icon>
				</nabc-menu-item>
				<nabc-menu-item slot="item" text="BENJO">
					<nabc-menu-item slot="first" href="/rewards" text="NAB Rewards"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/nabif" text="NAB Invoice Finance"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/transact" text="NAB Transact"></nabc-menu-item>
					<nabc-menu-item slot="first" href="/tf" text="Trade Finance"></nabc-menu-item>

					<nab-icon slot="after" size="22" icon="chevron_down" color="#FFFFFF"></nab-icon>
				</nabc-menu-item>
			</nabc-menu>
		</nabc-header>

		<fancy-search-demo></fancy-search-demo>

		<nab-icon icon="clock" color="#FFFFFF" bg="#cc0000"></nab-icon>
		<nab-icon icon="clock" color="#cc0000" bg="#000000"></nab-icon>
		<nab-icon icon="home" color="#cc0000" bg="#000000"></nab-icon>
		<nab-icon icon="chevron_right" color="#cc0000" bg="#000000"></nab-icon>

		<nab-icon icon="clock" color="#4B0082"></nab-icon>
		<nab-icon icon="clock" color="#0000FF"></nab-icon>
		<nab-icon icon="clock" color="#00FF00"></nab-icon>
		<nab-icon icon="clock" color="#FFFF00"></nab-icon>
		<nab-icon icon="clock" color="#FF7F00"></nab-icon>
		<nab-icon icon="clock" color="#CC0000"></nab-icon>
		<nab-icon icon="clock" color="#000000"></nab-icon>

		<nab-icon icon="home" color="#000000" size="15"></nab-icon>
		<nab-icon icon="home" color="#000000" size="20"></nab-icon>
		<nab-icon icon="home" color="#000000" size="25"></nab-icon>
		<nab-icon icon="home" color="#000000" size="30"></nab-icon>
		<nab-icon icon="home" color="#000000" size="35"></nab-icon>
		<nab-icon icon="home" color="#000000" size="40"></nab-icon>
		<nab-icon icon="home" color="#000000" size="45"></nab-icon>
		<nab-icon icon="home" color="#000000" size="50"></nab-icon>

		<nab-icon icon="atm" color="#4B0082"></nab-icon>
		<nab-icon icon="atm" color="#0000FF"></nab-icon>
		<nab-icon icon="atm" color="#00FF00"></nab-icon>
		<nab-icon icon="atm" color="#FFFF00"></nab-icon>
		<nab-icon icon="atm" color="#FF7F00"></nab-icon>
		<nab-icon icon="atm" color="#CC0000"></nab-icon>
		<nab-icon icon="atm" color="#000000"></nab-icon>

		<nab-icon icon="chevron_right" color="#4B0082"></nab-icon>
		<nab-icon icon="chevron_right" color="#0000FF"></nab-icon>
		<nab-icon icon="chevron_right" color="#00FF00"></nab-icon>
		<nab-icon icon="chevron_right" color="#FFFF00"></nab-icon>
		<nab-icon icon="chevron_right" color="#FF7F00"></nab-icon>
		<nab-icon icon="chevron_right" color="#CC0000"></nab-icon>
		<nab-icon icon="chevron_right" color="#000000"></nab-icon>

		<nab-icon icon="chevron_down" color="#4B0082"></nab-icon>
		<nab-icon icon="chevron_down" color="#0000FF"></nab-icon>
		<nab-icon icon="chevron_down" color="#00FF00"></nab-icon>
		<nab-icon icon="chevron_down" color="#FFFF00"></nab-icon>
		<nab-icon icon="chevron_down" color="#FF7F00"></nab-icon>
		<nab-icon icon="chevron_down" color="#CC0000"></nab-icon>
		<nab-icon icon="chevron_down" color="#000000"></nab-icon>

		<nab-icon icon="chevron_left" color="#4B0082"></nab-icon>
		<nab-icon icon="chevron_left" color="#0000FF"></nab-icon>
		<nab-icon icon="chevron_left" color="#00FF00"></nab-icon>
		<nab-icon icon="chevron_left" color="#FFFF00"></nab-icon>
		<nab-icon icon="chevron_left" color="#FF7F00"></nab-icon>
		<nab-icon icon="chevron_left" color="#CC0000"></nab-icon>
		<nab-icon icon="chevron_left" color="#000000"></nab-icon>

		<nab-icon icon="chevron_up" color="#4B0082"></nab-icon>
		<nab-icon icon="chevron_up" color="#0000FF"></nab-icon>
		<nab-icon icon="chevron_up" color="#00FF00"></nab-icon>
		<nab-icon icon="chevron_up" color="#FFFF00"></nab-icon>
		<nab-icon icon="chevron_up" color="#FF7F00"></nab-icon>
		<nab-icon icon="chevron_up" color="#CC0000"></nab-icon>
		<nab-icon icon="chevron_up" color="#000000"></nab-icon>

		<nabc-footer copyright="© National Australia Bank Limited." text="Use of the information contained on this page is governed by Australian Law and is subject to the disclaimers which can be read on the disclaimer page.">
			<nabc-menu slot="before" variation="dark">
				<nabc-menu-item slot="item"
					href="http://www.nab.com.au/wps/wcm/connect/nab/nab/home/About_Us/9/6"
					text="Disclaimer"
					title="Click here to view the disclaimer page"
				><nab-icon slot="after" size="22" icon="chevron_down" color="#ffffff"></nab-icon></nabc-menu-item>
				<nabc-menu-item slot="item"
					href="http://www.nab.com.au/wps/wcm/connect/nab/nab/home/about_us/10/1"
					text="Privacy policy"
					title="Click here to view the NAB privacy policy page"
				><nab-icon slot="after" size="22" icon="chevron_down" color="#ffffff"></nab-icon></nabc-menu-item>
				<nabc-menu-item slot="item"
					href="https://www.nab.com.au/nabc-content/nab-connect-help/"
					text="Contact us"
					title="Click here to view contact information"
				><nab-icon slot="after" size="22" icon="chevron_down" color="#ffffff"></nab-icon></nabc-menu-item>
				<nabc-menu-item slot="item"
					href="https://www.nab.com.au/business/calculators"
					text="Loan calculators"
				><nab-icon slot="after" size="22" icon="chevron_down" color="#ffffff"></nab-icon></nabc-menu-item>
				<nabc-menu-item slot="item"
					href="https://www.nab.com.au/personal/international/foreign-exchange-rates#/calculator"
					text="Currency conversion"
				><nab-icon slot="after" size="22" icon="chevron_down" color="#ffffff"></nab-icon></nabc-menu-item>
			</nabc-menu>
		</nabc-footer>
	`;
  }
}

customElements.define('lit-app', LitApp);
