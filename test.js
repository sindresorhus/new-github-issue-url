import test from 'ava';
import newGithubIssueUrl from '.';

test('main', t => {
	const user = 'sindresorhus';
	const repo = 'test';
	const body = 'Hello';
	const title = 'Title';

	const urlString = newGithubIssueUrl({
		user,
		repo,
		body,
		title
	});

	const {searchParams} = new URL(urlString);

	t.true(urlString.includes(user));
	t.true(urlString.includes(repo));
	t.is(searchParams.get('body'), body);
	t.is(searchParams.get('title'), title);
});
