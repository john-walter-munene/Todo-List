
// Class to handle open project operations.
class TaskWorkFlowManager{
    constructor(contentHolder) {
        this.contentHolder = contentHolder;
    }

    // Close open task.
    closeATask() {
        let openTask = this.contentHolder.querySelector('.task-container');
        this.contentHolder.removeChild(openTask);
    }
}

const contentHolder = document.querySelector('#content');
const taskWorkFlowManager = new TaskWorkFlowManager (contentHolder);

export { taskWorkFlowManager };