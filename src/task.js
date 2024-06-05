// Task generator.
class Task {
    constructor(taskTitle, taskAssignee, taskStatus, taskDescription, dueDate, taskPriority,) {
        this.taskTitle = taskTitle;
        this.taskAssignee = taskAssignee;
        this.taskStatus = taskStatus;
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.taskPriority = taskPriority;
    }
}

export { Task };