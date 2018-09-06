import { html } from 'lit-html';
import { POLYMER_PINK } from './Colors';

import { variables } from "./BaseVariables";
import { BaseTheme } from "./BaseTheme";

const SPACER = 5;

const theme = new BaseTheme(variables);

export const AppStyles = html`
${theme.cssVariables()}
<style>
  :host {
    height: 100%;
  }
  .app {
    text-align: center;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .app-content {
    flex: 1;
  }
  .app-logo {
    animation: app-logo-spin infinite 20s linear;
    height: 80px;
    margin-top: ${SPACER * 2}px;
  }

  .app-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  .app-title {
    font-size: 1.5em;
  }

  .app-intro {
    font-size: large;
  }

  .app-links {
    margin-top: ${SPACER * 4}px;
  }

  .app-gh {
    position: fixed;
    width: ${SPACER * 5}px;
    bottom: ${SPACER * 5}px;
    left: ${SPACER * 5}px;
  }

  @keyframes app-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  a {
    color: ${POLYMER_PINK};
  }
</style>
`;