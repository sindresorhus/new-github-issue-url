declare namespace newGithubIssueUrl {
	interface CommonOptions {
		/**
		The issue body.
		*/
		readonly body?: string;

		/**
		The issue title.
		*/
		readonly title?: string;

		/**
		Use an [issue template](https://help.github.com/articles/manually-creating-a-single-issue-template-for-your-repository/).

		@example
		```
		'unicorn.md' // If you want to use a template at `ISSUE_TEMPLATE/unicorn.md`.
		```
		*/
		readonly template?: string;

		/**
		The labels for the issue.

		_Requires the user to have the permission to add labels._
		*/
		readonly labels?: string[];

		/**
		The milestone for the issue.

		_Requires the user to have the permission to add milestone._
		*/
		readonly milestone?: string;

		/**
		The user to assign to the issue.

		_Requires the user to have the permission to add assignee._
		*/
		readonly assignee?: string;

		/**
		The projects to add the issue to.
		The project reference format is `user/<project-number>`, for example, if the URL to the project is `https://github.com/sindresorhus/some-repo/projects/3`, the project reference would be `some-repo/3`.

		_Requires the user to have the permission to add projects._
		*/
		readonly projects?: string[];
	}

	interface RepoUrlOptions extends CommonOptions {
		/**
		The full URL to the repo.
		*/
		readonly repoUrl: string;
	}

	interface UserAndRepoOptions extends CommonOptions {
		/**
		GitHub username or organization.
		*/
		readonly user: string;

		/**
		GitHub repo.
		*/
		readonly repo: string;
	}

	/**
	You are required to either specify the `repoUrl` option or both the `user` and `repo` options.
	*/
	type Options = RepoUrlOptions | UserAndRepoOptions;
}

declare const newGithubIssueUrl: {
	/**
	Generate a URL for opening a new GitHub issue with prefilled title, body, and other fields.

	@example
	```
	import newGithubIssueUrl = require('new-github-issue-url');
	import opn = require('opn');

	const url = newGithubIssueUrl({
		user: 'sindresorhus',
		repo: 'new-github-issue-url',
		body: '\n\n\n---\nI\'m a human. Please be nice.'
	});
	//=> 'https://github.com/sindresorhus/new-github-issue-url/issues/new?body=%0A%0A%0A---%0AI%27m+a+human.+Please+be+nice.'

	// Then open it
	opn(url);
	```
	*/
	(options: newGithubIssueUrl.Options): string;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function newGithubIssueUrl(options: newGithubIssueUrl.Options): string;
	// export = newGithubIssueUrl;
	default: typeof newGithubIssueUrl;
};

export = newGithubIssueUrl;
