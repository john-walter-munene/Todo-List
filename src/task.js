import { Notes } from "./notes";

// Task generator.
class Task {
    constructor(taskTitle, taskAssignee, taskStatus, taskDescription, dueDate, taskPriority,) {
        this.taskTitle = taskTitle;
        this.taskAssignee = taskAssignee;
        this.taskStatus = taskStatus;
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.taskPriority = taskPriority;
        this.taskNotes = new Notes();
    }
}

// newTask.taskNotes.addNotes("Goals", "Run a developer marathon.");
// for (let key in newTask) {
//     console.log(newTask[key]);
// }

// newTask.taskNotes.notePoints.forEach(noteItem => {
//     for (let note in noteItem) console.log(noteItem[note]);
// });

export { Task };