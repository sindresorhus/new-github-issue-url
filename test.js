import test from 'ava';
import newGithubIssueUrl from './index.js';

test('main', t => {
	const user = 'sindresorhus';
	const repo = 'test';
	const body = 'Hello';
	const title = 'Title';

	const urlString = newGithubIssueUrl({
		user,
		repo,
		body,
		title,
	});

	const {searchParams} = new URL(urlString);

	t.true(urlString.includes(user));
	t.true(urlString.includes(repo));
	t.is(searchParams.get('body'), body);
	t.is(searchParams.get('title'), title);
});

test('repoUrl option', t => {
	const repoUrl = 'https://github.com/sindresorhus/test';
	const body = 'Hello';
	const title = 'Title';

	const urlString = newGithubIssueUrl({
		repoUrl,
		body,
		title,
	});

	const {searchParams} = new URL(urlString);

	t.true(urlString.startsWith(repoUrl));
	t.is(searchParams.get('body'), body);
	t.is(searchParams.get('title'), title);
});

test('throws when required options are not specified', t => {
	t.throws(() => {
		newGithubIssueUrl();
	}, {
		message: /need to specify either/,
	});
});
