import { createProjectsHeading, displayProjects } from "./loadProjects";
import { createTasksHeading, displayTasks } from "./loadTasks";
import { ProjectStuffCreator } from "./createStuff";
import { StuffSubmissionHandler } from "./submitStuffToBoard";

class ScreenController {
    constructor(contentHolder) {
        this.contentHolder = contentHolder;
    }

    // Initial project load
    initialize() {
        this.switchToProjects();
    }

    // Clear Screen.
    clearCurrentScreen() {
        this.contentHolder.textContent = '';
    }

    // Load projects page.
    switchToProjects() {
        this.clearCurrentScreen();
        const projectsHeading = createProjectsHeading();
        this.contentHolder.appendChild(projectsHeading);
        this.addHeaderEventListeners();
        let projects = displayProjects();
        this.contentHolder.appendChild(projects);
    }

    // Load Tasks Page.
    switchToTasks() {
        this.clearCurrentScreen();
        const tasksHeading = createTasksHeading();
        this.contentHolder.appendChild(tasksHeading);
        this.addHeaderEventListeners();
        let tasks = displayTasks();
        this.contentHolder.appendChild(tasks);
    }

    // Create new project.
    createAProject() {
        // Bring up project form.
        let newProjectForm = new ProjectStuffCreator().createNewProject();
        this.contentHolder.appendChild(newProjectForm);
        this.addFormEventListeners();
    }

    // Create new task.
    createATask() {
        let newTaskForm = new ProjectStuffCreator().createNewTask();
        this.contentHolder.appendChild(newTaskForm);
        this.addFormEventListeners();
    }

    // Submit new project.
    subMitAProject() {
        const stuffSubmissionHandler = new StuffSubmissionHandler(this.contentHolder);
        stuffSubmissionHandler.submitProjectToProjectsBoard();
    }

    // Submit new task.
    submitATask() {
        const stuffSubmissionHandler = new StuffSubmissionHandler(this.contentHolder);
        stuffSubmissionHandler.submitTaskToAProject();
    }

    // Remove form from screen.
    removeCurrentFormFromScreen() {
        let activeForm = this.contentHolder.querySelector('.new-project-form, .new-task-form');
        if (activeForm) this.contentHolder.removeChild(activeForm);
    }    

    // Handle header events.
    addHeaderEventListeners() {
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
    }

    // Handle Form Events.
    addFormEventListeners() {
        // Submit a project.
        const projectSubmitButton = this.contentHolder.querySelector('.submit-project');
        if (projectSubmitButton) projectSubmitButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.subMitAProject();
            this.removeCurrentFormFromScreen();
            this.switchToProjects();
        });

        const taskSubmitButton = this.contentHolder.querySelector('.submit-task');
        if (taskSubmitButton) taskSubmitButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            this.submitATask();
            this.removeCurrentFormFromScreen();
            this.switchToTasks();  
        });

        // Exit project creation.
        const projectFormExitButton = this.contentHolder.querySelector('.exit-project-form');
        if (projectFormExitButton) projectFormExitButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.removeCurrentFormFromScreen();
        });

        // Exit task creation.
        const taskFormExitButton = this.contentHolder.querySelector('.exit-task-form');
        if (taskFormExitButton) taskFormExitButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.removeCurrentFormFromScreen();
        });
    }
}

const contentHolder = document.querySelector('#content');
const screenController = new ScreenController(contentHolder);

export { screenController };