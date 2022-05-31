import axios from 'axios';
import * as fs from 'fs';

export default async function fetchRepos(remoteUrl, localUrl) {
  const remotePromise = axios
    .get(remoteUrl)
    .then((r) => {
      const forklessRemoteRepos = r.data.filter((repo) => !repo.fork);
      return forklessRemoteRepos;
    })
    .catch((err) => {
      console.log('ERROR:', err);
    });

  const localPromise = await fs.promises.readFile(
    localUrl,
    'utf8',
    (err, data) => {
      if (err) {
        console.log('ERROR:', err);
        return;
      }

      const JSONData = JSON.parse(data);
      const forklessRepos = [];

      for (const repo of JSONData) {
        // console.log('REPO:', repo);
        if (!repo.fork) {
          forklessRepos.push(repo);
        }
      }
      console.log('LOCAL REPOS:', forklessRepos);
      // console.log("LOCAL REPOS:");
      return forklessRepos;
    }
  );

  return Promise.all([remotePromise, localPromise])
    .then((data) => {
      // console.log("PROMISE ALL DATA:", data);
      return data;
    })
    .catch((err) => {
      console.log('ERROR:', err);
    });
}
