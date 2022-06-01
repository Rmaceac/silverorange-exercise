import axios from 'axios';
import * as fs from 'fs';

export default async function fetchData(remoteUrl, localUrl) {
  const localRaw = fs.readFileSync(localUrl);
  const local = JSON.parse(localRaw);
  const remoteRaw = await axios.get(remoteUrl);
  const remote = remoteRaw.data;
  const all = [...local, ...remote].filter(x => x.fork === false);
  return all;
}
