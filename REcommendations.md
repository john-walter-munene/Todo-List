# Issue with The Project close button

1. kindly fix the functionality of the ```close``` button: Doesn't close an already open project

# Responsiveness and Full-screen gradient bg
Kindly make the project responsive using css media wueries and adjust the bg gradient to cover the entire screen
for an open project.

# Typography and padding
Kindly use consistent padding and different font size for less important details eg ````May 30, 2024 → June 26, 2024``` Kindly touch on

<p>About this project
I am your first project.

Tasks
</p>


# Theme toggling functionality
I like the theme toggling functionality. I have some issues with the dark mode, Esp` when creating a new task, when selecting the ```Due Date``` and Select boxes in the section. Kindly consider adding a shadow on the boxes to make them more visible  and maybe a border on the text area .

# Breaking Down the src folder
Kindly re-organize the src folder into may be a logical manner eg, 

```bash

┌──(dreadnaught㉿machine)-[~/Downloads/java/Todo-List/src]
└─$ tree -d
.
├── fonts
│   └── Quattrocento_Sans
├── images
├── projects
├── resources
└── tasks

7 directories

```

Otherwise, i like the good work and the headings, At the time of this writing, I haven't looked at the code . That's where the perfectly round pearls are.

# Fixing the bug
I have a feeling that the problem might be in this piece of code, but i am not so sure
lets break down the behavior

The ```Form API``` has a certain built in behavior, when you submit a form, it forces the browser window to refresh, although that behavior is not evident in this case, the bug might stem from that, 

This code is from ```createStuff.js``` 


