const { default: createRow } = require("./createRow");

const fetchPlugins = async () => {
	const response = await fetch('https://hackolade.com/versionInfo/pluginVersions.json');

	return response.json();
};

const makeRequest = async (url) => {
	try {
		const response = await fetch(url);
		const result = await response.json();

		return {
			success: true,
			result,
		};
	} catch (error) {
		console.error(error);

		return {
			success: false,
			result: error,
		};
	}
};

const getTagVersion = (plugin) => {
	return makeRequest(`https://raw.githubusercontent.com/${plugin.author}/${plugin.name}/${plugin.version}/package.json`);
};

const getMasterVersion = (plugin) => {
	return makeRequest(`https://raw.githubusercontent.com/${plugin.author}/${plugin.name}/master/package.json`);
};

const getTags = (plugin) => {
	return makeRequest(`https://api.github.com/repos/${plugin.author}/${plugin.name}/tags`);
};

const eachPlugin = async (callback) => {
	const plugins = (await fetchPlugins())?.plugins;

	await plugins.reduce(async (next, plugin) => {
		await next;
		const item = {
			name: plugin.name,
			link: plugin.repository,
			registry: plugin.version,
		};

		try {
			const packageByTag = await getTagVersion(plugin);
			const packageByMaster = await getMasterVersion(plugin);

			if (packageByMaster.success) {
				item.master = packageByMaster.result.version;
			} else {
				item.masterError = packageByMaster.result.message;
			}

			if (packageByTag.success) {
				item.tag = packageByTag.result.version;
			} else {
				const tags = await getTags(plugin);

				if (tags.success) {
					item.tag = tags.result[0].name;
				} else {
					item.tagError = tags.result.message;
				}
			}

			if (item.registry !== item.master) {
				item.generalError = 'package.json version in master branch does not correspond to registry';			
			}

			if (item.registry !== item.tag) {
				item.generalError = 'Tag does not correspond to registry';			
			}
		} catch (error) {
			item.generalError = error.message;			
		}

		console.log(item.name);
		callback(item);
	}, Promise.resolve());
};

const renderTable = (data) => {
	const table = document.getElementById('plugins-table').querySelector('tbody');
	table.innerHTML = '';
	data.forEach((item) => {
		table.appendChild(createRow(item));
	});
};

window.addEventListener('DOMContentLoaded', async () => {
	const spinner = document.querySelector('.spinner-container');
	try {
		const result = [];

		await eachPlugin((item) => {
			result.push(item);
		});
	
		renderTable(result);
	} catch (error) {
		alert(error.message);
	} finally {
		spinner.style.display = 'none';
	}
});