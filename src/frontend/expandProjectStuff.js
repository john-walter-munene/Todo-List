import { priorityStyling, statusStyling } from "../resources/utitilityFunctions";
import { projectWorkFlowManager } from "./projectWorkflow";

// Create ros for tasks.
class OutLineTask {
    constructor(task) {
        this.task = task;
    }

    createTaskComponent() {
        // Create a task row.
        let taskRow = document.createElement('tr');

        // Content holders
        let taskNameBox = document.createElement('td');
        let taskDueDateBox = document.createElement('td');
        let taskPriorityBox = document.createElement('td');

        // Populate content holders.
        taskNameBox.textContent = this.task.taskTitle
        taskDueDateBox.textContent = this.task.dueDate;
        taskPriorityBox.textContent = this.task.taskPriority;

        // Priority and Status styling.
        priorityStyling(taskPriorityBox);

        // Add each content piece to the row.
        taskRow.append(taskNameBox, taskDueDateBox, taskPriorityBox);

        return taskRow;
    }
}

// Create an expanded view of the project.
class ExpandProjectSeeContent {
    constructor(projectToView) {
        this.projectToView = projectToView;
    }

    visualizeProjectContent() {
        // Overall project container.
        let projectContainer = document.createElement('div');
        projectContainer.setAttribute('class', 'project-container');

        // Project contents holder.
        let projectContents = document.createElement('div');
        projectContents.setAttribute('class', 'project-view-content');

        // Project Name.
        let projectHeading = document.createElement('h1');
        projectHeading.setAttribute('class', 'view-h1');
        projectHeading.textContent = this.projectToView.projectName;

        // Project Details.
        let projectDetailsContainer = document.createElement('div');
        projectDetailsContainer.setAttribute('class', 'project-details-container');

        // Project requirements.
        let projectRequirements = document.createElement('ul');
        projectRequirements.setAttribute('class','pjt-req-view');
        let projectStatus = document.createElement('li');
        let projectOwner = document.createElement('li');
        let projectDates = document.createElement('li');
        let projectPriority = document.createElement('li');

        // Project requirements content.
        projectStatus.textContent = 'Status';
        projectOwner.textContent = 'Owner';
        projectDates.textContent = 'Dates';
        projectPriority.textContent = 'Priority';

        // Stitch Project requirements.
        projectRequirements.append(projectStatus, projectOwner, projectDates, projectPriority);

        // Project requirement details.
        let projectRequirementsDetails = document.createElement('ul');
        projectRequirementsDetails.setAttribute('class', 'pjt-req-dtls-view');
        let projectStatusDetails = document.createElement('li');
        let projectOwnerDetails = document.createElement('li');
        let projectDatesDetails = document.createElement('li');
        let projectPriorityDetails = document.createElement('li');

        // Project requirements details content.
        projectStatusDetails.textContent = this.projectToView.status;
        projectOwnerDetails.textContent = this.projectToView.owner;
        projectDatesDetails.textContent = `${this.projectToView.startDate} → ${this.projectToView.dueDate}`;
        projectPriorityDetails.textContent = this.projectToView.projectPriority;

        // Priority and Status styling.
        priorityStyling(projectPriorityDetails);
        statusStyling(projectStatusDetails);

        // Stitch  project requirement details.
        projectRequirementsDetails.append(projectStatusDetails, projectOwnerDetails, projectDatesDetails, projectPriorityDetails);
        
        // Bind middle section.
        projectDetailsContainer.append(projectRequirements, projectRequirementsDetails);

        // Project summary.
        let projectDescriptionContainer = document.createElement('div');
        projectDescriptionContainer.setAttribute('class', 'about-project');
        let projectDescriptionHeading = document.createElement('h2');
        projectDescriptionHeading.textContent = 'About this project';
        let projectDescriptionText = document.createElement('p');
        projectDescriptionText.textContent = this.projectToView.projectSummary;
        projectDescriptionContainer.append(projectDescriptionHeading, projectDescriptionText);

        // Tasks.
        let projectTasksContainer = document.createElement('div');
        projectTasksContainer.setAttribute('class', 'task-view');
        let projectTasksHeading = document.createElement('h2')
        projectTasksHeading.textContent = 'Project Tasks';

        // Table for tasks.
        let projectTasksTable = document.createElement('table');
        let projectTasksTableHead = document.createElement('thead');
        let projectTasksTableHeadRow = document.createElement('tr');

        // Heading elements.
        let taskNameHead = document.createElement('th');
        let taskDueDateHead = document.createElement('th');
        let taskPriorityHead = document.createElement('th');

        // Heading elements content.
        taskNameHead.textContent = 'Task name';
        taskDueDateHead.textContent = 'Due';
        taskPriorityHead.textContent = 'Priority';

        // Consolidate heading items.
        projectTasksTableHeadRow.append(taskNameHead, taskDueDateHead, taskPriorityHead);
        projectTasksTableHead.appendChild(projectTasksTableHeadRow);
        projectTasksTable.appendChild(projectTasksTableHead);

        // Tasks table body.
        let projectTasksTableBody = document.createElement('tbody');
        // Add tasks in the project to table body.
        const availableTasksInProject = this.projectToView.projectTasks;
        for (let taskCounter = 0; taskCounter < availableTasksInProject.length; taskCounter++) {
            const currentTask = availableTasksInProject[taskCounter];
            const taskUIComponent = new OutLineTask(currentTask).createTaskComponent();
            projectTasksTableBody.appendChild(taskUIComponent);
        }

        // Add table body to table.
        projectTasksTable.appendChild(projectTasksTableBody);

        // Consolidate tasks section.
        projectTasksContainer.append(projectTasksHeading, projectTasksTable);

        // Buttons to do stuff with projects.
        let projectButtonsHolder = document.createElement('div');
        projectButtonsHolder.setAttribute('class', 'pjt-btns-holder');

        // Close project.
        let closeProjectButton = document.createElement('button');
        closeProjectButton.setAttribute('class', 'close-project');
        closeProjectButton.textContent = 'Close';

        // Edit Project.
        let editProjectButton = document.createElement('button');
        editProjectButton.setAttribute('class', 'edit-project');
        editProjectButton.textContent = 'Edit';

        // Delete Project.
        let deleteProjectButton = document.createElement('button');
        deleteProjectButton.setAttribute('class', 'delete-project');
        deleteProjectButton.textContent = 'Delete';

        // Add actions to buttons.
        closeProjectButton.addEventListener('click', () => closeOpenProject());

        // Put buttons in their holder.
        projectButtonsHolder.append(closeProjectButton, editProjectButton, deleteProjectButton);

        // Bind Project view.
        projectContents.append(projectHeading, projectDetailsContainer, projectDescriptionContainer, projectTasksContainer, projectButtonsHolder);
        
        // Remove task heading if tasks not available yet.
        if (availableTasksInProject.length === 0) projectContents.removeChild(projectTasksContainer);

        // wrap up.
        projectContainer.appendChild(projectContents);

        return projectContainer;
    }
}

function closeOpenProject() {
    projectWorkFlowManager.closeAProject();
}

export { ExpandProjectSeeContent };