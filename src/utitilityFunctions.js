import { Task } from "./task";
import { Project } from "./project";

// Create a default project, all tasks to be added here, if choice project not specified.
function projectGenerator() {
    let newProject = new Project(
        "Sample Project: Performance",
        "Planning",
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
        "In progress",
        "This project proposal aims to achieve cross-functional alignment on investing in mobile performance in Q3.",
        "July 15, 2024",
        "High"
    );
    return newTask;
}

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

export { 
    projectGenerator, 
    taskGenerator, 
    availabilityChecker, 
    taskUpdater,
};