```javascript
createNewTask() {
        // Create an overall form holder.
        let taskCreationContentHolder = document.createElement('div');
        taskCreationContentHolder.setAttribute('class', 'new-task-form');
    
        // Create task form.
        let taskForm = document.createElement('form');
        taskForm.setAttribute('class', 'task-form');
    
        // Create task name label and input.
        let taskNameLabel = document.createElement('label');
        taskNameLabel.setAttribute('for', 'task-name');
        taskNameLabel.textContent = 'New Task:';
        let taskNameInput = document.createElement('input');
        taskNameInput.setAttribute('type', 'text');
        taskNameInput.setAttribute('id', 'task-name');
        taskNameInput.setAttribute('name', 'task-name');
    
        // Finalize form header.
        let nameHolder = document.createElement('div');
        nameHolder.setAttribute('class', 'task-name');
        nameHolder.append(taskNameLabel, taskNameInput);
    
        // Create section for other data.
        let taskDetails = document.createElement('fieldset');
        taskDetails.setAttribute('class', 'task-details');
    
        // Create task owner label and input.
        let taskAssigneeLabel = document.createElement('label');
        taskAssigneeLabel.setAttribute('for', 'task-assignee');
        taskAssigneeLabel.textContent = 'Assignee:';
        let taskAssigneeInput = document.createElement('input');
        taskAssigneeInput.setAttribute('type', 'text');
        taskAssigneeInput.setAttribute('id', 'task-assignee');
        taskAssigneeInput.setAttribute('name', 'task-assignee');
    
        // Create task status label, options and input.
        let taskStatusLabel = document.createElement('label');
        taskStatusLabel.setAttribute('for', 'task-status');
        taskStatusLabel.textContent = 'Status:';
        let taskStatusInput = document.createElement('select');
        taskStatusInput.setAttribute('id', 'task-status');
        taskStatusInput.setAttribute('name', 'task-status');
    
        // Options.
        let optionOneStatus = document.createElement('option');
        optionOneStatus.textContent = 'Not Started';
        optionOneStatus.setAttribute('value', 'Not started');
        let optionTwoStatus = document.createElement('option');
        optionTwoStatus.textContent = 'In Progress';
        optionTwoStatus.setAttribute('value', 'In Progress');
        let optionThreeStatus = document.createElement('option');
        optionThreeStatus.textContent = 'Done';
        optionThreeStatus.setAttribute('value', 'Done');
    
        // Stitch options to select.
        taskStatusInput.append(optionOneStatus, optionTwoStatus, optionThreeStatus);
    
        // Create task priority label, options and input.
        let taskPriorityLabel = document.createElement('label');
        taskPriorityLabel.setAttribute('for', 'task-priority');
        taskPriorityLabel.textContent = 'Priority:';
        let taskPriorityInput = document.createElement('select');
        taskPriorityInput.setAttribute('id', 'task-priority');
        taskPriorityInput.setAttribute('name', 'task-priority');
    
        // Options.
        let optionOnePriority = document.createElement('option');
        optionOnePriority.textContent = 'Low';
        optionOnePriority.setAttribute('value', 'Low');
        let optionTwoPriority = document.createElement('option');
        optionTwoPriority.textContent = 'Medium';
        optionTwoPriority.setAttribute('value', 'Medium');
        let optionThreePriority = document.createElement('option');
        optionThreePriority.textContent = 'High';
        optionThreePriority.setAttribute('value', 'High');
    
        // Stitch options to select.
        taskPriorityInput.append(optionOnePriority, optionTwoPriority, optionThreePriority);

        // Choose project choice.
        let taskProjectChoiceLabel = document.createElement('label');
        taskProjectChoiceLabel.setAttribute('for', 'project-choice');
        taskProjectChoiceLabel.textContent = 'Project';
        let taskProjectChoiceInput = document.createElement('select');
        taskProjectChoiceInput.setAttribute('id', 'project-choice');
        taskProjectChoiceInput.setAttribute('name', 'project-choice');

        // Project options.
        // Default project fallback if none chosen.
        let defaultOption = document.createElement('option');
        defaultOption.textContent = 'Select a project';
        defaultOption.setAttribute('value', 0);
        defaultOption.setAttribute('selected', true);
        taskProjectChoiceInput.appendChild(defaultOption);
        // Provide available projects as options.
        const availableProjects = projectsBoard.getProjectsBoard();
        for (let projectIndex = 0; projectIndex < availableProjects.length; projectIndex++) {
            const projectAsAnOption = document.createElement('option');
            projectAsAnOption.textContent = availableProjects[projectIndex].projectName;
            projectAsAnOption.setAttribute('value', projectIndex + 1);
            taskProjectChoiceInput.append(projectAsAnOption);
        }

        // Create task due date label and input.
        let taskDueDateLabel = document.createElement('label');
        taskDueDateLabel.setAttribute('for', 'due-date');
        taskDueDateLabel.textContent = 'Due:';
        let taskDueDateInput = document.createElement('input');
        taskDueDateInput.setAttribute('type', 'date');
        taskDueDateInput.setAttribute('id', 'due-date');
        taskDueDateInput.setAttribute('name', 'due-date');
    
        // Isolate middle section for styling.
        // Label.
        let taskDetailsLabelHolder = document.createElement('div');
        taskDetailsLabelHolder.setAttribute('class', 'details-holder');
        taskDetailsLabelHolder.append(taskAssigneeLabel, taskStatusLabel, taskPriorityLabel, taskProjectChoiceLabel, taskDueDateLabel);
        // Inputs.
        let taskDetailsInputHolder = document.createElement('div');
        taskDetailsInputHolder.setAttribute('class', 'details-input');
        taskDetailsInputHolder.append(taskAssigneeInput, taskStatusInput, taskPriorityInput, taskProjectChoiceInput, taskDueDateInput);
    
        // Overall section stitch.
        taskDetails.append(taskDetailsLabelHolder, taskDetailsInputHolder);
    
        // Create task description label and input.
        let descriptionHolder = document.createElement('div');
        descriptionHolder.setAttribute('class', 'task-description');
    
        // Create task description label and input.
        let taskDescriptionHeading = document.createElement('h1');
        taskDescriptionHeading.textContent = 'About this task';
        let taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.appendChild(taskDescriptionHeading)
        taskDescriptionLabel.setAttribute('for', 'task-description');
        let taskDescriptionInput = document.createElement('textarea');
        taskDescriptionInput.setAttribute('id', 'task-description');
        taskDescriptionInput.setAttribute('name', 'task-description');
        taskDescriptionInput.setAttribute('cols', '50');
        taskDescriptionInput.setAttribute('rows', '8');
        taskDescriptionInput.setAttribute('wrap', 'hard');
        
        // Stitch description up.
        descriptionHolder.append(taskDescriptionLabel, taskDescriptionInput);
    
        // Create buttons for submit or exit.
        let formButtons = document.createElement('div');
        formButtons.setAttribute('class', 'button-holders');
        // Submit button
        let submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('class', 'submit-task');
        // Exit button.
        let exitButton = document.createElement('button');
        exitButton.textContent = 'Return';
        exitButton.setAttribute('type', 'button');
        exitButton.setAttribute('class', 'exit-task-form');
        // Consolidate buttons
        formButtons.append(submitButton, exitButton);
    
        // Consolidate form elements.
        taskForm.append(nameHolder, taskDetails, descriptionHolder, formButtons);
        taskCreationContentHolder.appendChild(taskForm);
    
        return taskCreationContentHolder;
    }   
```

