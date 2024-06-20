import { createProjectsHeading, displayProjects } from "./loadProjects";
import { createTasksHeading, displayTasks } from "./loadTasks";

// Screen controller for DOM
class ScreenController {
    constructor(contentHolder) {
        this.currentScreen = null;
        this.contentHolder = contentHolder;
    }

    // Initial projects Load.
    initialize() {
        this.switchToProjects();
    }

    // Switch to projects.
    switchToProjects() {
        this.clearCurrentScreen();
        this.currentScreen = createProjectsHeading();
        this.contentHolder.appendChild(this.currentScreen);
        this.addEventListeners();
        const projects = displayProjects();
        this.contentHolder.appendChild(projects);
    }

    // Switch to tasks.
    switchToTasks() {
        this.clearCurrentScreen();
        this.currentScreen = createTasksHeading();
        this.contentHolder.appendChild(this.currentScreen);
        this.addEventListeners();
        const tasks = displayTasks();
        this.contentHolder.appendChild(tasks);
    }

    // Clear the current screen.
    clearCurrentScreen() {
        if (this.currentScreen) {
            // this.contentHolder.removeChild(this.currentScreen);
            this.contentHolder.textContent = '';
            this.currentScreen = null;
        }
    }

    // Add event listeners to buttons after appending the content.
    addEventListeners() {
        const taskPageButton = this.contentHolder.querySelector('.tasks-page');
        if (taskPageButton) {
            taskPageButton.addEventListener('click', () => this.switchToTasks());
        }

        const projectsPageButton = this.contentHolder.querySelector('.projects-page');
        if (projectsPageButton) {
            projectsPageButton.addEventListener('click', () => this.switchToProjects());
        }
    }
}

const contentHolder = document.querySelector('#content');
const screenController = new ScreenController(contentHolder);

export { screenController };