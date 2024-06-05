import { availabilityChecker } from "./utitilityFunctions";

// Projects Generator
class Project {
    constructor(projectName, status, owner, dueDate, projectPriority, projectSummary,) {
        this.projectName = projectName;
        this.status = status;
        this.owner = owner;
        this.dueDate = dueDate;
        this.projectPriority = projectPriority;
        this.projectSummary = projectSummary;
        this.projectTasks = [];
    }

    // Get all tasks in a project
    getProjectTasks() {
        return this.projectTasks;
    }
    
    // Add a new task to a project.
    addNewTaskToProject(task) {
        this.projectTasks.push(task);
        return;
    }
    // Visualize all tasks in a project
    printTasksInProject() {
        this.projectTasks.forEach(task => console.log(task));
        return;
    }

    // Visualize specific task
    printSpecificTask(taskIndex) {
        if (availabilityChecker(taskIndex, this.projectTasks,)) {
            console.log("Can't delete non-existent task!");
            return;
        }

        console.log(`Logging task: ${taskIndex + 1}`);
        console.log(this.projectTasks[taskIndex]);
    }

    deleteTaskFromProject(taskIndex) {
        if (availabilityChecker(taskIndex, this.projectTasks,)) {
            console.log("Cant delete non existent task!");
            return;
        }

        console.log(`Deleting task number: ${taskIndex + 1}`);
        this.projectTasks.splice(taskIndex, 1,);
        return; 
    }
}

export { Project };