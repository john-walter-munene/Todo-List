// import _ from 'lodash';
import { projectsBoard } from './projectsBoard';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
// document.body.appendChild(component());

console.log("from index.js");
projectsBoard.deleteSpecificTask(1, 1);
projectsBoard.printAllTasksInProjectBoard();