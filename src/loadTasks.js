import { screenController } from './screenController';

// Handles Tasks UI
import taskIconImage from './images/task.svg';

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
    topHeadsCage.appendChild(taskIcon);
    topHeadsCage.appendChild(tasksPageHead);

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
    tasksNavigationHolder.appendChild(byProjectButton);
    tasksNavigationHolder.appendChild(allTasksButton);
    tasksNavigationHolder.appendChild(projectsPageButton);
    tasksNavigationHolder.appendChild(newTasksButton);

    // Add heading and navigations to overall holder.
    tasksHeadingContent.appendChild(topHeadsCage);
    tasksHeadingContent.appendChild(tasksNavigationHolder);

    // Return tasks heading component.
    return tasksHeadingContent;
}

export { createTasksHeading };