in the file ```submitStuffToBoard.js``` i found this code

```javascript
submitTaskToAProject() {
        // Get task form. 
        let taskFormHolder = this.contentHolder.querySelector('.new-task-form');
        let taskForm = taskFormHolder.querySelector('form');

        // Get form input values.
        let taskNameValue = taskForm.querySelector('#task-name').value;
        let taskAssigneeValue = taskForm.querySelector('#task-assignee').value;
        let taskStatusValue = taskForm.querySelector('#task-status').value;
        let taskPriorityValue = taskForm.querySelector('#task-priority').value;
        let taskProjectChoiceValue = taskForm.querySelector('#project-choice').value;
        let taskDueDateValue = taskForm.querySelector('#due-date').value;
        let taskDescriptionValue = taskForm.querySelector('#task-description').value;
        
        // Create a task.
        let newTask = new Task(
            taskNameValue,
            taskAssigneeValue,
            taskStatusValue,
            taskDescriptionValue,
            taskDueDateValue,
            taskPriorityValue,
        );

        console.log(newTask);

        // Add task to chosen project.
        projectsBoard.addTaskToProject(parseInt(taskProjectChoiceValue), newTask);
    }

```


Yees, thats where the issue is, the code logs to the browser but immediately clears the log as the page refreshes

This code is in the ````screenController.js file ```
 ```javascript 
 
    // Create new task.
    createATask() {
        let newTaskForm = new ProjectStuffCreator().createNewTask();
        this.contentHolder.appendChild(newTaskForm);
        this.addFormEventListeners();
    }

```

lets have a look at the ```addFormEventListeners()``` method declared in the same file ```screenController.js file ``` down here

```javascript
    // Handle Form Events.
    addFormEventListeners() {
        // Submit a project.
        const projectSubmitButton = this.contentHolder.querySelector('.submit-project');
        if (projectSubmitButton) projectSubmitButton.addEventListener('click', (event) => {
            this.subMitAProject();
            event.preventDefault();
            this.removeCurrentFormFromScreen();
            this.switchToProjects();
        });

        const taskSubmitButton = this.contentHolder.querySelector('.submit-task');
        if (taskSubmitButton) taskSubmitButton.addEventListener('click', (event) => {
            this.submitATask();
            event.preventDefault();   
            this,this.removeCurrentFormFromScreen();
            this,this.switchToTasks();  
        });

        // Exit project creation.
        const projectFormExitButton = this.contentHolder.querySelector('.exit-project-form');
        if (projectFormExitButton) projectFormExitButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.removeCurrentFormFromScreen();
        });

        // Exit task creation.
        const taskFormExitButton = this.contentHolder.querySelector('.exit-task-form');
        if (taskFormExitButton) taskFormExitButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.removeCurrentFormFromScreen();
        });
    }
```
    


  # THE FIX-- the problem is you are submitting a task or project before preventing the event default

   ```javascript
   // Handle Form Events.
