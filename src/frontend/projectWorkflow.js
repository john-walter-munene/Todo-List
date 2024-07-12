import { projectsBoard } from "../backend/projectsBoard";
import { screenController } from "./screenController";

// Class to handle open project operations.
class ProjectWorkFlowManager {
    constructor(contentHolder) {
        this.contentHolder = contentHolder;
    }

    // Access open project.
    getOpenProject() {
        let openProject = this.contentHolder.querySelector('.project-container'); 
        return openProject;
    }

    // Close open project.
    closeAProject() {
        let projectToClose = this.getOpenProject();
        if (projectToClose) this.contentHolder.removeChild(projectToClose);
    }

    // Delete open project
    deleteAProject() {
        let projectToDelete = this.getOpenProject();

        // Get project index and use it to delete it from board.
        // Close project and reload projects page.
        let indexOfProjectToDelete = projectToDelete.getAttribute('project-index');
        projectsBoard.deleteProjectFromBoard(indexOfProjectToDelete);
        this.closeAProject();
        screenController.switchToProjects();
    }
}

const contentHolder = document.querySelector('#content');
const projectWorkFlowManager = new ProjectWorkFlowManager(contentHolder);

export { projectWorkFlowManager };