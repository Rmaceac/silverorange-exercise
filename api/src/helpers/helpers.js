import axios from 'axios';
import * as fs from 'fs';

export default async function fetchRepos(remoteUrl, localUrl) {
  const forklessRepos = [];

  await axios.get(remoteUrl)
    .then((r) => {
      const forklessRemoteRepos = r.data.filter((repo) => !repo.fork);
      for (const repo of forklessRemoteRepos) {
        if (!repo.fork) {
          forklessRepos.push(repo);
        }
      }
    })
    .catch(err => {
      console.log('ERROR:', err);
    });

  await fs.readFile(localUrl, 'utf8', (err, data) => {
    if (err) {
      console.log('ERROR:', err);
      return;
    }

    const JSONData = JSON.parse(data);

    for (const repo of JSONData) {
      if (!repo.fork) {
        forklessRepos.push(repo);
      }
    }
  });

  return forklessRepos;
}
