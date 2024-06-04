import { Task } from "./task";

// Projects Generator
class Project {
    constructor(projectName, status, owner, dueDate, projectPriority, completionStatus,) {
        this.projectName = projectName;
        this.status = status;
        this.owner = owner;
        this.dueDate = dueDate;
        this.projectPriority = projectPriority;
        this.completionStatus = completionStatus;
        this.projectTasks = [];
    }

    // addNewTaskToProject(taskTitle, taskAssignee, taskStatus, taskDescription, dueDate, taskPriority,) {
    //     let newTask = new Task(taskTitle, taskAssignee, taskStatus, taskDescription, dueDate, taskPriority,);
    //     this.projectTasks.push(newTask);
    //     return;
    // }
    getProjectTasks() {
        return this.projectTasks;
    }
    
    addNewTaskToProject(task) {
        this.projectTasks.push(task);
        return;
    }

    printTasksInProject() {
        this.projectTasks.forEach(task => console.log(task));
        return;
    }
}

function taskGenerator() {
    let newTask = new Task(
        "Write Project Proposal",
        "John Walter",
        "In progress",
        "This project proposal aims to achieve cross-functional alignment on investing in mobile performance in Q3.",
        "July 15, 2024",
        "High",
    );
    return newTask;
}
// newProject.projectTasks.push(myTask);
export { Project, taskGenerator };