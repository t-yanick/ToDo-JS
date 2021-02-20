const toDo = (function toDo() {
	class ToDo {
		constructor(
			title,
			description = "No description",
			project = "Default",
			dueDate,
			priority,
			status = false,
		) {
			this.title = title;
			this.description = description;
			this.project = project;
			this.dueDate = dueDate;
			this.priority = priority;
			this.status = status;
		}
	}

	function findIndexWithName(name, list) {
		const tasksList = list;

		let value;
		tasksList.forEach((task) => {
			if (task.title === name) {
				value = tasksList.indexOf(task);
			}
		});

		return value;
	}

})();

export default toDo;