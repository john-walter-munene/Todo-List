import { projectsBoard } from '../backend/projectsBoard';
import { priorityStyling, statusStyling } from '../resources/utitilityFunctions';
import { ExpandedTaskSeeContent } from './expandTaskStuff';

// Handles Tasks UI
import taskIconImage from '../images/task.svg';

function createTasksHeading() {
    // Create a heading holder
    let tasksHeadingContent = document.createElement('div');
    tasksHeadingContent.setAttribute('class', 'tasks-heading');

    // Create an image and H1 cage.
    let topHeadsCage = document.createElement('div');
    topHeadsCage.setAttribute('class', 'head-cage');

    // Get image and add it to cage.
    let taskIcon = new Image();
    taskIcon.src = taskIconImage;
    taskIcon.setAttribute('class', 'task-icon');

    // Create a H1, set its attributes and content.
    let tasksPageHead = document.createElement('h2');
    tasksPageHead.setAttribute('class', 'tasks-head');
    tasksPageHead.textContent = 'Tasks';

    // Consolidate Task lead content
    topHeadsCage.append(taskIcon, tasksPageHead);

    // Create a buttons holder, buttons, set attributes and add content.
    let tasksNavigationHolder = document.createElement('div');
    tasksNavigationHolder.setAttribute('class', 'tasks-nav');

    // By project button.
    let byProjectButton = document.createElement('button');
    byProjectButton.setAttribute('class', 'by-project');
    byProjectButton.textContent = 'By project';

    // All tasks button.
    let allTasksButton = document.createElement('button');
    allTasksButton.setAttribute('class', 'all-tasks');
    allTasksButton.setAttribute('id', 'active');
    allTasksButton.textContent = 'All tasks';

    // Projects button
    let projectsPageButton = document.createElement('button');
    projectsPageButton.setAttribute('class', 'projects-page');
    projectsPageButton.textContent = 'Projects';

    // New Tasks button.
    let newTasksButton = document.createElement('button');
    newTasksButton.setAttribute('class', 'new-task');
    newTasksButton.textContent = 'New';

    // Add buttons to their holder.
    tasksNavigationHolder.append(byProjectButton, allTasksButton, projectsPageButton, newTasksButton);

    // Add heading and navigations to overall holder.
    tasksHeadingContent.append(topHeadsCage, tasksNavigationHolder);

    // Return tasks heading component.
    return tasksHeadingContent;
}

class ShowTask{
    constructor(task) {
        this.task = task;
    }

    createTaskComponent(projectName) {
        // Create a new row for each task.
        let taskRow = document.createElement('tr');

        // Create task content holders (in each row).
        let taskNameBox = document.createElement('td');
        let taskStatusBox = document.createElement('td');
        let taskAssigneeBox = document.createElement('td');
        let taskDueDateBox = document.createElement('td');
        let taskPriorityBox = document.createElement('td');
        let taskProjectBox = document.createElement('td');

        // Add content to each holder.
        taskNameBox.textContent = this.task.taskTitle;
        taskStatusBox.textContent = this.task.taskStatus;
        taskAssigneeBox.textContent = this.task.taskAssignee;
        taskDueDateBox.textContent = this.task.dueDate;
        taskPriorityBox.textContent = this.task.taskPriority;
        taskProjectBox.textContent = projectName;

        // Priority and Status styling.
        priorityStyling(taskPriorityBox);
        statusStyling(taskStatusBox);

        // Button to expand a task.
        // Add button to task name.
        let expandTaskViewButton = document.createElement('button');
        expandTaskViewButton.setAttribute('class', 'expand-task');
        expandTaskViewButton.textContent = 'OPEN';
        taskNameBox.append(expandTaskViewButton);

        // Expand task on click.
        expandTaskViewButton.addEventListener('click', () => viewTaskContent(expandTaskViewButton));

        // Add event listener for hover effect.
        taskRow.addEventListener('mouseenter', () => {
            expandTaskViewButton.style.display = 'inline-block';
        });

        taskRow.addEventListener('mouseleave', () => {
            expandTaskViewButton.style.display = 'none';
        });

        // Add each content piece to the row.
        taskRow.append(taskNameBox, taskStatusBox, taskAssigneeBox, taskDueDateBox, taskPriorityBox, taskProjectBox);

        return taskRow;
    }
}

