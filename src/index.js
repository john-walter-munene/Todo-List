// import _ from 'lodash';
import { projectsBoard } from './projectsBoard';
import { taskUpdater } from './utitilityFunctions';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
// document.body.appendChild(component());

console.log("from index.js");
projectsBoard.updateSpecificTaskInChosenProject(1, 1, taskUpdater());
projectsBoard.printAllTasksInProjectBoard();
projectsBoard.printProjectsBoard();