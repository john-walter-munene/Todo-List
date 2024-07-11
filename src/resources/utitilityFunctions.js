import { Task } from "../backend/task";
import { Project } from "../backend/project";

// Create a default project, all tasks to be added here, if choice project not specified.
function projectGenerator() {
    let newProject = new Project(
        "Sample Project: Performance",
        "Not Started",
        "John Walter",
        "May 30, 2024",
        "June 26, 2024",
        "Low",
        "I am your first project."
    );
    return newProject;
}

function projectGeneratorTwo() {
    let newProject = new Project(
        "Sample Project: Testing",
        "In Progress",
        "John Walter",
        "May 30, 2024",
        "June 26, 2024",
        "Low",
        "I am your first project."
    );
    return newProject;
}

function projectGeneratorThree() {
    let newProject = new Project(
        "Sample Project: Performance",
        "Done",
        "John Walter",
        "May 30, 2024",
        "June 26, 2024",
        "Low",
        "I am your first project."
    );
    return newProject;
}

// Create a task to test my works.
function taskGenerator() {
    let newTask = new Task(
        "Write Project Proposal",
        "John Walter",
        "Not Started",
        "This project proposal aims to achieve cross-functional alignment on investing in mobile performance in Q3.",
        "July 15, 2024",
        "High"
    );
    return newTask;
}

// Update a task.
function taskUpdater() {
    let updatedTask = new Task(
        "Rewrite Project Proposal",
        "Munene Njeru",
        "Planning",
        "This project needs to be updated to meet the new Catalyst requirements.",
        "July 15, 2024",
        "Medium"
    );
    return updatedTask;
}

// Test for task or project presence.
function availabilityChecker(itemIndex, myArray) {
    return itemIndex > myArray.length - 1;
}

// Toggle Application theme.
function setTheme() {
    const root = document.documentElement;
    const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    
    // Remove the current theme class and add the new theme class
    root.classList.remove(currentTheme);
    root.classList.add(newTheme);
}

// Styling priority for projects and tasks.
function priorityStyling(priorityItem) {
    let priorityItemChecker = priorityItem.textContent;

    // Set class attribute for styling.
    if (priorityItemChecker === 'Low') priorityItem.classList.add('low');
    if (priorityItemChecker === 'Medium') priorityItem.classList.add('medium');
    if (priorityItemChecker === 'High') priorityItem.classList.add('high');
}

// Styling status for projects and tasks.
function statusStyling(statusItem) {
    let statusItemChecker = statusItem.textContent;

    // Set class attribute for styling.
    if (statusItemChecker === 'Not Started') statusItem.classList.add('not-started');
    if (statusItemChecker === 'In Progress') statusItem.classList.add('in-progress');
    if (statusItemChecker === 'Done') statusItem.classList.add('done');
}

export { 
    projectGenerator, 
    projectGeneratorTwo,
    projectGeneratorThree,
    taskGenerator, 
    availabilityChecker, 
    taskUpdater,
    setTheme,
    priorityStyling,
    statusStyling,
};