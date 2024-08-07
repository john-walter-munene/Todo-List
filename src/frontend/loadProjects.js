import { taskMasterController } from '../front-back-link/decoupler';
import { priorityStyling, statusStyling } from '../resources/utitilityFunctions';
import { ExpandProjectSeeContent } from './expandProjectStuff';
import { projectWorkFlowManager } from './projectWorkflow';

// Handles projects UI
import projectsIconImage from '../images/project.svg';

function createProjectsHeading() {
    // Create a heading holder
    let projectsHeadingContent = document.createElement('div');
    projectsHeadingContent.setAttribute('class', 'projects-heading');

    /// Create an image and H1 cage.
    let topHeadsCage = document.createElement('div');
    topHeadsCage.setAttribute('class', 'head-cage');

    // Get image and add it to cage.
    let projectIcon = new Image();
    projectIcon.src = projectsIconImage;
    projectIcon.setAttribute('class', 'project-icon');

    // Create H1, set its attributes and add its content.
    let projectsPageHead = document.createElement('h2');
    projectsPageHead.setAttribute('class', 'projects-head');
    projectsPageHead.textContent = 'Projects';

    // Consolidate Head lead content
    topHeadsCage.appendChild(projectIcon);
    topHeadsCage.appendChild(projectsPageHead);

    // Create a buttons holder, buttons, set attributes and add content.
    let projectsNavigationsHolder = document.createElement('div');
    projectsNavigationsHolder.setAttribute('class', 'projects-nav');

    // All projects button
    let allProjectsButton = document.createElement('button');
    allProjectsButton.setAttribute('class', 'all-projects');
    allProjectsButton.setAttribute('id', 'active');
    allProjectsButton.textContent = 'All projects';

    // Board view button
    let boardViewButton = document.createElement('button');
    boardViewButton.setAttribute('class', 'board');
    boardViewButton.textContent = 'Board';

    // Tasks button
    let taskPageButton = document.createElement('button');
    taskPageButton.setAttribute('class', 'tasks-page');
    taskPageButton.textContent = 'Tasks';

    // New Projects button
    let newProjectButton = document.createElement('button');
    newProjectButton.setAttribute('class', 'new-project');
    newProjectButton.textContent = 'New';

    // Add buttons to their holder
    projectsNavigationsHolder.append(allProjectsButton, boardViewButton, taskPageButton, newProjectButton);

    // Add heading and navigations to overall holder.
    projectsHeadingContent.appendChild(topHeadsCage);
    projectsHeadingContent.appendChild(projectsNavigationsHolder);

    // Return projects heading component.
    return projectsHeadingContent;
}

class ShowProject {
    constructor(project) {
        this.project = project;
    }

    createProjectComponent() {
        // Create a new row for each project.
        let projectRow = document.createElement('tr');

        // Create project content holders (in each row).
        let projectNameBox = document.createElement('td');
        let projectStatusBox = document.createElement('td');
        let projectOwnerBox = document.createElement('td');
        let projectDatesBox = document.createElement('td');
        let projectPriorityBox = document.createElement('td');
        
        // Add content to each section.
        projectNameBox.textContent = this.project.projectName;
        projectStatusBox.textContent = this.project.status;
        projectOwnerBox.textContent = this.project.owner;
        projectDatesBox.textContent = `${this.project.startDate} → ${this.project.dueDate}`;
        projectPriorityBox.textContent = this.project.projectPriority;

        // Priority and Status styling.
        priorityStyling(projectPriorityBox);
        statusStyling(projectStatusBox);

        // Button to view expand a project.
        // Add button to project name box.
        let tasksInProjectButton = document.createElement('button');
        tasksInProjectButton.textContent = 'OPEN';
        tasksInProjectButton.setAttribute('class', 'expand-project');
        projectNameBox.appendChild(tasksInProjectButton);

        // Expand project on click.
        tasksInProjectButton.addEventListener('click', () => viewProjectContent(tasksInProjectButton));

        // Add event listeners for hover effect.
        projectRow.addEventListener('mouseenter', () => {
            tasksInProjectButton.style.display = 'inline-block';
        });

        projectRow.addEventListener('mouseleave', () => {
            tasksInProjectButton.style.display = 'none';
        });

        // Add each content piece to the row.
        projectRow.append(projectNameBox, projectStatusBox, projectOwnerBox, projectDatesBox, projectPriorityBox);

        return projectRow;
    }
}

function displayProjects() {
    // Create a projects' holder.
    const myProjects = document.createElement('div');
    myProjects.setAttribute('class', 'my-projects');
    
    // Create a table for projects.
    const projectsTable = document.createElement('table');

    // Create table heading.
    const projectsTableHead = document.createElement('thead');
    const projectsTableHeadRow = document.createElement('tr');

    // Table heading items.
    const projectNameHead = document.createElement('th');
    const projectStatusHead = document.createElement('th');
    const projectOwnerHead = document.createElement('th');
    const projectDateHead = document.createElement('th');
    const ProjectPriorityHead = document.createElement('th');

    // Add specific content to the table headers.
    projectNameHead.textContent = 'Project name';
    projectStatusHead.textContent = 'Status';
    projectOwnerHead.textContent = 'Owner';
    projectDateHead.textContent = 'Dates';
    ProjectPriorityHead.textContent = 'Priority';

    // Consolidate heading items.
    projectsTableHeadRow.append(projectNameHead, projectStatusHead, projectOwnerHead, projectDateHead, ProjectPriorityHead);
    projectsTableHead.appendChild(projectsTableHeadRow);

    // Add header into the overall table.
    projectsTable.appendChild(projectsTableHead);

    // Create projects table body.
    const projectsTableBody = document.createElement('tbody');

    // Add projects to table;
    const availableProjects = taskMasterController.getProjectsBoard();
    for (let counter = 0; counter < availableProjects.length; counter++) {
        const currentProject = availableProjects[counter];
        const currentProjectUIComponent = new ShowProject(currentProject).createProjectComponent();
        currentProjectUIComponent.setAttribute('project-index', counter);
        projectsTableBody.appendChild(currentProjectUIComponent);
    }

    projectsTable.appendChild(projectsTableBody);
    myProjects.appendChild(projectsTable);

    // Alert user if no projects available.
    if (availableProjects.length === 0) {
        myProjects.removeChild(projectsTable);
        const zeroProjectsAlert = document.createElement('p');
        zeroProjectsAlert.setAttribute('class', 'zero-projects');
        zeroProjectsAlert.textContent = 'Ooops! No projects available. Could you create one?';
        myProjects.appendChild(zeroProjectsAlert);
    }
    
    return myProjects;
}

function viewProjectContent(openButton) {
    // Get project to view.
    let projectRow = openButton.parentElement.parentElement;
    let projectIndex = projectRow.getAttribute('project-index');
    openProjectByIndex(projectIndex);
}

function openProjectByIndex(projectIndex) {
    // Get content holder
    let contentHolder = document.querySelector('#content');

    // Clear any existing project.
    projectWorkFlowManager.closeAProject();

    // Get project to view
    let clickedProject = taskMasterController.getProjectsBoard()[projectIndex];

    // Create project details UI component and add it to the screen
    let clickedProjectContent = new ExpandProjectSeeContent(clickedProject).visualizeProjectContent(projectIndex);
    contentHolder.appendChild(clickedProjectContent);

    // Add event listeners for newly opened project.
    projectWorkFlowManager.addOpenProjectEventListeners();
}

export { createProjectsHeading, displayProjects, openProjectByIndex };