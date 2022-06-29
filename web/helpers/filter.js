const filterRepos = (repos, property, filter) => {
  const filteredRepos = repos.map((repo) => {
    if (property === filter) {
      return repo;
    }
  });

  return filteredRepos;
};

module.exports = { filterRepos };
