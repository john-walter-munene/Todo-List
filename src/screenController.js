import { createProjectsHeading, displayProjects } from "./loadProjects";
import { createTasksHeading, displayTasks } from "./loadTasks";
import { ProjectStuffCreator, FormClearer } from "./creatStuff";
import { StuffSubmissionHandler } from "./submitStuffToBoard";

// Screen controller for DOM
class ScreenController {
    constructor(contentHolder) {
        this.currentScreen = null;
        this.contentHolder = contentHolder;
        this.projectStuffCreator = new ProjectStuffCreator();
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

    // Create new project.
    createAProject() {
        // Add form to holder.
        let newProjectForm = this.projectStuffCreator.createNewProject()
        this.contentHolder.appendChild(newProjectForm);
        this.addEventListeners();
    }

    // Submit new project.
    subMitAProject() {
        const stuffSubmissionHandler = new StuffSubmissionHandler(this.contentHolder);
        stuffSubmissionHandler.submitProjectToProjectsBoard();
        // this.switchToProjects();
    }

    // Create new task.
    createATask() {
        // Add task to holder
        let newTaskForm = this.projectStuffCreator.createNewTask();
        this.contentHolder.appendChild(newTaskForm);
        this.addEventListeners();
    }

    // Submit new task.
    submitATask() {
        const stuffSubmissionHandler = new StuffSubmissionHandler(this.contentHolder);
        stuffSubmissionHandler.submitTaskToAProject();
    }

    // Clear up form.
    clearForm() {
        let formClearer = new FormClearer(this.contentHolder);
        formClearer.clearFormElementValues();   
    }

    removeCurrentFormFromScreen() {
        let activeProjectForm = this.contentHolder.querySelector('.new-project-form');
        if (activeProjectForm) this.contentHolder.removeChild(activeProjectForm);

        let activeTaskForm = this.contentHolder.querySelector('.new-task-form');
        if (activeTaskForm) this.contentHolder.removeChild(activeTaskForm);
    }

    // Add event listeners to buttons after appending the content.
    addEventListeners() {
        // Switch to tasks.
        const taskPageButton = this.contentHolder.querySelector('.tasks-page');
        if (taskPageButton) taskPageButton.addEventListener('click', () => this.switchToTasks());

        // Switch to projects.
        const projectsPageButton = this.contentHolder.querySelector('.projects-page');
        if (projectsPageButton) projectsPageButton.addEventListener('click', () => this.switchToProjects());

        // Bring up project form.
        const newProjectButton = this.contentHolder.querySelector('.new-project');
        if(newProjectButton) newProjectButton.addEventListener('click', () => this.createAProject());

        // Bring up task form.
        const newTaskButton = this.contentHolder.querySelector('.new-task');
        if (newTaskButton) newTaskButton.addEventListener('click', () => this.createATask());

        // Submit a project.
        const projectSubmitButton = this.contentHolder.querySelector('.submit-project');
        if (projectSubmitButton) projectSubmitButton.addEventListener('click', (event) => {
            this.subMitAProject();
            event.preventDefault();
            this.removeCurrentFormFromScreen();
            this.switchToProjects();
        });

        const formExitButton = this.contentHolder.querySelector('.exit-project-form');
        if (formExitButton) formExitButton.addEventListener('click', (event) => {
            this.clearForm();
            event.preventDefault();
            this.switchToProjects();
        });

        const taskSubmitButton = this.contentHolder.querySelector('.submit-task');
        if (taskSubmitButton) taskSubmitButton.addEventListener('click', (event) => {
            this.submitATask();
            event.preventDefault();
            this.removeCurrentFormFromScreen();
            this.switchToTasks();
        });
    }
}

const contentHolder = document.querySelector('#content');
const screenController = new ScreenController(contentHolder);

export { screenController };