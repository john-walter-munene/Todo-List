import { projectsBoard } from "./projectsBoard";
import { Project } from "./project";
import { Task } from "./task";

class StuffSubmissionHandler {
    constructor (contentHolder) {
        this.contentHolder = contentHolder;
    }

    submitProjectToProjectsBoard() {
        // Get project form.
        let projectFormHolder = this.contentHolder.querySelector('.new-project-form');
        let projectForm = projectFormHolder.querySelector('form');

        // Get form input values.
        let projectNameValue = projectForm.querySelector('#project-name').value; 
        console.log(projectNameValue);
        let projectStatusValue = projectForm.querySelector('#project-status').value;
        let projectOwnerValue = projectForm.querySelector('#project-owner').value;
        let projectStartDateValue = projectForm.querySelector('#start-date').value;
        let projectDueDateValue = projectForm.querySelector('#due-date').value;
        let projectPriorityValue = projectForm.querySelector('#project-priority').value;
        let projectSummaryValue = projectForm.querySelector('#project-description').value;

        // Create a project.
        let newProject = new Project(
            projectNameValue, 
            projectStatusValue, 
            projectOwnerValue, 
            projectStartDateValue, 
            projectDueDateValue, 
            projectPriorityValue, 
            projectSummaryValue,
          );
        
        //  Add project to board.
        projectsBoard.addNewProjectToBoard(newProject);
    }

    submitTaskToAProject() {
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
        
        // Create a task.
        let newTask = new Task(
            taskNameValue,
            taskAssigneeValue,
            taskStatusValue,
            taskDescriptionValue,
            taskDueDateValue,
            taskPriorityValue,
        );

        // Add task to chosen project.
        projectsBoard.addTaskToProject(parseInt(taskProjectChoiceValue), newTask);
    }
}

export { StuffSubmissionHandler };