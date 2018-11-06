'use strict';

module.exports = (options = {}) => {
	if (!(options.user && options.repo)) {
		throw new Error('The `user` and `repo` options are required');
	}

	const url = new URL(`https://github.com/${options.user}/${options.repo}/issues/new`);

	const types = [
		'body',
		'title',
		'labels',
		'template',
		'milestone',
		'assignee',
		'projects'
	];

	for (const type of types) {
		let value = options[type];
		if (value === undefined) {
			continue;
		}

		if (type === 'labels' || type === 'projects') {
			if (!Array.isArray(value)) {
				throw new TypeError(`The \`${type}\` option should be an array`);
			}

			value = value.join(',');
		}

		url.searchParams.set(type, value);
	}

	return url.toString();
};
