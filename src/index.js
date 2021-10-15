const { default: createRow } = require("./createRow");
const semver = require('semver');

const fetchPlugins = async () => {
	const response = await fetch('https://hackolade.com/versionInfo/pluginVersions.json');

	return response.json();
};

const makeRequest = async (url, options) => {
	try {
		const response = await fetch(url, options);
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

const sortTags = (tags) => {
	const regExp = /(\d+\.\d+\.\d+)/i;

	return tags.filter(tag => regExp.test(tag.name)).map((tag) => tag.name.match(regExp)[1]).sort((tagA, tagB) => semver.compare(tagB, tagA));
};

const getTags = (plugin, githubToken) => {
	const options = {};
	
	if (githubToken.value) {
		options.headers = {
			Authorization: 'Bearer ' + githubToken.value
		};
	}

	return makeRequest(`https://api.github.com/repos/${plugin.author}/${plugin.name}/tags`, options);
};

const eachPlugin = async (githubToken, callback) => {
	const plugins = (await fetchPlugins())?.plugins;

	await plugins.reduce(async (next, plugin, i) => {
		await next;
		const item = {
			name: plugin.name,
			link: plugin.repository,
			registry: plugin.version,
		};

		try {
			const packageByMaster = await getTagVersion(plugin);
			const tags = await getTags(plugin, githubToken);

			if (packageByMaster.success) {
				item.master = packageByMaster.result.version;
			} else {
				item.masterError = packageByMaster.result.message;
			}

			if (tags.success) {
				item.tag = sortTags(tags.result)[0];
			} else {
				item.tagError = tags.result.message;
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
		callback(item, (i + 1) / plugins.length);
	}, Promise.resolve());
};

const renderTable = async (githubToken) => {
	const spinner = document.querySelector('.spinner-container');
	const spinnerProgress = document.querySelector('.spinner-progress');
	const table = document.getElementById('plugins-table').querySelector('tbody');

	spinner.style.display = 'block';
	table.innerHTML = '';

	try {
		const data = [];

		await eachPlugin(githubToken, (item, progress) => {
			data.push(item);
			spinnerProgress.innerHTML = (progress * 100).toFixed(0) + '%';
		});

		table.innerHTML = '';
		data.forEach((item) => {
			table.appendChild(createRow(item));
		});
	} catch (error) {
		alert(error.message);
	} finally {
		spinner.style.display = 'none';
	}
};

window.addEventListener('DOMContentLoaded', async () => {
	const githubToken = document.getElementById('github-token');
	const update = document.getElementById('update');

	githubToken.value = localStorage.getItem('github-token');
	githubToken.addEventListener('change', (e) => {
		localStorage.setItem('github-token', e.target.value);
	});

	update.addEventListener('click', async () => {
		localStorage.setItem('github-token', githubToken.value);
		await renderTable(githubToken);
	});

	await renderTable(githubToken);
});