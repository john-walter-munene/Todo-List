import { screenController } from './screenController';

// Handles projects UI
import projectsIconImage from './images/project.svg';

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
    projectsNavigationsHolder.appendChild(allProjectsButton);
    projectsNavigationsHolder.appendChild(boardViewButton);
    projectsNavigationsHolder.appendChild(taskPageButton);
    projectsNavigationsHolder.appendChild(newProjectButton);

    // Add heading and navigations to overall holder.
    projectsHeadingContent.appendChild(topHeadsCage);
    projectsHeadingContent.appendChild(projectsNavigationsHolder);

    // Return projects heading component.
    return projectsHeadingContent;
}

export { createProjectsHeading };