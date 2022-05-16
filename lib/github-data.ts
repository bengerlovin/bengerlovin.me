import { Octokit } from '@octokit/core';
import { format } from 'date-fns';

//  create github auth app
const owner = 'bengerlovin';
const octokit = new Octokit({
  auth: process.env.GITHUB_PERSON_TOKEN,
});

export default async function getRecentCommitData() {
  let raw = await octokit.request('GET /user/repos', {});

  let parsedCommitData = [];
  let commitCount: number = 0;

  // get commits for each branch of each repo
  for (const repo of raw.data) {
    let branches = (await getBranches(owner, repo.name)).data;
    let lastCommitSha = branches[branches?.length - 1]?.commit?.sha;

    let commits = null;
    if (lastCommitSha) {
      commits = await getCommitsFromBranch(repo.name);
      if (commits.commitData?.length > 0) {
        commitCount += commits.commitData.length;
        parsedCommitData.push(commits);
      }
    }
  }

  return { commitData: parsedCommitData, commitCount: commitCount };
}

async function getBranches(owner: string, repoName: string) {
  let results = await octokit.request('GET /repos/{owner}/{repo}/branches', {
    owner: owner,
    repo: repoName,
  });

  return results;
}

async function getCommitsFromBranch(repoName: string) {
  let today = new Date();
  let thirtyDaysAgo = format(
    new Date().setDate(today.getDate() - 30),
    'yyyy-MM-dd'
  );

  let commitPromises = [];

  let pages = [1, 2, 3];
  let results = [];

  let commits = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: owner,
    repo: repoName,
    since: thirtyDaysAgo,
    per_page: 100,
  });

  return { repo: repoName, commitData: commits.data };
}
