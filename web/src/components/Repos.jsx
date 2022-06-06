import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

const Repos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/repos`)
      .then((res) => {
        // console.log('Response:', res.data);
        setRepos(...res.data);
        console.log('Repos:', repos);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, [repos]);

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
        </Table>
      </TableContainer>
    </>
  );
};

export default Repos;
