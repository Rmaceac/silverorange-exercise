import { useEffect, useState } from 'react';
import axios from 'axios';

const Repos = () => {
  const [repos, setRepos] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/repos`)
      .then((res) => {
        console.log('Response:', res.data);
        setRepos(...res);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      <h1>Repos!</h1>
      <div>{repos}</div>
    </>
  );
};

export default Repos;
