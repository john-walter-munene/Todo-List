import { projectsBoard } from "../backend/projectsBoard"

class TaskMasterController {
    // Get the Projects Boards.
    getProjectsBoard() {
        return projectsBoard.getProjectsBoard();
    }

    // Add a new project to Board.
    addANewProjectToBoard(project) {
        return projectsBoard.addNewProjectToBoard(project);
    }

    // Add a new task to a project.
    addANewTaskToProject(projectChoiceViaIndex, task) {
        return projectsBoard.addTaskToProject(projectChoiceViaIndex, task);
    }

    // Update a chosen project.
    updateSpecificProject(projectIndex, newProjectDetails) {
        return projectsBoard.updateSpecificProject(projectIndex, newProjectDetails);
    }

    // Update a chosen task.
    updateSpecificTask(projectIndex, taskIndex, newProjectDetails) {
        return projectsBoard.updateSpecificTaskInChosenProject(projectIndex, taskIndex, newProjectDetails);
    }

    // Delete a project from board.
    deleteSpecificProject(projectIndex) {
        return projectsBoard.deleteProjectFromBoard(projectIndex);
    }

    // Delete a task  from chosen project.
    deleteSpecificTask(projectIndex, taskIndex) {
        return projectsBoard.deleteSpecificTask(projectIndex, taskIndex);
    }
}

const taskMasterController = new TaskMasterController();

export { taskMasterController };