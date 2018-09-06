import { html } from "lit-html";

const fontDir = './assets/fonts/';

export class BaseTheme {
  constructor(variables) {
    this.variables = variables;
    this.cssVariables = this.cssVariables.bind(this);
  }

  cssVariables() {
    return html`
    <style>
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 300;
        src: url('${fontDir}source-sans-pro-v11-latin-300.eot'); /* IE9 Compat Modes */
        src: local('Source Sans Pro Light'), local('SourceSansPro-Light'),
            url('${fontDir}source-sans-pro-v11-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('${fontDir}source-sans-pro-v11-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
            url('${fontDir}source-sans-pro-v11-latin-300.woff') format('woff'), /* Modern Browsers */
            url('${fontDir}source-sans-pro-v11-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
            url('${fontDir}source-sans-pro-v11-latin-300.svg#SourceSansPro') format('svg'); /* Legacy iOS */
      }
      /* source-sans-pro-regular - latin */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        src: url('${fontDir}source-sans-pro-v11-latin-regular.eot'); /* IE9 Compat Modes */
        src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
            url('${fontDir}source-sans-pro-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('${fontDir}source-sans-pro-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('${fontDir}source-sans-pro-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
            url('${fontDir}source-sans-pro-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('${fontDir}source-sans-pro-v11-latin-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
      }
      /* source-sans-pro-italic - latin */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: italic;
        font-weight: 400;
        src: url('${fontDir}source-sans-pro-v11-latin-italic.eot'); /* IE9 Compat Modes */
        src: local('Source Sans Pro Italic'), local('SourceSansPro-Italic'),
            url('${fontDir}source-sans-pro-v11-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('${fontDir}source-sans-pro-v11-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
            url('${fontDir}source-sans-pro-v11-latin-italic.woff') format('woff'), /* Modern Browsers */
            url('${fontDir}source-sans-pro-v11-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
            url('${fontDir}source-sans-pro-v11-latin-italic.svg#SourceSansPro') format('svg'); /* Legacy iOS */
      }
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        src: url('${fontDir}sourcesanspro-semibold.eot'); /* IE9 Compat Modes */
        src: local('Source Sans Pro Semibold'), local('SourceSansPro-Semibold'),
            url('${fontDir}sourcesanspro-semibold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('${fontDir}sourcesanspro-semibold.woff2') format('woff2'), /* Super Modern Browsers */
            url('${fontDir}sourcesanspro-semibold.woff') format('woff'), /* Modern Browsers */
            url('${fontDir}sourcesanspro-semibold.ttf') format('truetype'), /* Safari, Android, iOS */
            url('${fontDir}sourcesanspro-semibold.svg#SourceSansPro') format('svg'); /* Legacy iOS */
      }
      /* source-sans-pro-700 - latin */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 700;
        src: url('${fontDir}source-sans-pro-v11-latin-700.eot'); /* IE9 Compat Modes */
        src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
            url('${fontDir}source-sans-pro-v11-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('${fontDir}source-sans-pro-v11-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
            url('${fontDir}source-sans-pro-v11-latin-700.woff') format('woff'), /* Modern Browsers */
            url('${fontDir}source-sans-pro-v11-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
            url('${fontDir}source-sans-pro-v11-latin-700.svg#SourceSansPro') format('svg'); /* Legacy iOS */
      }

      @font-face {
        font-family: 'Nab Impact';
        font-style: normal;
        font-weight: 400;
        src: url('${fontDir}nab_impact-webfont.eot'); /* IE9 Compat Modes */
        src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
            url('${fontDir}nab_impact-webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('${fontDir}nab_impact-webfont.woff2') format('woff2'), /* Super Modern Browsers */
            url('${fontDir}nab_impact-webfont.woff') format('woff'), /* Modern Browsers */
            url('${fontDir}nab_impact-webfont.ttf') format('truetype'), /* Safari, Android, iOS */
            url('${fontDir}nab_impact-webfont.svg#SourceSansPro') format('svg'); /* Legacy iOS */
      }

      :root {
        --black:                  ${this.variables.black};
        --white:                  ${this.variables.white};
        --primary:                ${this.variables.primary};
        --secondary:              ${this.variables.secondary};
        --tertiary:               ${this.variables.tertiary};
        --brand-grey:             ${this.variables.brandGrey};

        --grey-darkest:           ${this.variables.greyDarkest};
        --grey-dark:              ${this.variables.greyDark};
        --grey-medium:            ${this.variables.greyMedium};
        --grey-inactive:		      ${this.variables.greyInactive};
        --grey-disabled:          ${this.variables.greyDisabled};
        --grey-medium-light:      ${this.variables.greyMediumLight};
        --grey-light: 		        ${this.variables.greyLight};
        --grey-dark-cool:         ${this.variables.greyDarkCool};
        --grey-medium-cool:	      ${this.variables.greyMediumCool};
        --grey-light-cool:	      ${this.variables.greyLightCool};
        --focus-color:            ${this.variables.focusColor};

        --border-width:           ${this.variables.borderWidth};

        --font-family-base:       ${this.variables.fontFamilyBase};
        --fony-family-headline:   ${this.variables.fontFamilyHeadline};
        --font-size-base:         ${this.variables.fontSizeBase};
        --font-size-lg:           ${this.variables.fontSizeLg};
        --font-size-sm:           ${this.variables.fontSizeSm};
        --line-height-base:       ${this.variables.lineHeightBase};

        --font-weight-light:      ${this.variables.fontWeightLight};
        --font-weight-normal:     ${this.variables.fontWeightNormal};
        --font-weight-semi-bold:  ${this.variables.fontWeightSemibold};
        --font-weight-bold:       ${this.variables.fontWeightBold};

        --h1-font-size:           ${this.variables.fontSizeH1};
        --h2-font-size:           ${this.variables.fontSizeH2};
        --h3-font-size:           ${this.variables.fontSizeH3};
        --h4-font-size:           ${this.variables.fontSizeH4};
        --h5-font-size:           ${this.variables.fontSizeH5};
        --h6-font-size:           ${this.variables.fontSizeH6};

        --border-radius:          ${this.variables.borderRadius};

        --header-height:          66px;
      }
    </style>`;
  }
}

