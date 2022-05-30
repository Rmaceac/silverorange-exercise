import { Router, Request, Response } from 'express';
import axios from 'axios';
import * as fs from 'fs';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  const remoteRepoUrl: string = 'https://api.github.com/users/silverorange/repos';
  const localRepoUrl: string = 'data/repos.json';

  let forklessRepos;

  await axios.get(remoteRepoUrl).then((r) => {
    forklessRepos = r.data.filter(
      (repo: Record<string, unknown>) => !repo.fork
    );
  });

  await fs.readFile(localRepoUrl, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  // await(URL, (err: string, body: string) => {
  //   console.log(body);
  // });

  res.json([forklessRepos]);
});
