import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

const Repos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = () => {
      axios
        .get(`http://localhost:4000/repos`)
        .then((res) => {
          setRepos(res.data);
          // console.log('Repos:', repos);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchRepos();
  });

  return (
    <>
      <h1>Repos!</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Repository</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Language</TableCell>
              <TableCell align="right">Forks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos.map((repo) => (
              <TableRow key={repo.id}>
                <TableCell component="th" scope="row">
                  {repo.name}
                </TableCell>
                <TableCell align="right">{repo.description}</TableCell>
                <TableCell align="right">{repo.language}</TableCell>
                <TableCell align="right">{repo.forks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Repos;
