# Pull Requests

Regarding work with Pull Requests (next PR), we are following [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow principles.

Every UI developer should have one copy of our [GitHub repository](https://github.com/reportportal/service-ui) locally.

Repositories definitions:

- _`upstream`_ - remote repository of Report Portal.
- _`origin`_ - your remote forked version of _`upstream`_ if exists.
- _`local`_ - copy on your local machine.

Main branches:

- `develop` - main development branch.
- `{versionNumber}` (eg `5.7`) - frozen branch with next release version.
- `master` - release branch (contains last released version).

Main code reviewer is UI Team Leader. His code review is mandatory for each PR. But every developer and contributor are able to provide review for others PRs, it will be very helpful for us.

Commits and PRs naming format - `JIRA task id || Short task description` (for example "EPMRPP-123 || Awesome functionality implementation.")
All existing PRs you can find [here](https://github.com/reportportal/service-ui/pulls).

Critical amount of PRs is 10. It's means that Code Review task gets a highest priority for Team Leader.

> It's recommended to define equal names for PR and its main commit.

At the moment you start develop a new feature, please follow next steps:

1.  fetch latest changes from _`upstream`_.
2.  checkout a new branch from _`upstream/develop`_. Define convenient for you name.
3.  start develop feature.
4.  if during feature development you've made more than 1 commit, please squash them into single one. Name it as described above.
5.  fetch latest changes from _`upstream`_ again and **rebase** you branch onto _`upstream/develop`_.
6.  resolve conflicts if they are exist.
7.  force changes into _`origin`_ or _`upstream`_. Define convenient for you remote branch name.
8.  send a PR from your branch into _`upstream/develop`_. Name it as described above.
9.  add code reviewers. UI Team Leader is required.

Steps for fixes after Code Review process:

1.  checkout branch of corresponding feature.
2.  make all fixes related to Code Review comments.
3.  commit them with name `Jira task id || Code Review fixes - {i}`. `i` - number of Code Review round.
4.  fetch latest changes from _`upstream`_ again and rebase you branch onto _`upstream/develop`_.
5.  resolve conflicts if they are exist.
6.  force changes into _`origin`_ or _`upstream`_ feature branch.
7.  PR should be updated automatically.

> Please try to keep you feature branch up-to-date with _`upstream/develop`_ during whole precess of implementation.

> After your PR will be merged, you are able to delete feature branches from _`local`_ and _`origin`_.
