import { projectsBoard } from "../backend/projectsBoard";
import { Project } from "../backend/project";
import { Task } from "../backend/task";

class EditedStuffSubmissionHandler {
    constructor (contentHolder) {
        this.contentHolder = contentHolder;
    }

    submitEditedProjectDetailsToBoard(projectIndex) {
        // Get project form.
        let projectFormHolder = this.contentHolder.querySelector('.new-project-form');
        let projectForm = projectFormHolder.querySelector('form');

        // Get form input values.
        let projectNameValue = projectForm.querySelector('#project-name').value; 
        let projectStatusValue = projectForm.querySelector('#project-status').value;
        let projectOwnerValue = projectForm.querySelector('#project-owner').value;
        let projectStartDateValue = projectForm.querySelector('#start-date').value;
        let projectDueDateValue = projectForm.querySelector('#due-date').value;
        let projectPriorityValue = projectForm.querySelector('#project-priority').value;
        let projectSummaryValue = projectForm.querySelector('#project-description').value;

        // Create new project details.
        let newProjectDetails = new Project(
            projectNameValue, 
            projectStatusValue, 
            projectOwnerValue, 
            projectStartDateValue, 
            projectDueDateValue, 
            projectPriorityValue, 
            projectSummaryValue,
          );
        
        // Edit project details on Board.
        projectsBoard.updateSpecificProject(projectIndex, newProjectDetails);
    }

    submitEditedTaskDetailsToProject(projectIndex, taskIndex,) {
        // Get task form. 
        let taskFormHolder = this.contentHolder.querySelector('.new-task-form');
        let taskForm = taskFormHolder.querySelector('form');

        // Get form input values.
        let taskNameValue = taskForm.querySelector('#task-name').value;
        let taskAssigneeValue = taskForm.querySelector('#task-assignee').value;
        let taskStatusValue = taskForm.querySelector('#task-status').value;
        let taskPriorityValue = taskForm.querySelector('#task-priority').value;
        let taskProjectChoiceValue = taskForm.querySelector('#project-choice').value;
        let taskDueDateValue = taskForm.querySelector('#due-date').value;
        let taskDescriptionValue = taskForm.querySelector('#task-description').value;

        // Create new task details.
        let newTaskDetails = new Task(
            taskNameValue,
            taskAssigneeValue,
            taskStatusValue,
            taskDescriptionValue,
            taskDueDateValue,
            taskPriorityValue,
        );
        console.log(newTaskDetails);
        console.log(taskProjectChoiceValue);
        projectsBoard.updateSpecificTaskInChosenProject(projectIndex, taskIndex, newTaskDetails)
    }
}

export { EditedStuffSubmissionHandler };