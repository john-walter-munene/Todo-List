import { availabilityChecker } from "./utitilityFunctions";
import { format } from "date-fns";
// Projects Generator
class Project {
    constructor(projectName, status, owner, startDate, dueDate, projectPriority, projectSummary) {
        this.projectName = projectName;
        this.status = status;
        this.owner = owner;
        this.startDate = format(new Date(startDate), "MMMM dd, yyyy");
        this.dueDate = format(new Date(dueDate), "MMMM dd, yyyy");
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
    }

    // Visualize all tasks in a project
    printTasksInProject() {
        this.projectTasks.forEach(task => console.log(task));
    }

    // Visualize specific task
    // Exit visualization if task not found
    printSpecificTask(taskIndex) {
        if (availabilityChecker(taskIndex, this.projectTasks)) {
            console.log("Can't delete non-existent task!");
            return;
        }

        console.log(`Logging task: ${taskIndex + 1}`);
        console.log(this.projectTasks[taskIndex]);
    }

    // Update specific task.
    updateSpecificTask(taskIndex, newTaskDetails) {
        if (availabilityChecker(taskIndex, this.projectTasks)) {
            console.log("Can't update non existent task");
            return;
        }

        console.log(`Updating task: ${taskIndex + 1}`);
        this.projectTasks[taskIndex].updateTaskDetails(newTaskDetails);
    }

    // Delete specific task.
    // Exit delete if task not found.
    deleteTaskFromProject(taskIndex) {
        if (availabilityChecker(taskIndex, this.projectTasks)) {
            console.log("Can't delete non-existent task!");
            return;
        }

        console.log(`Deleting task number: ${taskIndex + 1}`);
        this.projectTasks.splice(taskIndex, 1);
    }
}

export { Project };