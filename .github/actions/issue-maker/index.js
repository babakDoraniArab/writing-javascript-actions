async function run() {
    try {
      const issueTitle = core.getInput("issue-title");
      const jokeBody = core.getInput("joke");
      const token = core.getInput("repo-token");
  
      const octokit = github.getOctokit(token);
  
      const newIssue = await octokit.rest.issues.create({
          repo: github.context.repo.repo,
          owner: github.context.repo.owner,
          title: issueTitle,
          body: jokeBody
      });
    } catch (err) {
        core.setFailed(err.message);
    }
  }
  
  run()