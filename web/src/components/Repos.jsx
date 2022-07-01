import { useState } from 'react';
// for generating random keys
import { v4 as uuidv4 } from 'uuid';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const Repos = (props) => {
  const { repos } = props;
  const [filter, setFilter] = useState('All');

  const repoLanguages = repos.map((repo) => {
    return repo.language;
  });
  const uniqueLanguages = [...new Set(repoLanguages)];

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <h1>Repos!</h1>
      <FormControl fullWidth={true}>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem key={uuidv4()} value="All">
            All
          </MenuItem>
          {uniqueLanguages.map((language) => (
            <MenuItem key={uuidv4()} value={language}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Repository</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Language</TableCell>
              <TableCell align="right">Forks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* render ALL repos to table */}
            {filter === 'All' &&
              repos.map((repo) => (
                <TableRow key={repo.id}>
                  <TableCell component="th" scope="row">
                    <Link href={repo.html_url} underline="hover">
                      {repo.name}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{repo.created_at}</TableCell>
                  <TableCell align="right">{repo.description}</TableCell>
                  <TableCell align="right">{repo.language}</TableCell>
                  <TableCell align="right">{repo.forks}</TableCell>
                </TableRow>
              ))}
            {/* render repos based on language chosen */}
            {filter !== 'All' && (
              <>
                {repos
                  .filter((repo) => repo.language === filter)
                  .map((repo) => (
                    <TableRow key={repo.id}>
                      <TableCell component="th" scope="row">
                        <Link href={repo.html_url} underline="hover">
                          {repo.name}
                        </Link>
                      </TableCell>
                      <TableCell align="right">{repo.created_at}</TableCell>
                      <TableCell align="right">{repo.description}</TableCell>
                      <TableCell align="right">{repo.language}</TableCell>
                      <TableCell align="right">{repo.forks}</TableCell>
                    </TableRow>
                  ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Repos;
