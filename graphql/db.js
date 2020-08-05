let movies = [
  {
    id: 1,
    name: "im jin",
    score: 29,
  },
  {
    id: 2,
    name: "jin!",
    score: 28,
  },
  {
    id: 3,
    name: "su-dung",
    score: 29,
  },
  {
    id: 4,
    name: "sooyeon",
    score: 28,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((item) => item.id === id);
  console.log(filteredMovies);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((item) => item.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
