import { priorityStyling, statusStyling } from "../resources/utitilityFunctions";
import { taskWorkFlowManager } from "./taskWorkflow";

// Create expanded view for tasks.
class ExpandedTaskSeeContent {
    constructor(taskToView) {
        this.taskToView = taskToView;
    }

    visualizeTaskContent () {
        // Overall task container.
        let taskContainer = document.createElement('div');
        taskContainer.setAttribute('class', 'task-container');

        // Task contents holder.
        let taskContents = document.createElement('div');
        taskContents.setAttribute('class', 'task-view-content');

        // Task name.
        let taskHeading = document.createElement('h1');
        taskHeading.setAttribute('class', 'view-h1');
        taskHeading.textContent = this.taskToView.taskTitle;

        // Task details.
        let taskDetailsContainer = document.createElement('div');
        taskDetailsContainer.setAttribute('class', 'task-details-container');

        // Task requirements.
        let taskRequirements = document.createElement('ul');
        taskRequirements.setAttribute('class', 'tsk-req-view');
        let taskStatus = document.createElement('li');
        let taskAssignee = document.createElement('li');
        let taskDate = document.createElement('li');
        let taskPriority = document.createElement('li');

        // Task requirements content.
        taskStatus.textContent = 'Status';
        taskAssignee.textContent = 'Assignee';
        taskDate.textContent = 'Due';
        taskPriority.textContent = 'Priority';

        // Stitch task requirements.
        taskRequirements.append(taskStatus, taskAssignee, taskDate, taskPriority);

        // Task requirement details.
        let taskRequirementsDetails = document.createElement('ul');
        taskRequirementsDetails.setAttribute('class', 'tsk-req-dtls-view');
        let taskStatusDetails = document.createElement('li');
        let taskAssigneeDetails = document.createElement('li');
        let taskDateDetails = document.createElement('li');
        let taskPriorityDetails = document.createElement('li');
        
        // Task requirements details content.
        taskStatusDetails.textContent = this.taskToView.taskStatus;
        taskAssigneeDetails.textContent = this.taskToView.taskAssignee;
        taskDateDetails.textContent = this.taskToView.dueDate;
        taskPriorityDetails.textContent = this.taskToView.taskPriority;

        // Priority and status styling.
        priorityStyling(taskPriorityDetails);
        statusStyling(taskStatusDetails);

        // Stitch task requirements details
        taskRequirementsDetails.append(taskStatusDetails, taskAssigneeDetails, taskDateDetails, taskPriorityDetails);

        // Bind middle section.
        taskDetailsContainer.append(taskRequirements, taskRequirementsDetails);

        // Task summary.
        let taskDescriptionContainer = document.createElement('div');
        taskDescriptionContainer.setAttribute('class', 'about-task');
        let taskDescriptionHeading = document.createElement('h2');
        taskDescriptionHeading.textContent = 'About this task';
        let taskDescriptionText = document.createElement('p');
        taskDescriptionText.textContent = this.taskToView.taskDescription;
        taskDescriptionContainer.append(taskDescriptionHeading, taskDescriptionText);

        // Buttons to do stuff with tasks.
        let taskButtonsHolder = document.createElement('div');
        taskButtonsHolder.setAttribute('class', 'tsk-btns-holder');

        // Close task.
        let closeTaskButton = document.createElement('button');
        closeTaskButton.setAttribute('class', 'close-task');
        closeTaskButton.textContent = 'Close';

        // Edit task.
        let editTaskButton = document.createElement('button');
        editTaskButton.setAttribute('class', 'edit-task');
        editTaskButton.textContent = 'Edit';

        // Delete task.
        let deleteTaskButton = document.createElement('button');
        deleteTaskButton.setAttribute('class', 'delete-task');
        deleteTaskButton.textContent = 'Delete';

        // Add actions to buttons.
        closeTaskButton.addEventListener('click', () => closeOpenTask());

        // Put buttons in their holder.
        taskButtonsHolder.append(closeTaskButton, editTaskButton, deleteTaskButton);

        // Bind Task view.
        taskContents.append(taskHeading, taskDetailsContainer, taskDescriptionContainer, taskButtonsHolder);

        // Wrap up.
        taskContainer.appendChild(taskContents);

        return taskContainer;
    }
}

// Close open task.
function closeOpenTask() {
    taskWorkFlowManager.closeATask()
}

export { ExpandedTaskSeeContent };