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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectsBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsBoard */ \"./src/projectsBoard.js\");\n// import _ from 'lodash';\r\n\r\n\r\n// function component() {\r\n//     const element = document.createElement('div');\r\n  \r\n//     // Lodash, currently included via a script, is required for this line to work\r\n//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');\r\n  \r\n//     return element;\r\n//   }\r\n// document.body.appendChild(component());\r\n\r\nconsole.log(\"from index.js\");\r\n_projectsBoard__WEBPACK_IMPORTED_MODULE_0__.projectsBoard.deleteSpecificTask(1, 1);\r\n_projectsBoard__WEBPACK_IMPORTED_MODULE_0__.projectsBoard.printAllTasksInProjectBoard();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _utitilityFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utitilityFunctions */ \"./src/utitilityFunctions.js\");\n\r\n\r\n\r\n// Projects Generator\r\nclass Project {\r\n    constructor(projectName, status, owner, dueDate, projectPriority, projectSummary,) {\r\n        this.projectName = projectName;\r\n        this.status = status;\r\n        this.owner = owner;\r\n        this.dueDate = dueDate;\r\n        this.projectPriority = projectPriority;\r\n        this.projectSummary = projectSummary;\r\n        this.projectTasks = [];\r\n    }\r\n\r\n    // Get all tasks in a project\r\n    getProjectTasks() {\r\n        return this.projectTasks;\r\n    }\r\n    \r\n    // Add a new task to a project.\r\n    addNewTaskToProject(task) {\r\n        this.projectTasks.push(task);\r\n        return;\r\n    }\r\n    // Visualize all tasks in a project\r\n    printTasksInProject() {\r\n        this.projectTasks.forEach(task => console.log(task));\r\n        return;\r\n    }\r\n\r\n    // Visualize specific task\r\n    printSpecificTask(taskIndex) {\r\n        if ((0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_1__.availabilityChecker)(taskIndex, this.projectTasks,)) {\r\n            console.log(\"Can't delete non-existent task!\");\r\n            return;\r\n        }\r\n\r\n        console.log(`Logging task: ${taskIndex + 1}`);\r\n        console.log(this.projectTasks[taskIndex]);\r\n    }\r\n\r\n    deleteTaskFromProject(taskIndex) {\r\n        if ((0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_1__.availabilityChecker)(taskIndex, this.projectTasks,)) {\r\n            console.log(\"Cant delete non existent task!\");\r\n            return;\r\n        }\r\n\r\n        console.log(`Deleting task number: ${taskIndex + 1}`);\r\n        this.projectTasks.splice(taskIndex, 1,);\r\n        return; \r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectsBoard.js":
/*!******************************!*\
  !*** ./src/projectsBoard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectsBoard: () => (/* binding */ projectsBoard)\n/* harmony export */ });\n/* harmony import */ var _utitilityFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utitilityFunctions */ \"./src/utitilityFunctions.js\");\n\r\n\r\n// Create a projects board to control all my projects.\r\nconst projectsBoard = (function ProjectsBoard() {\r\n    // Create a store for my projects.\r\n    const myProjects = [];\r\n\r\n    // Get projects board.\r\n    const getProjectsBoard = () => myProjects;\r\n\r\n    // Print projects board.\r\n    const printProjectsBoard = () => console.log(myProjects);\r\n\r\n    // View all tasks in all projects.\r\n     const printAllTasksInProjectBoard = () => {\r\n        console.log(\"Viewing all tasks in projects board...\");\r\n        myProjects.forEach(project => project.printTasksInProject());\r\n        return;\r\n    };\r\n\r\n    // Add a new project to my board.\r\n    const addNewProjectToBoard = (project) => {\r\n        myProjects.push(project);\r\n        return;\r\n    };\r\n\r\n    // Add task to default project.\r\n    const addTaskToProject = (projectChoiceViaIndex = 0, task) => {\r\n       myProjects[projectChoiceViaIndex].addNewTaskToProject(task);\r\n       return;\r\n    };\r\n\r\n    // Delete a project from board.\r\n    const deleteProjectFromBoard = (projectIndex) => {\r\n        if ((0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_0__.availabilityChecker)(projectIndex, myProjects,)) {\r\n            console.log(\"Cant delete non existent project\");\r\n            return;\r\n        }\r\n        console.log(`Existing projects before deleting: ${myProjects.length}`);\r\n        console.log(`Deleting project number: ${projectIndex + 1}`);\r\n        myProjects.splice(projectIndex, 1,);\r\n        console.log(`Projects left: ${myProjects.length}`);\r\n        return;\r\n    };\r\n\r\n    // View tasks in each project.\r\n    const showTasksInChoseProject = (projectIndex) => {\r\n        if ((0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_0__.availabilityChecker)(projectIndex, myProjects,)) {\r\n            console.log(\"Project does not exist\")\r\n            return;\r\n        }\r\n        console.log(`Viewing tasks in project number: ${projectIndex + 1}`);\r\n        myProjects[projectIndex]. printTasksInProject();\r\n        return;\r\n    }\r\n\r\n    // Visualize specific task in specific project.\r\n    const showSpecificTaskInSpecificProject = (projectIndex, taskIndex) => {\r\n        if ((0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_0__.availabilityChecker)(projectIndex, myProjects,)) {\r\n            console.log(\"Project does not exist\");\r\n            return;\r\n        }\r\n\r\n        console.log(`Logging task in project ${projectIndex + 1}`);\r\n        let targetProject = myProjects[projectIndex];\r\n        targetProject.printSpecificTask(taskIndex);\r\n        return;\r\n    };\r\n\r\n    // Delete specific task in specific project.\r\n    const deleteSpecificTask = (projectIndex, taskIndex) => {\r\n        if ((0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_0__.availabilityChecker)(projectIndex, myProjects,)) {\r\n            console.log(\"Cant find this project!\");\r\n            return;\r\n        }\r\n\r\n        console.log(`Deleting task in project: ${projectIndex + 1}`);\r\n        myProjects[projectIndex].deleteTaskFromProject(taskIndex);\r\n        return;\r\n    };\r\n\r\n    return {\r\n        getProjectsBoard,\r\n        printProjectsBoard,\r\n        printAllTasksInProjectBoard,\r\n        addNewProjectToBoard,\r\n        addTaskToProject, \r\n        deleteProjectFromBoard,\r\n        showTasksInChoseProject,\r\n        showSpecificTaskInSpecificProject,\r\n        deleteSpecificTask,\r\n    };\r\n})();\r\n\r\n\r\n\r\n// Add two duplicate projects for testing.\r\nprojectsBoard.addNewProjectToBoard((0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_0__.projectGenerator)());\r\nprojectsBoard.addNewProjectToBoard((0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_0__.projectGenerator)());\r\n\r\n// Create a new tasks, add it to my default project.\r\nprojectsBoard.addTaskToProject(0, (0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_0__.taskGenerator)());\r\nprojectsBoard.addTaskToProject(0, (0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_0__.taskGenerator)());\r\n\r\n// Create new tasks for my second project.\r\nprojectsBoard.addTaskToProject(1, (0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_0__.taskGenerator)());\r\nprojectsBoard.addTaskToProject(1, (0,_utitilityFunctions__WEBPACK_IMPORTED_MODULE_0__.taskGenerator)());\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/projectsBoard.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n// Task generator.\r\nclass Task {\r\n    constructor(taskTitle, taskAssignee, taskStatus, taskDescription, dueDate, taskPriority,) {\r\n        this.taskTitle = taskTitle;\r\n        this.taskAssignee = taskAssignee;\r\n        this.taskStatus = taskStatus;\r\n        this.taskDescription = taskDescription;\r\n        this.dueDate = dueDate;\r\n        this.taskPriority = taskPriority;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/utitilityFunctions.js":
/*!***********************************!*\
  !*** ./src/utitilityFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   availabilityChecker: () => (/* binding */ availabilityChecker),\n/* harmony export */   projectGenerator: () => (/* binding */ projectGenerator),\n/* harmony export */   taskGenerator: () => (/* binding */ taskGenerator)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\n// Create a default project, all tasks to be added here, if choice project not specified.\r\nfunction projectGenerator() {\r\n    let newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(\r\n        \"Sample Project: Performance\",\r\n        \"Planning\",\r\n        \"John Walter\",\r\n        \"June 26, 2024\",\r\n        \"Low\",\r\n        \"I am your first project.\",\r\n    );\r\n    return newProject;\r\n}\r\n\r\n// Create a task to test my works.\r\nfunction taskGenerator() {\r\n    let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(\r\n        \"Write Project Proposal\",\r\n        \"John Walter\",\r\n        \"In progress\",\r\n        \"This project proposal aims to achieve cross-functional alignment on investing in mobile performance in Q3.\",\r\n        \"July 15, 2024\",\r\n        \"High\",\r\n    );\r\n    return newTask;\r\n}\r\n\r\nfunction availabilityChecker(itemIndex, myArray) {\r\n    return itemIndex > myArray.length - 1;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/utitilityFunctions.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;