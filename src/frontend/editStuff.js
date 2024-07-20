import { ProjectStuffCreator } from "./createStuff";
import { taskMasterController } from "../front-back-link/decoupler";

import { format } from "date-fns";

class ProjectsStuffEditor {
    editAProject(projectIndex) {
        // Get project details from board, create a new form.
        let projectOnEdit = taskMasterController.getProjectsBoard()[projectIndex];
        let projectEditForm = new ProjectStuffCreator().createNewProject();
        
        // Update form details to project edit as opposed to create.
        // Update project form label.
        let projectNameLabel = projectEditForm.querySelector('label[for="project-name"]');
        projectNameLabel.textContent = 'Editing Project:';

        // Get form fields.
        let projectNameInput = projectEditForm.querySelector('#project-name');
        let projectStatusInput = projectEditForm.querySelector('#project-status');
        let projectOwnerInput = projectEditForm.querySelector('#project-owner');
        let projectStartDateInput = projectEditForm.querySelector('#start-date');
        let projectDueDateInput = projectEditForm.querySelector('#due-date');
        let projectPriorityInput = projectEditForm.querySelector('#project-priority');
        let projectDescriptionInput = projectEditForm.querySelector('#project-description');

        // Autofill form text fields.
        projectNameInput.value = projectOnEdit.projectName;
        projectOwnerInput.value = projectOnEdit.owner;
        projectStartDateInput.value = format(new Date(projectOnEdit.startDate), 'yyyy-MM-dd');
        projectDueDateInput.value = format(new Date(projectOnEdit.dueDate), 'yyyy-MM-dd');
        projectDescriptionInput.value = projectOnEdit.projectSummary;

        // Set selected option in status dropdown.
        let statusOptions = projectStatusInput.options; 
        for (const option of statusOptions) {
            if (option.value === projectOnEdit.status) option.selected = true;
        }

        // Set selected option in priority dropdown;
        let priorityOptions = projectPriorityInput.options;
        for (const option of priorityOptions) {
            if (option.value === projectOnEdit.projectPriority) option.selected = true;
        }

        return projectEditForm;
    }

    editATask(projectIndex, taskIndex) {
        // Get task details from board, create a new form.
        let projectForTaskOnEdit = taskMasterController.getProjectsBoard()[projectIndex];
        let taskOnEdit = projectForTaskOnEdit.projectTasks[taskIndex];
        let taskEditForm = new ProjectStuffCreator().createNewTask();

        // Update form details to edit task as opposed to create.
        let taskNameLabel = taskEditForm.querySelector('label[for="task-name"]');
        taskNameLabel.textContent = 'Editing Task:';

        // Get form fields.
        let taskNameInput = taskEditForm.querySelector('#task-name');
        let taskAssigneeInput = taskEditForm.querySelector('#task-assignee');
        let taskStatusInput = taskEditForm.querySelector('#task-status');
        let taskPriorityInput = taskEditForm.querySelector('#task-priority');
        let taskProjectChoiceInput = taskEditForm.querySelector('#project-choice');
        let taskDueDateInput = taskEditForm.querySelector('#due-date');
        let taskDescriptionInput = taskEditForm.querySelector('#task-description');

        // Autofill form text fields.
        taskNameInput.value = taskOnEdit.taskTitle;
        taskAssigneeInput.value = taskOnEdit.taskAssignee;
        taskDueDateInput.value = format(new Date(taskOnEdit.dueDate), 'yyyy-MM-dd');
        taskDescriptionInput.value = taskOnEdit.taskDescription;

        // Set selected option in status dropdown;
        let taskStatusOptions = taskStatusInput.options;
        for (const option of taskStatusOptions) {
            if (option.value === taskOnEdit.taskStatus) option.selected = true;
        }

        // set selected option in priority dropdown.
        let taskPriorityOptions = taskPriorityInput.options;
        for (const option of taskPriorityOptions) {
            if (option.value === taskOnEdit.taskPriority) option.selected = true;
        }

        // Disable project choice and show project task lives in.
        let taskProjectChoiceOptions = taskProjectChoiceInput.options;
        // Remove the default option (fallback if no project is selected on creation)
        taskProjectChoiceInput.remove(0);
        let indexOfProjectTaskLivesIn = taskMasterController.getProjectsBoard().indexOf(projectForTaskOnEdit);
          
        for (let projectCounter = 0; projectCounter < taskProjectChoiceOptions.length; projectCounter++) {
            let option = taskProjectChoiceOptions[projectCounter];
            if (parseInt(option.value) === indexOfProjectTaskLivesIn) {
                option.selected = true;
                break;
            }
        }
        taskProjectChoiceInput.disabled = true;

        return taskEditForm
    }
}

export { ProjectsStuffEditor };