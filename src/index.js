// import _ from 'lodash';

import './resources/styles.css';
import { setTheme } from './resources/utitilityFunctions';
import { screenController } from './frontend/screenController';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
// document.body.appendChild(component());

// User theme toggle.
let themeToggler = document.querySelector('.theme-toggle');
themeToggler.addEventListener('click', setTheme);

// Initial Load.
screenController.initialize();