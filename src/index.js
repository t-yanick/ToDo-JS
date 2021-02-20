import Projects from './projects';
import toDo from './todo';

const projects = Projects();
const todo = toDo;

const projectsList = projects.getProjectList();
projects.spreadProjectListToView(projectsList);
toDo.loadTasks();