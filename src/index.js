// import _ from 'lodash';

import './styles.css';
import { setTheme } from './utitilityFunctions';
import { screenController } from './screenController';

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