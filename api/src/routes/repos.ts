import { Router, Request, Response } from 'express';
import fetchData from '../helpers/helpers';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  const remoteRepoUrl: string =
    'https://api.github.com/users/silverorange/repos';
  const localRepoUrl: string = 'data/repos.json';

  const reposArray = await fetchData(remoteRepoUrl, localRepoUrl).catch(
    (err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  );

  res.json(reposArray);
});
