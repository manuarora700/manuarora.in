export default async (_, res) => {
  const userResponse = await fetch("https://api.github.com/users/manuarora700");
  const userReposResponse = await fetch(
    "https://api.github.com/users/manuarora700/repos?per_page=100"
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();
  // If GitHub API limit reached (demo purpose)
  console.log(user);
  if (repositories.message) {
    return res.status(200).json({
      followers: null,
      stars: null,
      repoCount: null,
      following: null,
    });
  }
  const mine = repositories.filter((repo) => !repo.fork);
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository["stargazers_count"];
  }, 0);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  return res.status(200).json({
    followers: user.followers,
    stars,
    repoCount: user.public_repos,
    following: user.following,
  });
};