addFormEventListeners() {
    // Submit a project.
    const projectSubmitButton = this.contentHolder.querySelector('.submit-project');
    if (projectSubmitButton) projectSubmitButton.addEventListener('click', (event) => {
        event.preventDefault();
        this.subMitAProject();
        this.removeCurrentFormFromScreen();
        this.switchToProjects();
    });

    // Submit a task.
    const taskSubmitButton = this.contentHolder.querySelector('.submit-task');
    if (taskSubmitButton) taskSubmitButton.addEventListener('click', (event) => {
        event.preventDefault();
        this.submitATask();
        this.removeCurrentFormFromScreen();
        this.switchToTasks();
    });

    // Exit project creation.
    const projectFormExitButton = this.contentHolder.querySelector('.exit-project-form');
    if (projectFormExitButton) projectFormExitButton.addEventListener('click', (event) => {
        event.preventDefault();
        this.removeCurrentFormFromScreen();
    });

    // Exit task creation.
    const taskFormExitButton = this.contentHolder.querySelector('.exit-task-form');
    if (taskFormExitButton) taskFormExitButton.addEventListener('click', (event) => {
        event.preventDefault();
        this.removeCurrentFormFromScreen();
    });
}
```


The issue was , you submitted a task then prevented the browser from refreshing, this is how it should be

1. first prevent the broswer from refreshing
2. submit a task or project


kindly make the canges, i hope it will work well



# General recommendations,
 I can not emphasize enough the need to arrange your code into a logical manner, for instance

 a tasks directory can contain all the files relating to the tasks functionality the same for the project and all the other functionalities.

 ## creating elements on the fly
 I would strongly suggest/ recommend/ coerce you, Son to create separate html files and js files. this brings about a separation of concerns and removes the tight coupling between the frontend and backend.

 Imagine if you ever wanted to add another functionality to the project, In the process you'd end up disturbing 
 backend code that is totally unrelated to the new functionality...




 kindly have a look at the example below, whereby the code is broken down to simple digestible chunks.

 ## frontend code

 ```javascript
 import React, { useState } from 'react';
import axios from 'axios';

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({ input1: '', input2: '', input3: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:3000/submit', formData)
      .then(response => console.log(response.data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="input1" value={formData.input1} onChange={handleChange} placeholder="Input 1" />
      <input name="input2" value={formData.input2} onChange={handleChange} placeholder="Input 2" />
      <input name="input3" value={formData.input3} onChange={handleChange} placeholder="Input 3" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
```
below is a sample backend, code that can receive the form data. Dont min dthe example was just another example in javascript
## node js backend code

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/submit', (req, res) => {
  console.log('Received data:', req.body);
  res.send({ status: 'success', data: req.body });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

```


from the above example, the frontend and backend are connected by the axios API, you can use fetch, Ajax or any other 

this is the code doing that

```javascript
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:3000/submit', formData)
      .then(response => console.log(response.data))
      .catch(error => console.error('Error:', error));
  };


```


lets re-organize he folders now, son-----------my organization is bs

```bash
┌──(dreadnaught㉿machine)-[~/Downloads/java/Todo-List/walter]
└─$ tree   
.
├── backend
│   ├── creatStuff.js
│   ├── loadProjects.js
│   ├── ProjectStore
│   ├── Server
│   ├── submitStuffToBoard.js
│   ├── task.js
│   └── taskStore
├── fonts
│   └── Quattrocento_Sans
│       ├── OFL.txt
│       ├── QuattrocentoSans-BoldItalic.ttf
│       ├── QuattrocentoSans-Bold.ttf
│       ├── QuattrocentoSans-Italic.ttf
│       └── QuattrocentoSans-Regular.ttf
├── frontend
│   ├── editStuff.js
│   ├── etc
│   ├── loadTasks.js
│   ├── project.js
│   ├── projects
│   ├── projectsBoard.js
│   ├── screenController.js
│   └── tasks
├── images
│   ├── project.svg
│   └── task.svg
├── index.html
├── index.js
└── resources
    ├── styles.css
    └── utitilityFunctions.js

13 directories, 20 files
  
```



Overall, I love the code, it is well done and i love it. Please work on some of the things mentioned above, please make sure you work on the directory structure. I am so proud of you son


## 8.5/10


# !Happy coding, Son.