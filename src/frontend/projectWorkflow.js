// Class to handle open project operations.
class ProjectWorkFlowManager {
    constructor(contentHolder) {
        this.contentHolder = contentHolder;
    }

    // Close open project.
    closeAProject() {
        let openProject = this.contentHolder.querySelector('.project-container'); 
        if (openProject) this.contentHolder.removeChild(openProject);;
    }
}

const contentHolder = document.querySelector('#content');
const projectWorkFlowManager = new ProjectWorkFlowManager(contentHolder);

export { projectWorkFlowManager };