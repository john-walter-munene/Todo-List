import { format } from "date-fns";

// Task generator.
class Task {
    constructor(taskTitle, taskAssignee, taskStatus, taskDescription, dueDate, taskPriority) {
        this.taskTitle = taskTitle;
        this.taskAssignee = taskAssignee;
        this.taskStatus = taskStatus;
        this.taskDescription = taskDescription;
        this.dueDate = format(new Date(dueDate), "MMMM dd, yyyy");
        this.taskPriority = taskPriority;
    }

    updateTaskDetails(newTaskDetails) {
        this.taskTitle = newTaskDetails.taskTitle;
        this.taskAssignee = newTaskDetails.taskAssignee;
        this.taskStatus = newTaskDetails.taskStatus;
        this.taskDescription = newTaskDetails.taskDescription;
        this.dueDate = format(new Date(newTaskDetails.dueDate), "MMMM dd, yyyy");
        this.taskPriority = newTaskDetails.taskPriority;
    }
}

export { Task };