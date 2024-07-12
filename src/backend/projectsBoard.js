import { 
    projectGenerator, 
    projectGeneratorTwo, 
    projectGeneratorThree, 
    taskGenerator, 
    availabilityChecker 
} from "../resources/utitilityFunctions";

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
    };

    // Add a new project to my board.
    const addNewProjectToBoard = (project) => {
        myProjects.push(project);
    };

    // Add task to default project, or choosen one.
    const addTaskToProject = (projectChoiceViaIndex = 0, task) => {
        let choosenProject = myProjects[projectChoiceViaIndex];
        choosenProject.addNewTaskToProject(task);
    };

    // View tasks in each project.
    const showTasksInChosenProject = (projectIndex) => {
        if (availabilityChecker(projectIndex, myProjects)) {
            console.log("Project does not exist");
            return;
        }

        console.log(`Viewing tasks in project number: ${parseInt(projectIndex) + 1}`);
        myProjects[projectIndex].printTasksInProject();
    };

    // Visualize specific task in specific project.
    const showSpecificTaskInSpecificProject = (projectIndex, taskIndex) => {
        if (availabilityChecker(projectIndex, myProjects)) {
            console.log("Project does not exist");
            return;
        }

        console.log(`Logging task in project ${projectIndex + 1}`);
        let targetProject = myProjects[projectIndex];
        targetProject.printSpecificTask(taskIndex);
    };

    // Update/Edit specific task.
    const updateSpecificTaskInChosenProject = (projectIndex, taskIndex, newTaskDetails) => {
        if (availabilityChecker(projectIndex, myProjects)) {
            console.log("Can't update task in non existent project");
            return;
        }
        
        console.log(`Updating task in project: ${projectIndex + 1}`);
        myProjects[projectIndex].updateSpecificTask(taskIndex, newTaskDetails);
    }

    // Delete a project from board.
    const deleteProjectFromBoard = (projectIndex) => {
        if (availabilityChecker(projectIndex, myProjects)) {
            console.log("Cant delete non existent project");
            return;
        }
    
        console.log(`Existing projects before deleting: ${myProjects.length}`);
        console.log(`Deleting project number: ${parseInt(projectIndex) + 1}`);
    
        myProjects.splice(projectIndex, 1);
        console.log(`Projects left: ${myProjects.length}`);
    };

    // Delete specific task in specific project.
    const deleteSpecificTask = (projectIndex, taskIndex) => {
        if (availabilityChecker(projectIndex, myProjects)) {
            console.log("Cant find this project!");
            return;
        }

        console.log(`Deleting task in project: ${parseInt(projectIndex) + 1}`);
        myProjects[projectIndex].deleteTaskFromProject(taskIndex);
    };

    return {
        getProjectsBoard,
        printProjectsBoard,
        printAllTasksInProjectBoard,
        addNewProjectToBoard,
        addTaskToProject,
        showTasksInChosenProject,
        showSpecificTaskInSpecificProject,
        updateSpecificTaskInChosenProject,
        deleteProjectFromBoard,
        deleteSpecificTask,
    };
})();

// Add two duplicate projects for testing.
projectsBoard.addNewProjectToBoard(projectGenerator());
projectsBoard.addNewProjectToBoard(projectGeneratorTwo());
projectsBoard.addNewProjectToBoard(projectGeneratorThree());

// Create new tasks, add it to my default project.
projectsBoard.addTaskToProject(0, taskGenerator());
projectsBoard.addTaskToProject(0, taskGenerator());

// Create new tasks for my second project.
projectsBoard.addTaskToProject(1, taskGenerator());
projectsBoard.addTaskToProject(1, taskGenerator());

export { projectsBoard };