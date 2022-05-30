import { Router, Request, Response } from 'express';
import axios from 'axios';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  const URL: string = 'https://api.github.com/users/silverorange/repos';
  const localRepoData: string = 'api/data/repos.json';

  axios.get(URL).then((r) => {
    console.log('DATA:', r.data);
  });

  // await(URL, (err: string, body: string) => {
  //   console.log(body);
  // });

  res.json([]);
});
