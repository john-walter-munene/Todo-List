import { taskMasterController } from "../front-back-link/decoupler";
import { screenController } from "./screenController";
import { ProjectsStuffEditor } from "./editStuff";
import { EditedStuffSubmissionHandler } from "./editedStuffSubmissions";
import { openProjectByIndex } from "./loadProjects";

// Class to handle open project operations.
class ProjectWorkFlowManager {
    constructor(contentHolder) {
        this.contentHolder = contentHolder;
        this.projectIdenfierStore = [];
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

    // Submit new project details.
    updateProjectDetailsOnBoard() {
        let editedProjectDetailsHandler = new EditedStuffSubmissionHandler(this.contentHolder);
        editedProjectDetailsHandler.submitEditedProjectDetailsToBoard(this.projectIdenfierStore[0]);
    }

    // Delete open project
    deleteAProject() {
        let projectToDelete = this.getOpenProject();

        // Get project index and use it to delete it from board.
        // Close project and reload projects page.
        let indexOfProjectToDelete = projectToDelete.getAttribute('project-index');
        taskMasterController.deleteSpecificProject(indexOfProjectToDelete);
        this.closeAProject();
        screenController.switchToProjects();
    }

    // Edit open Project.
    editAProject() {
        let projectToEdit = this.getOpenProject();
        let indexOfProjectToEdit = projectToEdit.getAttribute('project-index');
        this.projectIdenfierStore.push(indexOfProjectToEdit);
        let projectOnEdit = new ProjectsStuffEditor().editAProject(indexOfProjectToEdit);
        projectOnEdit.setAttribute('project-identifier', indexOfProjectToEdit); 
        this.contentHolder.appendChild(projectOnEdit);
        this.addFormEventListeners();
    }

    // Reopen project after edits.
    reOpenProjectAfterEdits() { 
        // Get projectIndex and clear store, reopen project.
        let projectIndex = this.projectIdenfierStore[0];
        this.projectIdenfierStore.pop();
        openProjectByIndex(projectIndex);
    }

    // Remove form from screen.
    removeCurrentFormFromScreen() {
        let activeForm = this.contentHolder.querySelector('.new-project-form');
        if (activeForm) this.contentHolder.removeChild(activeForm);
    } 

    // Handle open project activity.
    addOpenProjectEventListeners() {
        // Close a project.
        let closeProjectButton = document.querySelector('.close-project');
        closeProjectButton.addEventListener('click', () => {
            this.closeAProject();
        });

        // Edit a project.
        let editProjectButton = document.querySelector('.edit-project');
        editProjectButton.addEventListener('click', () => this.editAProject());
        
        // Delete a project.
        let deleteProjectButton = document.querySelector('.delete-project');
        deleteProjectButton.addEventListener('click', () => this.deleteAProject());
    }

    addFormEventListeners() {
        // Submit new project details
        const projectSubmitButton = this.contentHolder.querySelector('.submit-project');
        if (projectSubmitButton) projectSubmitButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.updateProjectDetailsOnBoard();
            this.removeCurrentFormFromScreen();
            screenController.switchToProjects();
            this.reOpenProjectAfterEdits();
        })

        // Exit Project Editing.
        const projectFormExitButton = this.contentHolder.querySelector('.exit-project-form');
        if (projectFormExitButton) projectFormExitButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.removeCurrentFormFromScreen();
        });
    }
}

const contentHolder = document.querySelector('#content');
const projectWorkFlowManager = new ProjectWorkFlowManager(contentHolder);

export { projectWorkFlowManager };