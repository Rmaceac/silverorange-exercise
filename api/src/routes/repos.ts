import { Router, Request, Response } from 'express';
import axios from 'axios';


export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  const remoteRepoUrl: string = 'https://api.github.com/users/silverorange/repos';
  const localRepoUrl: string = 'api/data/repos.json';

  axios.get(remoteRepoUrl).then((r) => {
    // console.log('DATA:', r.data);
    // console.log('DATA:', r.data[0]);
    const forklessRepos = r.data.filter(
      (repo: Record<string, unknown>) => !repo.fork
    );
    console.log('Forkless Repos:', forklessRepos);
  });

  // await(URL, (err: string, body: string) => {
  //   console.log(body);
  // });

  res.json([]);
});
