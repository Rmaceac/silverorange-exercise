import { useEffect } from 'react';

const Repo = () => {
  useEffect(() => {
    // effect
    return () => {
      // cleanup
    };
  }, []);
};

export default Repo;
