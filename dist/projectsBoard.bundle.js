/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Notes: () => (/* binding */ Notes)\n/* harmony export */ });\n// Notes generator.\r\nclass Notes {\r\n    constructor() {\r\n        this.notePoints = [];\r\n    }\r\n\r\n    addNotes(noteLead, notePoints) {\r\n        let points = {\r\n            noteLead,\r\n            notePoints,\r\n        }\r\n        this.notePoints.push(points);\r\n        return;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/notes.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   taskGenerator: () => (/* binding */ taskGenerator)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n// Projects Generator\r\nclass Project {\r\n    constructor(projectName, status, owner, dueDate, projectPriority, completionStatus,) {\r\n        this.projectName = projectName;\r\n        this.status = status;\r\n        this.owner = owner;\r\n        this.dueDate = dueDate;\r\n        this.projectPriority = projectPriority;\r\n        this.completionStatus = completionStatus;\r\n        this.projectTasks = [];\r\n    }\r\n\r\n    // addNewTaskToProject(taskTitle, taskAssignee, taskStatus, taskDescription, dueDate, taskPriority,) {\r\n    //     let newTask = new Task(taskTitle, taskAssignee, taskStatus, taskDescription, dueDate, taskPriority,);\r\n    //     this.projectTasks.push(newTask);\r\n    //     return;\r\n    // }\r\n    getProjectTasks() {\r\n        return this.projectTasks;\r\n    }\r\n    \r\n    addNewTaskToProject(task) {\r\n        this.projectTasks.push(task);\r\n        return;\r\n    }\r\n\r\n    printTasksInProject() {\r\n        this.projectTasks.forEach(task => console.log(task));\r\n        return;\r\n    }\r\n}\r\n\r\nfunction taskGenerator() {\r\n    let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(\r\n        \"Write Project Proposal\",\r\n        \"John Walter\",\r\n        \"In progress\",\r\n        \"This project proposal aims to achieve cross-functional alignment on investing in mobile performance in Q3.\",\r\n        \"July 15, 2024\",\r\n        \"High\",\r\n    );\r\n    return newTask;\r\n}\r\n// newProject.projectTasks.push(myTask);\r\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectsBoard.js":
/*!******************************!*\
  !*** ./src/projectsBoard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectsBoard: () => (/* binding */ projectsBoard)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n// Create a projects board to control all my projects.\r\nconst projectsBoard = (function ProjectsBoard() {\r\n    // Create a store for my projects.\r\n    const myProjects = [];\r\n\r\n    // Get projects board.\r\n    const getProjectsBoard = () => myProjects;\r\n\r\n    // Print projects board.\r\n    const printProjectsBoard = () => console.log(myProjects);\r\n\r\n    // Add a new project to my board.\r\n    const addProjectToBoard = (project) => {\r\n        myProjects.push(project);\r\n        return;\r\n    }\r\n\r\n    // Add task to default project.\r\n    const addTaskToProject = (projectChoiceViaIndex = 0, task) => {\r\n       myProjects[projectChoiceViaIndex].addNewTaskToProject(task);\r\n       return;\r\n    }\r\n\r\n    return {\r\n        getProjectsBoard,\r\n        addProjectToBoard,\r\n        printProjectsBoard,\r\n        addTaskToProject,\r\n    }\r\n})();\r\n\r\n// Create a default project, all tasks to be added here, if choice project not specified.\r\nfunction projectGenerator() {\r\n    let newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\r\n        \"Sample Project: Performance\",\r\n        \"Planning\",\r\n        \"John Walter\",\r\n        \"June 26, 2024\",\r\n        \"Low\",\r\n        \"50%\",\r\n    );\r\n    return newProject;\r\n}\r\nprojectsBoard.addProjectToBoard(projectGenerator());\r\n\r\n// Create a new task, add it to my default project.\r\nprojectsBoard.addTaskToProject(0, (0,_project__WEBPACK_IMPORTED_MODULE_0__.taskGenerator)());\r\nprojectsBoard.addTaskToProject(0, (0,_project__WEBPACK_IMPORTED_MODULE_0__.taskGenerator)());\r\n\r\nlet tasksInMyProject = projectsBoard.getProjectsBoard()[0].getProjectTasks().length;\r\nconsole.log(\"Number of tasks in the project:\", tasksInMyProject);\r\nconsole.log(\"Project details:\", projectsBoard.getProjectsBoard()[0]);\r\n\r\n// projectsBoard.printProjectsBoard();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/projectsBoard.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes */ \"./src/notes.js\");\n\r\n\r\n// Task generator.\r\nclass Task {\r\n    constructor(taskTitle, taskAssignee, taskStatus, taskDescription, dueDate, taskPriority,) {\r\n        this.taskTitle = taskTitle;\r\n        this.taskAssignee = taskAssignee;\r\n        this.taskStatus = taskStatus;\r\n        this.taskDescription = taskDescription;\r\n        this.dueDate = dueDate;\r\n        this.taskPriority = taskPriority;\r\n        this.taskNotes = new _notes__WEBPACK_IMPORTED_MODULE_0__.Notes();\r\n    }\r\n}\r\n\r\n// newTask.taskNotes.addNotes(\"Goals\", \"Run a developer marathon.\");\r\n// for (let key in newTask) {\r\n//     console.log(newTask[key]);\r\n// }\r\n\r\n// newTask.taskNotes.notePoints.forEach(noteItem => {\r\n//     for (let note in noteItem) console.log(noteItem[note]);\r\n// });\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/projectsBoard.js");
/******/ 	
/******/ })()
;