function displayTasks() {
    // Create tasks holder.
    const myTasks = document.createElement('div');
    myTasks.setAttribute('class', 'my-tasks');

    // Create a table for tasks.
    const tasksTable = document.createElement('table');

    // Create table heading
    const tasksTableHead = document.createElement('thead');
    const tasksTableHeadRow = document.createElement('tr');

    // Table heading elements
    const taskNameHead = document.createElement('th');
    const taskStatusHead = document.createElement('th');
    const taskAssigneeHead = document.createElement('th');
    const taskDueDateHead = document.createElement('th');
    const taskPriorityHead = document.createElement('th');
    const taskProjectHead = document.createElement('th');

    // Add content to table headers.
    taskNameHead.textContent = 'Task name';
    taskStatusHead.textContent = 'Status';
    taskAssigneeHead.textContent = 'Assignee';
    taskDueDateHead.textContent = 'Due';
    taskPriorityHead.textContent = 'Priority';
    taskProjectHead.textContent = 'Project';

    // Consolidate heading items.
    tasksTableHeadRow.append(taskNameHead, taskStatusHead, taskAssigneeHead, taskDueDateHead, taskPriorityHead, taskProjectHead);
    tasksTableHead.appendChild(tasksTableHeadRow);

    // Add header to overall table.
    tasksTable.appendChild(tasksTableHead);

    // Create tasks table body.
    const tasksTableBody = document.createElement('tbody');

    // Add all tasks to table.
    const availableProjects = projectsBoard.getProjectsBoard();
    let zeroTaskAlertCounter = 0;

    for (let projectCounter = 0; projectCounter < availableProjects.length; projectCounter++) {
        const currentProject = availableProjects[projectCounter];
        const currentProjectTasks = currentProject.getProjectTasks();
        for (let taskCounter = 0; taskCounter < currentProjectTasks.length; taskCounter++) {
            zeroTaskAlertCounter += 1;
            const projectNameForTask = currentProject.projectName; 
            const currentTask = currentProjectTasks[taskCounter];
            const currentTaskUIComponent = new ShowTask(currentTask).createTaskComponent(projectNameForTask);
            
            // Attach attributes for retieval while viewing.
            currentTaskUIComponent.setAttribute('project-index', projectCounter);
            currentTaskUIComponent.setAttribute('task-index', taskCounter);
            tasksTableBody.appendChild(currentTaskUIComponent);
        }
    }

    tasksTable.appendChild(tasksTableBody);
    myTasks.appendChild(tasksTable);

    // Alert user in no tasks available.
    if (availableProjects.length === 0) {
        myTasks.removeChild(tasksTable);
        const zeroTasksAlert = document.createElement('p');
        zeroTasksAlert.setAttribute('class', 'zero-tasks');
        zeroTasksAlert.textContent = 'Ooops! No Tasks Available. Please create a project then create tasks in it.';
        myTasks.appendChild(zeroTasksAlert);
    } else if (zeroTaskAlertCounter === 0){
        myTasks.removeChild(tasksTable);
        const zeroTasksAlert = document.createElement('p');
        zeroTasksAlert.setAttribute('class', 'zero-tasks');
        zeroTasksAlert.textContent = 'Ooops! No Tasks Available. Please create a task.';
        myTasks.appendChild(zeroTasksAlert);
    }

    return myTasks;
}

function viewTaskContent(openButton) {
    // Get content Holder.
    let contentHolder = document.querySelector('#content');

    // Get task to view.
    let taskRow = openButton.parentElement.parentElement;
    let taskProjectIndex = taskRow.getAttribute('project-index');
    let taskIndex = taskRow.getAttribute('task-index');
    let clickedTaskProject = projectsBoard.getProjectsBoard()[taskProjectIndex];
    let clickedTask = clickedTaskProject.projectTasks[taskIndex];
    
    // Create task details UI component and add it to screen.
    let clickedTaskContent = new ExpandedTaskSeeContent(clickedTask).visualizeTaskContent();

    // Attach project index and task index to component.
    clickedTaskContent.setAttribute('project-index', taskProjectIndex);
    clickedTaskContent.setAttribute('task-index', taskIndex);

    // Add Task Content to page.
    contentHolder.appendChild(clickedTaskContent);
}

export { createTasksHeading, displayTasks };