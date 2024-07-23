import { projectsBoard } from "../backend/projectsBoard";
import { saveProjectsBoardToLocalStorage, loadProjectsBoardFromLocalStorage } from "../backend/storage";

class TaskMasterController {
    constructor() {
        // Load projects from local storage when the controller is instantiated
        loadProjectsBoardFromLocalStorage(projectsBoard);
    }

    // Get the Projects Boards
    getProjectsBoard() {
        return projectsBoard.getProjectsBoard();
    }

    // Add a new project to Board
    addANewProjectToBoard(project) {
        projectsBoard.addNewProjectToBoard(project);
        saveProjectsBoardToLocalStorage(projectsBoard);
    }

    // Add a new task to a project
    addANewTaskToProject(projectChoiceViaIndex, task) {
        projectsBoard.addTaskToProject(projectChoiceViaIndex, task);
        saveProjectsBoardToLocalStorage(projectsBoard);
    }

    // Update a chosen project
    updateSpecificProject(projectIndex, newProjectDetails) {
        projectsBoard.updateSpecificProject(projectIndex, newProjectDetails);
        saveProjectsBoardToLocalStorage(projectsBoard);
    }

    // Update a chosen task
    updateSpecificTask(projectIndex, taskIndex, newTaskDetails) {
        projectsBoard.updateSpecificTaskInChosenProject(projectIndex, taskIndex, newTaskDetails);
        saveProjectsBoardToLocalStorage(projectsBoard);
    }

    // Delete a project from board
    deleteSpecificProject(projectIndex) {
        projectsBoard.deleteProjectFromBoard(projectIndex);
        saveProjectsBoardToLocalStorage(projectsBoard);
    }

    // Delete a task from chosen project
    deleteSpecificTask(projectIndex, taskIndex) {
        projectsBoard.deleteSpecificTask(projectIndex, taskIndex);
        saveProjectsBoardToLocalStorage(projectsBoard);
    }
}

// Instantiate and export the controller
const taskMasterController = new TaskMasterController();

export { taskMasterController };