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

/***/ "./src/loadProjects.js":
/*!*****************************!*\
  !*** ./src/loadProjects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectsHeading: () => (/* binding */ createProjectsHeading)\n/* harmony export */ });\n/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screenController */ \"./src/screenController.js\");\n/* harmony import */ var _images_project_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/project.svg */ \"./src/images/project.svg\");\n\r\n\r\n// Handles projects UI\r\n\r\n\r\nfunction createProjectsHeading() {\r\n    // Create a heading holder\r\n    let projectsHeadingContent = document.createElement('div');\r\n    projectsHeadingContent.setAttribute('class', 'projects-heading');\r\n\r\n    /// Create an image and H1 cage.\r\n    let topHeadsCage = document.createElement('div');\r\n    topHeadsCage.setAttribute('class', 'head-cage');\r\n\r\n    // Get image and add it to cage.\r\n    let projectIcon = new Image();\r\n    projectIcon.src = _images_project_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n    projectIcon.setAttribute('class', 'project-icon');\r\n\r\n    // Create H1, set its attributes and add its content.\r\n    let projectsPageHead = document.createElement('h2');\r\n    projectsPageHead.setAttribute('class', 'projects-head');\r\n    projectsPageHead.textContent = 'Projects';\r\n\r\n    // Consolidate Head lead content\r\n    topHeadsCage.appendChild(projectIcon);\r\n    topHeadsCage.appendChild(projectsPageHead);\r\n\r\n    // Create a buttons holder, buttons, set attributes and add content.\r\n    let projectsNavigationsHolder = document.createElement('div');\r\n    projectsNavigationsHolder.setAttribute('class', 'projects-nav');\r\n\r\n    // All projects button\r\n    let allProjectsButton = document.createElement('button');\r\n    allProjectsButton.setAttribute('class', 'all-projects');\r\n    allProjectsButton.textContent = 'All projects';\r\n\r\n    // Board view button\r\n    let boardViewButton = document.createElement('button');\r\n    boardViewButton.setAttribute('class', 'board');\r\n    boardViewButton.textContent = 'Board';\r\n\r\n    // Tasks button\r\n    let taskPageButton = document.createElement('button');\r\n    taskPageButton.setAttribute('class', 'tasks-page');\r\n    taskPageButton.textContent = 'Tasks';\r\n\r\n    // New Projects button\r\n    let newProjectButton = document.createElement('button');\r\n    newProjectButton.setAttribute('class', 'new-project');\r\n    newProjectButton.textContent = 'New';\r\n\r\n    // Add buttons to their holder\r\n    projectsNavigationsHolder.appendChild(allProjectsButton);\r\n    projectsNavigationsHolder.appendChild(boardViewButton);\r\n    projectsNavigationsHolder.appendChild(taskPageButton);\r\n    projectsNavigationsHolder.appendChild(newProjectButton);\r\n\r\n    // Add heading and navigations to overall holder.\r\n    projectsHeadingContent.appendChild(topHeadsCage);\r\n    projectsHeadingContent.appendChild(projectsNavigationsHolder);\r\n\r\n    // Return projects heading component.\r\n    return projectsHeadingContent;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/loadProjects.js?");

/***/ }),

