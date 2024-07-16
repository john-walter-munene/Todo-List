import { projectsBoard } from "../backend/projectsBoard";

class ProjectStuffCreator {
    createNewProject() {
        // Create an overall form holder.
        let projectCreationContentHolder = document.createElement('div');
        projectCreationContentHolder.setAttribute('class', 'new-project-form');

        // Create project form.
        let projectForm = document.createElement('form');
        projectForm.setAttribute('class', 'project-form');
       
        // Create project name label and input.
        let projectNameLabel = document.createElement('label');
        projectNameLabel.setAttribute('for', 'project-name');
        projectNameLabel.textContent = 'New Project:';
        let projectNameInput = document.createElement('input');
        projectNameInput.setAttribute('type', 'text');
        projectNameInput.setAttribute('id', 'project-name');
        projectNameInput.setAttribute('name', 'project-name');
        
        // Finalize form header.
        let nameHolder = document.createElement('div');
        nameHolder.setAttribute('class', 'project-name');
        nameHolder.append(projectNameLabel, projectNameInput);

        // Create a section for the other data.
        let projectsDetails = document.createElement('fieldset');
        projectsDetails.setAttribute('class', 'project-details');

        // Create project status label and input.
        let projectStatusLabel = document.createElement('label');
        projectStatusLabel.setAttribute('for', 'project-status');
        projectStatusLabel.textContent = 'Status';
        let projectStatusInput = document.createElement('select');
        projectStatusInput.setAttribute('id', 'project-status');
        projectStatusInput.setAttribute('name', 'project-status');

        // Options.
        let optionOneStatus = document.createElement('option');
        optionOneStatus.textContent = 'Not Started';
        optionOneStatus.setAttribute('value', 'Not Started');
        let optionTwoStatus = document.createElement('option');
        optionTwoStatus.textContent = 'In Progress';
        optionTwoStatus.setAttribute('value', 'In Progress');
        let optionThreeStatus = document.createElement('option');
        optionThreeStatus.textContent = 'Done';
        optionThreeStatus.setAttribute('value', 'Done');

        // Stitch options to select.
        projectStatusInput.append(optionOneStatus, optionTwoStatus, optionThreeStatus);

        // Create project owner label and input.
        let projectOwnerLabel = document.createElement('label');
        projectOwnerLabel.setAttribute('for', 'project-owner');
        projectOwnerLabel.textContent = 'Project Owner';
        let projectOwnerInput = document.createElement('input');
        projectOwnerInput.setAttribute('type', 'text');
        projectOwnerInput.setAttribute('id', 'project-owner');
        projectOwnerInput.setAttribute('name', 'project-owner');

        // Create project dates labels and input.
        let projectStartDateLabel = document.createElement('label');
        projectStartDateLabel.setAttribute('for', 'start-date');
        projectStartDateLabel.textContent = 'Start Date';
        let projectStartDateInput = document.createElement('input');
        projectStartDateInput.setAttribute('type', 'date');
        projectStartDateInput.setAttribute('id', 'start-date');
        projectStartDateInput.setAttribute('name', 'start-date');

        let projectDueDateLabel = document.createElement('label');
        projectDueDateLabel.setAttribute('for', 'due-date');
        projectDueDateLabel.textContent = 'Due Date';
        let projectDueDateInput = document.createElement('input');
        projectDueDateInput.setAttribute('type', 'date');
        projectDueDateInput.setAttribute('id', 'due-date');
        projectDueDateInput.setAttribute('name', 'due-date');

        // Create priority options label, options and input.
        let projectPriorityLabel = document.createElement('label');
        projectPriorityLabel.setAttribute('for', 'project-priority');
        projectPriorityLabel.textContent = 'Priority';
        let projectPriority = document.createElement('select');
        projectPriority.setAttribute('id', 'project-priority');
        projectPriority.setAttribute('name', 'project-priority');

        // Options.
        let optionOne = document.createElement('option');
        let optionTwo = document.createElement('option');
        let optionThree = document.createElement('option');

        // Option content.
        optionOne.textContent = 'Low';
        optionOne.setAttribute('value', 'Low');
        optionTwo.textContent = 'Medium';
        optionTwo.setAttribute('value', 'Medium');
        optionThree.textContent = 'High';
        optionThree.setAttribute('value', 'High');

        // Stitch options to select.
        projectPriority.append(optionOne, optionTwo, optionThree);

        // Stitch middle section together, for styling.
        // Labels.
        let projectDetailsLabelsHolder = document.createElement('div');
        projectDetailsLabelsHolder.setAttribute('class', 'details-holder');
        projectDetailsLabelsHolder.append(projectStatusLabel, projectOwnerLabel, projectStartDateLabel, projectDueDateLabel, projectPriorityLabel);
        // Inputs.
        let projectDetailsInputsHolder = document.createElement('div');
        projectDetailsInputsHolder.setAttribute('class', 'details-input');
        projectDetailsInputsHolder.append(projectStatusInput, projectOwnerInput, projectStartDateInput, projectDueDateInput, projectPriority);

        // Overall stitch.
        projectsDetails.append(projectDetailsLabelsHolder, projectDetailsInputsHolder);

        // Create project description label and input.
        let descriptionHolder = document.createElement('div');
        descriptionHolder.setAttribute('class', 'project-description');

        // Create description label and input.
        let projectDescriptionHeading = document.createElement('h1');
        projectDescriptionHeading.textContent = 'About this project';
        let projectDescirptionLabel = document.createElement('label');
        projectDescirptionLabel.appendChild(projectDescriptionHeading);
        projectDescirptionLabel.setAttribute('for', 'project-description');
        let projectDescriptionInput = document.createElement('textarea');
        projectDescriptionInput.setAttribute('id', 'project-description');
        projectDescriptionInput.setAttribute('name', 'project-description');
        projectDescriptionInput.setAttribute('cols', '50');
        projectDescriptionInput.setAttribute('rows', '8');
        projectDescriptionInput.setAttribute('wrap', 'hard');

        // Stitch description up.
        descriptionHolder.append(projectDescirptionLabel, projectDescriptionInput);

        // Create buttons for submit or exit.
        let formButtons = document.createElement('div');
        formButtons.setAttribute('class', 'button-holders');
        // Submit button
        let submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('class', 'submit-project');
        // Exit button.
        let exitButton = document.createElement('button');
        exitButton.textContent = 'Return';
        exitButton.setAttribute('type', 'button');
        exitButton.setAttribute('class', 'exit-project-form');
        
        // Consolidate buttons.
        formButtons.append(submitButton, exitButton);

        // Consolidate my form elemnts.
        projectForm.append(nameHolder, projectsDetails, descriptionHolder, formButtons);
        projectCreationContentHolder.appendChild(projectForm);

        return projectCreationContentHolder;
    }

