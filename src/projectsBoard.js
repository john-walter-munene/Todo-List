import { Project, taskGenerator} from "./project";

// Create a projects board to control all my projects.
const projectsBoard = (function ProjectsBoard() {
    // Create a store for my projects.
    const myProjects = [];

    // Get projects board.
    const getProjectsBoard = () => myProjects;

    // Print projects board.
    const printProjectsBoard = () => console.log(myProjects);

    // Add a new project to my board.
    const addProjectToBoard = (project) => {
        myProjects.push(project);
        return;
    }

    // Add task to default project.
    const addTaskToProject = (projectChoiceViaIndex = 0, task) => {
       myProjects[projectChoiceViaIndex].addNewTaskToProject(task);
       return;
    }

    return {
        getProjectsBoard,
        addProjectToBoard,
        printProjectsBoard,
        addTaskToProject,
    }
})();

// Create a default project, all tasks to be added here, if choice project not specified.
function projectGenerator() {
    let newProject = new Project(
        "Sample Project: Performance",
        "Planning",
        "John Walter",
        "June 26, 2024",
        "Low",
        "50%",
    );
    return newProject;
}
projectsBoard.addProjectToBoard(projectGenerator());

// Create a new task, add it to my default project.
projectsBoard.addTaskToProject(0, taskGenerator());
projectsBoard.addTaskToProject(0, taskGenerator());

let tasksInMyProject = projectsBoard.getProjectsBoard()[0].getProjectTasks().length;
console.log("Number of tasks in the project:", tasksInMyProject);
console.log("Project details:", projectsBoard.getProjectsBoard()[0]);

export { projectsBoard };