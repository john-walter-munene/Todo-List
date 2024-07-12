import { projectsBoard } from "../backend/projectsBoard";
import { screenController } from "./screenController";

// Class to handle open project operations.
class TaskWorkFlowManager {
    constructor(contentHolder) {
        this.contentHolder = contentHolder;
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
}

const contentHolder = document.querySelector('#content');
const taskWorkFlowManager = new TaskWorkFlowManager (contentHolder);

export { taskWorkFlowManager };