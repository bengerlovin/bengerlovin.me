import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from '@octokit/core'
import moment from "moment";

//  create github auth app
const owner = 'bengerlovin'
const octokit = new Octokit({
    auth: process.env.GITHUB_PERSON_TOKEN,
});

type CommitData = {
    sha: string,
    node_id: string,
    commit: { message: string }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    let raw = await octokit.request('GET /user/repos', {
    })

    let parsedData = raw.data;

    let commitData = [];
    let parsedCommitData = [];
    let commitCount: number = 0;


    // get commits for each branch of each repo
    for (const repo of parsedData) {

        let branches = (await getBranches(owner, repo.name)).data
        let lastCommitSha = branches[branches?.length - 1]?.commit?.sha;

        let commits = null;
        if (lastCommitSha) {
            commits = await getCommitsFromBranch(repo.name)
            if (commits.commitData?.length > 0) {
                commitCount += commits.commitData.length;
                parsedCommitData.push(commits)

            }
        }


    }



    res.status(200).json({ msg: "hello from github", commitData: parsedCommitData, commitCount: commitCount })
}


async function getBranches(owner: string, repoName: string) {

    let results = await octokit.request('GET /repos/{owner}/{repo}/branches', {
        owner: owner,
        repo: repoName,
    })

    return results;


}

async function getCommitsFromBranch(repoName: string) {
    let today = new Date();
    let thirtyDaysAgo = moment(new Date().setDate(today.getDate() - 30)).toISOString();

    let commits = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: owner,
        repo: repoName,
        since: thirtyDaysAgo,
    })

    return { repo: repoName, commitData: commits?.data };
}