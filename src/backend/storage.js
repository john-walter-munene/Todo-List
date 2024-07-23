import { Project } from './project';
import { Task } from './task';
import { projectGenerator } from '../resources/utitilityFunctions';

// Serialize a task object
function serializeTask(task) {
    return {
        taskTitle: task.taskTitle,
        taskAssignee: task.taskAssignee,
        taskStatus: task.taskStatus,
        taskDescription: task.taskDescription,
        dueDate: task.dueDate,
        taskPriority: task.taskPriority
    };
}

// Serialize a project object
function serializeProject(project) {
    return {
        projectName: project.projectName,
        status: project.status,
        owner: project.owner,
        startDate: project.startDate,
        dueDate: project.dueDate,
        projectPriority: project.projectPriority,
        projectSummary: project.projectSummary,
        projectTasks: project.getProjectTasks().map(serializeTask)
    };
}

// Deserialize a task object
function deserializeTask(taskObj) {
    return new Task(
        taskObj.taskTitle,
        taskObj.taskAssignee,
        taskObj.taskStatus,
        taskObj.taskDescription,
        taskObj.dueDate,
        taskObj.taskPriority
    );
}

// Deserialize a project object
function deserializeProject(projectObj) {
    const project = new Project(
        projectObj.projectName,
        projectObj.status,
        projectObj.owner,
        projectObj.startDate,
        projectObj.dueDate,
        projectObj.projectPriority,
        projectObj.projectSummary
    );
    project.projectTasks = projectObj.projectTasks.map(deserializeTask);
    return project;
}

// Save the projects board to local storage
function saveProjectsBoardToLocalStorage(projectsBoard) {
    const serializedProjects = projectsBoard.getProjectsBoard().map(serializeProject);
    localStorage.setItem('projectsBoard', JSON.stringify(serializedProjects));
}

// Load the projects board from local storage
function loadProjectsBoardFromLocalStorage(projectsBoard) {
    const projectsData = JSON.parse(localStorage.getItem('projectsBoard'));
    if (projectsData && projectsData.length > 0) {
        projectsData.forEach(projectObj => {
            projectsBoard.addNewProjectToBoard(deserializeProject(projectObj));
        });
    } else {
        // Add the default project if no projects are found, save board instance.
        projectsBoard.addNewProjectToBoard(projectGenerator());
        saveProjectsBoardToLocalStorage(projectsBoard);
    }
}

export { saveProjectsBoardToLocalStorage, loadProjectsBoardFromLocalStorage };