    createNewTask() {
        // Create an overall form holder.
        let taskCreationContentHolder = document.createElement('div');
        taskCreationContentHolder.setAttribute('class', 'new-task-form');
    
        // Create task form.
        let taskForm = document.createElement('form');
        taskForm.setAttribute('class', 'task-form');
    
        // Create task name label and input.
        let taskNameLabel = document.createElement('label');
        taskNameLabel.setAttribute('for', 'task-name');
        taskNameLabel.textContent = 'New Task:';
        let taskNameInput = document.createElement('input');
        taskNameInput.setAttribute('type', 'text');
        taskNameInput.setAttribute('id', 'task-name');
        taskNameInput.setAttribute('name', 'task-name');
    
        // Finalize form header.
        let nameHolder = document.createElement('div');
        nameHolder.setAttribute('class', 'task-name');
        nameHolder.append(taskNameLabel, taskNameInput);
    
        // Create section for other data.
        let taskDetails = document.createElement('fieldset');
        taskDetails.setAttribute('class', 'task-details');
    
        // Create task owner label and input.
        let taskAssigneeLabel = document.createElement('label');
        taskAssigneeLabel.setAttribute('for', 'task-assignee');
        taskAssigneeLabel.textContent = 'Assignee:';
        let taskAssigneeInput = document.createElement('input');
        taskAssigneeInput.setAttribute('type', 'text');
        taskAssigneeInput.setAttribute('id', 'task-assignee');
        taskAssigneeInput.setAttribute('name', 'task-assignee');
    
        // Create task status label, options and input.
        let taskStatusLabel = document.createElement('label');
        taskStatusLabel.setAttribute('for', 'task-status');
        taskStatusLabel.textContent = 'Status:';
        let taskStatusInput = document.createElement('select');
        taskStatusInput.setAttribute('id', 'task-status');
        taskStatusInput.setAttribute('name', 'task-status');
    
        // Options.
        let optionOneStatus = document.createElement('option');
        optionOneStatus.textContent = 'Not Started';
        optionOneStatus.setAttribute('value', 'Not started');
        let optionTwoStatus = document.createElement('option');
        optionTwoStatus.textContent = 'In Progress';
        optionTwoStatus.setAttribute('value', 'In Progress');
        let optionThreeStatus = document.createElement('option');
        optionThreeStatus.textContent = 'Done';
        optionThreeStatus.setAttribute('value', 'Done');
    
        // Stitch options to select.
        taskStatusInput.append(optionOneStatus, optionTwoStatus, optionThreeStatus);
    
        // Create task priority label, options and input.
        let taskPriorityLabel = document.createElement('label');
        taskPriorityLabel.setAttribute('for', 'task-priority');
        taskPriorityLabel.textContent = 'Priority:';
        let taskPriorityInput = document.createElement('select');
        taskPriorityInput.setAttribute('id', 'task-priority');
        taskPriorityInput.setAttribute('name', 'task-priority');
    
        // Options.
        let optionOnePriority = document.createElement('option');
        optionOnePriority.textContent = 'Low';
        optionOnePriority.setAttribute('value', 'Low');
        let optionTwoPriority = document.createElement('option');
        optionTwoPriority.textContent = 'Medium';
        optionTwoPriority.setAttribute('value', 'Medium');
        let optionThreePriority = document.createElement('option');
        optionThreePriority.textContent = 'High';
        optionThreePriority.setAttribute('value', 'High');
    
        // Stitch options to select.
        taskPriorityInput.append(optionOnePriority, optionTwoPriority, optionThreePriority);

        // Choose project choice.
        let taskProjectChoiceLabel = document.createElement('label');
        taskProjectChoiceLabel.setAttribute('for', 'project-choice');
        taskProjectChoiceLabel.textContent = 'Project';
        let taskProjectChoiceInput = document.createElement('select');
        taskProjectChoiceInput.setAttribute('id', 'project-choice');
        taskProjectChoiceInput.setAttribute('name', 'project-choice');

        // Project options.
        // Default project fallback if none chosen.
        let defaultOption = document.createElement('option');
        defaultOption.textContent = 'Select a project';
        defaultOption.setAttribute('value', 0);
        defaultOption.setAttribute('selected', true);
        taskProjectChoiceInput.appendChild(defaultOption);
        // Provide available projects as options.
        const availableProjects = projectsBoard.getProjectsBoard();
        for (let projectIndex = 0; projectIndex < availableProjects.length; projectIndex++) {
            const projectAsAnOption = document.createElement('option');
            projectAsAnOption.textContent = availableProjects[projectIndex].projectName;
            projectAsAnOption.setAttribute('value', projectIndex);
            taskProjectChoiceInput.append(projectAsAnOption);
        }

        // Create task due date label and input.
        let taskDueDateLabel = document.createElement('label');
        taskDueDateLabel.setAttribute('for', 'due-date');
        taskDueDateLabel.textContent = 'Due:';
        let taskDueDateInput = document.createElement('input');
        taskDueDateInput.setAttribute('type', 'date');
        taskDueDateInput.setAttribute('id', 'due-date');
        taskDueDateInput.setAttribute('name', 'due-date');
    
        // Isolate middle section for styling.
        // Label.
        let taskDetailsLabelHolder = document.createElement('div');
        taskDetailsLabelHolder.setAttribute('class', 'details-holder');
        taskDetailsLabelHolder.append(taskAssigneeLabel, taskStatusLabel, taskPriorityLabel, taskProjectChoiceLabel, taskDueDateLabel);
        // Inputs.
        let taskDetailsInputHolder = document.createElement('div');
        taskDetailsInputHolder.setAttribute('class', 'details-input');
        taskDetailsInputHolder.append(taskAssigneeInput, taskStatusInput, taskPriorityInput, taskProjectChoiceInput, taskDueDateInput);
    
        // Overall section stitch.
        taskDetails.append(taskDetailsLabelHolder, taskDetailsInputHolder);
    
        // Create task description label and input.
        let descriptionHolder = document.createElement('div');
        descriptionHolder.setAttribute('class', 'task-description');
    
        // Create task description label and input.
        let taskDescriptionHeading = document.createElement('h1');
        taskDescriptionHeading.textContent = 'About this task';
        let taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.appendChild(taskDescriptionHeading)
        taskDescriptionLabel.setAttribute('for', 'task-description');
        let taskDescriptionInput = document.createElement('textarea');
        taskDescriptionInput.setAttribute('id', 'task-description');
        taskDescriptionInput.setAttribute('name', 'task-description');
        taskDescriptionInput.setAttribute('cols', '50');
        taskDescriptionInput.setAttribute('rows', '8');
        taskDescriptionInput.setAttribute('wrap', 'hard');
        
        // Stitch description up.
        descriptionHolder.append(taskDescriptionLabel, taskDescriptionInput);
    
        // Create buttons for submit or exit.
        let formButtons = document.createElement('div');
        formButtons.setAttribute('class', 'button-holders');
        // Submit button
        let submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('class', 'submit-task');
        // Exit button.
        let exitButton = document.createElement('button');
        exitButton.textContent = 'Return';
        exitButton.setAttribute('type', 'button');
        exitButton.setAttribute('class', 'exit-task-form');
        // Consolidate buttons
        formButtons.append(submitButton, exitButton);
    
        // Consolidate form elements.
        taskForm.append(nameHolder, taskDetails, descriptionHolder, formButtons);
        taskCreationContentHolder.appendChild(taskForm);
    
        return taskCreationContentHolder;
    }   
}

export { ProjectStuffCreator };