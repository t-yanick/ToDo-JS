import Dom from './project-object';
import pureFunctions from './render-projects';

const Projects = () => {
	const F = pureFunctions();

	const deleteProject = (e) => {
		if (
			window.confirm('Are you sure you want to delete this project')
			=== true
		) {
			const projectsList = F.fetchLocalStorage('Projects');
			const tasksList = F.fetchLocalStorage('Tasks');
			const projectName = e.target.previousElementSibling.innerText;

			projectsList.splice(
				projectsList.indexOf(projectName),
				1,
			);

			const filteredTasks = tasksList.filter(
				(element) => element.project !== projectName,
			);

			F.saveLocalStorage('Projects', projectsList);
			F.saveLocalStorage('Tasks', filteredTasks);
			window.location.reload();
		}
	};

	const addRemoveProjectsBtnEventListener = () => {
		const btnsRemoveProject = document.querySelectorAll('.btn-delete-project');
		btnsRemoveProject.forEach((btn) => btn.addEventListener('click', deleteProject));
	};

	const addNewProject = (title) => {
		if (title === '') return alert('You must have a name');
		if (F.fetchLocalStorage('Projects').includes(title)) return alert('Project name is taken, try another');
		const dashedProjectTitle = F.urlDashedName(title);
		Dom.addProjectCardDom(title, dashedProjectTitle);
		Dom.addOptionForSelect(title, dashedProjectTitle, 'list');
		Dom.addOptionForSelect(title, dashedProjectTitle, 'view');

		const projects = F.fetchLocalStorage('Projects');
		projects.push(title);
		F.saveLocalStorage('Projects', projects);
		addRemoveProjectsBtnEventListener();
	};

	const getProjectsList = () => {
		let projectsList = [];

		if (F.fetchLocalStorage('Projects') !== null) {
			projectsList = F.fetchLocalStorage('Projects');
		} else {
			projectsList = ['Default Project'];
			localStorage.setItem('Projects', JSON.stringify(projectsList));
		}
		return projectsList;
	};

	const spreadProjectsListToView = (projectsList) => {
		projectsList.forEach((title) => {
			const dashedProjectTitle = F.urlDashedName(title);
			Dom.addProjectCardDom(title, dashedProjectTitle);
			Dom.addOptionForSelect(title, dashedProjectTitle, 'list');
			Dom.addOptionForSelect(title, dashedProjectTitle, 'view');
		});
	};

	return {
		addNewProject,
		getProjectsList,
		spreadProjectsListToView,
		deleteProject,
	};
};

export default Projects;