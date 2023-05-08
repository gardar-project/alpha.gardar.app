// Import stylesheets
import './style.css';
import Bootstrapper from './src/core/bootstrapper';
import App from './src/app';

// Write TypeScript code!
const appDiv: HTMLElement = document.body;

const app = new App();
Bootstrapper.main(appDiv, app);