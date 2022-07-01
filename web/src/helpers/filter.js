const filterRepos = (repos, property, filter) => {
  const filteredRepos = repos.filter((repo) => {
    return repo.property === filter;
  });

  return filteredRepos;
};

module.exports = { filterRepos };
