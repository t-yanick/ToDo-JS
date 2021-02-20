const pureFunctions = () => {
	const fetchLocalStorage = (item) => {
		let listObject = [];
		if (
			localStorage.getItem(item) !== null
			&& localStorage.getItem(item) !== 'undefined'
		) {
			listObject = JSON.parse(localStorage.getItem)
		} else if (item === 'Projects') {
			listObject = ['Default Project'];
		} else {
			listObject = [];
		}
		return listObject
	};

	const saveLocalStorage = (key, itemsList) => {
		localStorage.setItem(key, JSON.stringify(itemsList));
	};

	function urlDashedName(name) {
		return name.split(/\s+/).join('-');
	}

	function urlUndasedName(name) {
		return name.split(/-+/).join(' ');
	}

	return {
		fetchLocalStorage,
		saveLocalStorage,
		urlDashedName,
		urlUndasedName,
	};
};

export default pureFunctions;
