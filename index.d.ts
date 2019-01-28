interface CommonOptions {
	/**
	 * The issue body.
	 */
	readonly body?: string;

	/**
	 * The issue title.
	 */
	readonly title?: string;

	/**
	 * Use an [issue template](https://help.github.com/articles/manually-creating-a-single-issue-template-for-your-repository/).
	 *
	 * @example
	 *
	 * 'unicorn.md' // If you want to use a template at `ISSUE_TEMPLATE/unicorn.md`.
	 */
	readonly template?: string;

	/**
	 * The labels for the issue.
	 *
	 * *Requires the user to have the permission to add labels.*
	 */
	readonly labels?: string[];

	/**
	 * The milestone for the issue.
	 *
	 * *Requires the user to have the permission to add milestone.*
	 */
	readonly milestone?: string;

	/**
	 * The user to assign to the issue.
	 *
	 * *Requires the user to have the permission to add assignee.*
	 */
	readonly assignee?: string;

	/**
	 * The projects to add the issue to.
	 * The project reference format is `user/<project-number>`, for example, if the URL to the project is `https://github.com/sindresorhus/some-repo/projects/3`, the project reference would be `some-repo/3`.
	 *
	 * *Requires the user to have the permission to add projects.*
	 */
	readonly projects?: string[];
}

interface RepoUrlOptions extends CommonOptions {
	/**
	 * The full URL to the repo.
	 */
	readonly repoUrl: string;
}

interface UserAndRepoOptions extends CommonOptions {
	/**
	 * GitHub username or organization.
	 */
	readonly user: string;

	/**
	 * GitHub repo.
	 */
	readonly repo: string;
}

/**
 * You are required to either specify the `repoUrl` option or both the `user` and `repo` options.
 */
export type Options = RepoUrlOptions | UserAndRepoOptions

/**
 * Generate a URL for opening a new GitHub issue with prefilled title, body, and other fields.
 *
 * @example
 *
 * import newGithubIssueUrl from 'new-github-issue-url';
 * import opn from 'opn';
 *
 * const url = newGithubIssueUrl({
 * 	user: 'sindresorhus',
 * 	repo: 'new-github-issue-url',
 * 	body: '\n\n\n---\nI\'m a human. Please be nice.'
 * });
 * //=> 'https://github.com/sindresorhus/new-github-issue-url/issues/new?body=%0A%0A%0A---%0AI%27m+a+human.+Please+be+nice.'
 *
 * // Then open it
 * opn(url);
 */
export default function newGithubIssueUrl(options: Options): string;
