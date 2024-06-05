import { projectGenerator, taskGenerator, availabilityChecker } from "./utitilityFunctions";

// Create a projects board to control all my projects (single instance).
const projectsBoard = (function ProjectsBoard() {

    // Create a store for my projects.
    const myProjects = [];

    // Get projects board.
    const getProjectsBoard = () => myProjects;

    // Print projects board.
    const printProjectsBoard = () => console.log(myProjects);

    // View all tasks in all projects.
     const printAllTasksInProjectBoard = () => {
        console.log("Viewing all tasks in projects board...");
        myProjects.forEach(project => project.printTasksInProject());
        return;
    };

    // Add a new project to my board.
    const addNewProjectToBoard = (project) => {
        myProjects.push(project);
        return;
    };

    // Add task to default project.
    const addTaskToProject = (projectChoiceViaIndex = 0, task) => {
       myProjects[projectChoiceViaIndex].addNewTaskToProject(task);
       return;
    };

    // Delete a project from board.
    const deleteProjectFromBoard = (projectIndex) => {
        if (availabilityChecker(projectIndex, myProjects,)) {
            console.log("Cant delete non existent project");
            return;
        }

        console.log(`Existing projects before deleting: ${myProjects.length}`);
        console.log(`Deleting project number: ${projectIndex + 1}`);

        myProjects.splice(projectIndex, 1,);
        console.log(`Projects left: ${myProjects.length}`);
        return;
    };

    // View tasks in each project.
    const showTasksInChoseProject = (projectIndex) => {
        if (availabilityChecker(projectIndex, myProjects,)) {
            console.log("Project does not exist")
            return;
        }

        console.log(`Viewing tasks in project number: ${projectIndex + 1}`);
        myProjects[projectIndex]. printTasksInProject();
        return;
    }

    // Visualize specific task in specific project.
    const showSpecificTaskInSpecificProject = (projectIndex, taskIndex) => {
        if (availabilityChecker(projectIndex, myProjects,)) {
            console.log("Project does not exist");
            return;
        }

        console.log(`Logging task in project ${projectIndex + 1}`);
        let targetProject = myProjects[projectIndex];
        targetProject.printSpecificTask(taskIndex);
        return;
    };

    // Delete specific task in specific project.
    const deleteSpecificTask = (projectIndex, taskIndex) => {
        if (availabilityChecker(projectIndex, myProjects,)) {
            console.log("Cant find this project!");
            return;
        }

        console.log(`Deleting task in project: ${projectIndex + 1}`);
        myProjects[projectIndex].deleteTaskFromProject(taskIndex);
        return;
    };

    return {
        getProjectsBoard,
        printProjectsBoard,
        printAllTasksInProjectBoard,
        addNewProjectToBoard,
        addTaskToProject, 
        deleteProjectFromBoard,
        showTasksInChoseProject,
        showSpecificTaskInSpecificProject,
        deleteSpecificTask,
    };
})();



// Add two duplicate projects for testing.
projectsBoard.addNewProjectToBoard(projectGenerator());
projectsBoard.addNewProjectToBoard(projectGenerator());

// Create a new tasks, add it to my default project.
projectsBoard.addTaskToProject(0, taskGenerator());
projectsBoard.addTaskToProject(0, taskGenerator());

// Create new tasks for my second project.
projectsBoard.addTaskToProject(1, taskGenerator());
projectsBoard.addTaskToProject(1, taskGenerator());

export { projectsBoard };