import {expectType} from 'tsd';
import newGithubIssueUrl from './index.js';

expectType<string>(
	newGithubIssueUrl({
		repoUrl: 'https://github.com/sindresorhus/new-github-issue-url',
		body: 'test',
	}),
);

expectType<string>(
	newGithubIssueUrl({
		user: 'sindresorhus',
		repo: 'new-github-issue-url',
	}),
);
