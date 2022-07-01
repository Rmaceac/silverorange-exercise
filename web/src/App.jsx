import './App.css';
import Repos from './components/Repos';
import Repo from './components/Repo';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function App() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchRepos = () => {
      axios
        .get(`http://localhost:4000/repos`)
        .then((res) => {
          const sortedRepos = res.data.sort((a, b) => {
            const date1 = new Date(a.created_at);
            const date2 = new Date(b.created_at);
            return date2 - date1;
          });
          setRepos(sortedRepos);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchRepos();
  }, []);
  return (
    <div className="App">
      <Repos repos={repos} />
      <Repo />
    </div>
  );
}
