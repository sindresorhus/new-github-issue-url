import {expectType} from 'tsd-check';
import newGithubIssueUrl from '.';

expectType<string>(newGithubIssueUrl({
	repoUrl: 'https://github.com/sindresorhus/new-github-issue-url',
	body: 'test'
}));

expectType<string>(newGithubIssueUrl({
	user: 'sindresorhus',
	repo: 'new-github-issue-url'
}));
