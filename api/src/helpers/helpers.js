import axios from 'axios';
import * as fs from 'fs';

// export default async function fetchRepos(remoteUrl, localUrl) {
//   const remotePromise = await axios
//     .get(remoteUrl)
//     .then((r) => {
//       const forklessRemoteRepos = r.data.filter((repo) => !repo.fork);
//       return forklessRemoteRepos;
//     })
//     .catch((err) => {
//       console.log('ERROR:', err);
//     });

//   const localPromise = await fs.promises.readFile(
//     localUrl,
//     'utf8',
//     (err, data) => {
//       if (err) {
//         console.log('ERROR:', err);
//         return;
//       }

//       const JSONData = JSON.parse(data);
//       const forklessRepos = [];

//       for (const repo of JSONData) {
//         // console.log('REPO:', repo);
//         if (!repo.fork) {
//           forklessRepos.push(repo);
//         }
//       }
//       console.log('LOCAL REPOS:', forklessRepos);
//       return forklessRepos;
//     }
//   );

//   return Promise.all([remotePromise, localPromise])
//     .then((data) => {
//       console.log('PROMISE ALL DATA:', data);
//       return data;
//     })
//     .catch((err) => {
//       console.log('ERROR:', err);
//     });
// }

export default async function fetchData(remoteUrl, localUrl) {
  const localRaw = fs.readFileSync(localUrl);
  const local = JSON.parse(localRaw);
  const remoteRaw = await axios.get(remoteUrl);
  const remote = remoteRaw.data;
  const all = [...local, ...remote].filter(x => x.fork === false);
  return all;
}