/***/ "./src/loadTasks.js":
/*!**************************!*\
  !*** ./src/loadTasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTasksHeading: () => (/* binding */ createTasksHeading)\n/* harmony export */ });\n/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screenController */ \"./src/screenController.js\");\n/* harmony import */ var _images_task_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/task.svg */ \"./src/images/task.svg\");\n\r\n\r\n// Handles Tasks UI\r\n\r\n\r\nfunction createTasksHeading() {\r\n    // Create a heading holder\r\n    let tasksHeadingContent = document.createElement('div');\r\n    tasksHeadingContent.setAttribute('class', 'tasks-heading');\r\n\r\n    // Create an image and H1 cage.\r\n    let topHeadsCage = document.createElement('div');\r\n    topHeadsCage.setAttribute('class', 'head-cage');\r\n\r\n    // Get image and add it to cage.\r\n    let taskIcon = new Image();\r\n    taskIcon.src = _images_task_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n    taskIcon.setAttribute('class', 'task-icon');\r\n\r\n    // Create a H1, set its attributes and content.\r\n    let tasksPageHead = document.createElement('h2');\r\n    tasksPageHead.setAttribute('class', 'tasks-head');\r\n    tasksPageHead.textContent = 'Tasks';\r\n\r\n    // Consolidate Task lead content\r\n    topHeadsCage.appendChild(taskIcon);\r\n    topHeadsCage.appendChild(tasksPageHead);\r\n\r\n    // Create a buttons holder, buttons, set attributes and add content.\r\n    let tasksNavigationHolder = document.createElement('div');\r\n    tasksNavigationHolder.setAttribute('class', 'tasks-nav');\r\n\r\n    // By project button.\r\n    let byProjectButton = document.createElement('button');\r\n    byProjectButton.setAttribute('class', 'by-project');\r\n    byProjectButton.textContent = 'By project';\r\n\r\n    // All tasks button.\r\n    let allTasksButton = document.createElement('button');\r\n    allTasksButton.setAttribute('class', 'all-tasks');\r\n    allTasksButton.textContent = 'All tasks';\r\n\r\n    // Projects button\r\n    let projectsPageButton = document.createElement('button');\r\n    projectsPageButton.setAttribute('class', 'projects-page');\r\n    projectsPageButton.textContent = 'Projects';\r\n\r\n    // New Tasks button.\r\n    let newTasksButton = document.createElement('button');\r\n    newTasksButton.setAttribute('class', 'new-task');\r\n    newTasksButton.textContent = 'New';\r\n\r\n    // Add buttons to their holder.\r\n    tasksNavigationHolder.appendChild(byProjectButton);\r\n    tasksNavigationHolder.appendChild(allTasksButton);\r\n    tasksNavigationHolder.appendChild(projectsPageButton);\r\n    tasksNavigationHolder.appendChild(newTasksButton);\r\n\r\n    // Add heading and navigations to overall holder.\r\n    tasksHeadingContent.appendChild(topHeadsCage);\r\n    tasksHeadingContent.appendChild(tasksNavigationHolder);\r\n\r\n    // Return tasks heading component.\r\n    return tasksHeadingContent;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/loadTasks.js?");

/***/ }),

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   screenController: () => (/* binding */ screenController)\n/* harmony export */ });\n/* harmony import */ var _loadProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadProjects */ \"./src/loadProjects.js\");\n/* harmony import */ var _loadTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadTasks */ \"./src/loadTasks.js\");\n\r\n\r\n\r\n// Screen controller for DOM\r\nclass ScreenController {\r\n    constructor(contentHolder) {\r\n        this.currentScreen = null;\r\n        this.contentHolder = contentHolder;\r\n    }\r\n\r\n    // Initial projects Load.\r\n    initialize() {\r\n        this.switchToProjects();\r\n    }\r\n\r\n    // Switch to projects.\r\n    switchToProjects() {\r\n        this.clearCurrentScreen();\r\n        this.currentScreen = (0,_loadProjects__WEBPACK_IMPORTED_MODULE_0__.createProjectsHeading)();\r\n        this.contentHolder.appendChild(this.currentScreen);\r\n        this.addEventListeners();\r\n    }\r\n\r\n    // Switch to tasks.\r\n    switchToTasks() {\r\n        this.clearCurrentScreen();\r\n        this.currentScreen = (0,_loadTasks__WEBPACK_IMPORTED_MODULE_1__.createTasksHeading)();\r\n        this.contentHolder.appendChild(this.currentScreen);\r\n        this.addEventListeners();\r\n    }\r\n\r\n    // Clear the current screen.\r\n    clearCurrentScreen() {\r\n        if (this.currentScreen) {\r\n            this.contentHolder.removeChild(this.currentScreen);\r\n            this.currentScreen = null;\r\n        }\r\n    }\r\n\r\n    // Add event listeners to buttons after appending the content.\r\n    addEventListeners() {\r\n        const taskPageButton = this.contentHolder.querySelector('.tasks-page');\r\n        if (taskPageButton) {\r\n            taskPageButton.addEventListener('click', () => this.switchToTasks());\r\n        }\r\n\r\n        const projectsPageButton = this.contentHolder.querySelector('.projects-page');\r\n        if (projectsPageButton) {\r\n            projectsPageButton.addEventListener('click', () => this.switchToProjects());\r\n        }\r\n    }\r\n}\r\n\r\nconst contentHolder = document.querySelector('#content');\r\nconst screenController = new ScreenController(contentHolder);\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/screenController.js?");

/***/ }),

/***/ "./src/images/project.svg":
/*!********************************!*\
  !*** ./src/images/project.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"864328d1b20a6a73cfb6.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/project.svg?");

/***/ }),

/***/ "./src/images/task.svg":
/*!*****************************!*\
  !*** ./src/images/task.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"86c719704ec59d62b5a3.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/task.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/loadProjects.js");
/******/ 	
/******/ })()
;