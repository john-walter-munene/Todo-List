import { projectsBoard } from "../backend/projectsBoard";
import { screenController } from "./screenController";
import { ProjectsStuffEditor } from "./editStuff";
import { EditedStuffSubmissionHandler } from "./editedStuffSubmissions";
import { openTaskByIndex } from "./loadTasks";

// Class to handle open project operations.
class TaskWorkFlowManager {
    constructor(contentHolder) {
        this.contentHolder = contentHolder;
        this.taskIdentifierStore = [];
    }

    // Access open task.
    getOpenTask() {
        let openTask = this.contentHolder.querySelector('.task-container');
        return openTask;
    }

    // Close open task.
    closeATask() {
        let taskToClose = this.getOpenTask();
        if (taskToClose) this.contentHolder.removeChild(taskToClose);
    }

    // Submit new task details.
    updateTaskDetailsInProject() {
        let editedTaskDetailsHandler = new EditedStuffSubmissionHandler(this.contentHolder);
        let projectIndex = this.taskIdentifierStore[0];
        let taskIndex = this.taskIdentifierStore[1];
        editedTaskDetailsHandler.submitEditedTaskDetailsToProject(projectIndex, taskIndex);
    }

    // Delete open task.
    deleteATask() {
        let taskToDelete = this.getOpenTask();

        // Get project and task Index, use them to delete task.
        // Close task and reload tasks page.
        let taskProjectIndex = taskToDelete.getAttribute('project-index');
        let taskIndex = taskToDelete.getAttribute('task-index');
        projectsBoard.deleteSpecificTask(taskProjectIndex, taskIndex);
        this.closeATask();
        screenController.switchToTasks();
    }

    // Edit open project.
    editATask() {
        let taskToEdit = this.getOpenTask();
        let taskProjectIndex = taskToEdit.getAttribute('project-index');
        let taskIndex = taskToEdit.getAttribute('task-index');
        this.taskIdentifierStore.push(taskProjectIndex, taskIndex);
        let taskOnEdit = new ProjectsStuffEditor().editATask(taskProjectIndex, taskIndex);
        this.contentHolder.appendChild(taskOnEdit);
        this.addFormEventListeners();
    }

    // Reopen task after edits.
    reOpenTaskAfterEdits() {
        // Get project and task indices, clean store reopen project.
        let taskProjectIndex = this.taskIdentifierStore[0];
        let taskIndex = this.taskIdentifierStore[1];
        this.taskIdentifierStore.splice(0, 2);
        openTaskByIndex(taskProjectIndex, taskIndex);
    }

    // Remove form from screen.
    removeCurrentFormFromScreen() {
        let activeForm = this.contentHolder.querySelector('.new-task-form');
        if (activeForm) this.contentHolder.removeChild(activeForm);
    }

    // Handle open task activity.
    addOpenTaskEventListeners() {
        // Close a task.
        let closeTaskButton = document.querySelector('.close-task');
        closeTaskButton.addEventListener('click', () => {
            this.closeATask();
        });

        // Edit a task.
        let editTaskButton = document.querySelector('.edit-task');
        editTaskButton.addEventListener('click', () => {
            this.editATask();
        });

        // Delete a task.
        let deleteTaskButton = document.querySelector('.delete-task');
        deleteTaskButton.addEventListener('click', () => {
            this.deleteATask();
        });
    }

    addFormEventListeners() {
        // Submit new task details.
        const taskSubmitButton = this.contentHolder.querySelector('.submit-task');
        if (taskSubmitButton) taskSubmitButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            this.updateTaskDetailsInProject();
            this.removeCurrentFormFromScreen();
            screenController.switchToTasks();
            this.reOpenTaskAfterEdits();
        });

        // Exit task editing.
        const taskFormExitButton = this.contentHolder.querySelector('.exit-task-form');
        if (taskFormExitButton) taskFormExitButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.removeCurrentFormFromScreen();
        });
    }
}

const contentHolder = document.querySelector('#content');
const taskWorkFlowManager = new TaskWorkFlowManager (contentHolder);

export { taskWorkFlowManager };