import Projects from './render-page';
import toDo from './render-todo-objects';

const projects = Projects();
const todo = toDo;

const projectsList = projects.getProjectList();
projects.spreadProjectListToView(projectsList);
toDo.loadTasks();

const inputNewProjName = document.querySelector('.input-project-name');
const btnSubmitProject = document.querySelector('.new-project-submit');
const btnAddToDo = document.querySelector('.new-task-submit');

const inputToDoName = document.querySelector('#input-todo-name');
const inputProject = document.querySelector('#select-project');
const inputDueDate = document.querySelector('.date-picker');
const inputPriority = document.querySelector('.priority-picker');

btnSubmitProject.addEventListener('click', () => {
	projectsModule.addNewProject(inputNewProjName.value);
});

btnAddToDo.addEventListener('click', () => todoModule.addToDo(
	'Default Description',
	inputToDoName.value,
	inputProject.value,
	inputDueDate.value,
	inputPriority.value,
	false,
	false,
));