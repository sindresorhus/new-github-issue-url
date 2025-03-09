# new-github-issue-url

> Generate a URL for opening a new GitHub issue with prefilled title, body, and other fields

GitHub supports prefilling a new issue by setting [certain search parameters](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-url-query). This package simplifies generating such URL.

## Install

```sh
npm install new-github-issue-url
```

## Usage

```js
import newGithubIssueUrl from 'new-github-issue-url';
import open from 'open';

const url = newGithubIssueUrl({
	user: 'sindresorhus',
	repo: 'new-github-issue-url',
	body: '\n\n\n---\nI\'m a human. Please be nice.'
});
//=> 'https://github.com/sindresorhus/new-github-issue-url/issues/new?body=%0A%0A%0A---%0AI%27m+a+human.+Please+be+nice.'

// Then open it
await open(url);
```

[Try the URL](https://github.com/sindresorhus/new-github-issue-url/issues/new?body=%0A%0A%0A---%0AI%27m+a+human.+Please+be+nice.)\
*(Don't click the "Submit new issue" button!)*

If you use Electron, check out `electron-util`'s [`openNewGitHubIssue()` method](https://github.com/sindresorhus/electron-util#opennewgithubissueoptions).

## API

### newGithubIssueUrl(options)

Returns a URL string.

#### options

Type: `object`

You are required to either specify the `repoUrl` option or both the `user` and `repo` options.

##### repoUrl

Type: `string`

The full URL to the repo.

##### user

Type: `string`

GitHub username or organization.

##### repo

Type: `string`

GitHub repo.

##### body

Type: `string`

The issue body.

##### title

Type: `string`

The issue title.

##### template

Type: `string`

Use an [issue template](https://help.github.com/articles/manually-creating-a-single-issue-template-for-your-repository/).

For example, if you want to use a template at `ISSUE_TEMPLATE/unicorn.md`, you would specify `unicorn.md` here.

##### labels

Type: `string[]`

The labels for the issue.

*Requires the user to have the permission to add labels.*

##### milestone

Type: `string`

The milestone for the issue.

*Requires the user to have the permission to add milestone.*

##### assignee

Type: `string`

The user to assign to the issue.

*Requires the user to have the permission to add assignee.*

##### projects

Type: `string[]`

The projects to add the issue to.

The project reference format is `user/repo/<project-number>`, for example, if the URL to the project is `https://github.com/sindresorhus/some-repo/projects/3`, the project reference would be `sindresorhus/some-repo/3`.

*Requires the user to have the permission to add projects.*

##### type

Type: `string`

The [issue type](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/editing-an-issue#adding-or-changing-the-issue-type).

## Related

- [new-github-release-url](https://github.com/sindresorhus/new-github-release-url) - Generate a URL for opening a new GitHub release with prefilled tag, body, and other fields
