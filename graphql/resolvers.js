import { getById, deleteMovie, addMovie, getMovies } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    // (parent, args, context, info)
    movie: (_, args) => {
      return getById(args.id);
    },
    delete: (_, args) => {
      return deleteMovie(args.id);
    },
  },
  Mutation: {
    addMovie: (_, args) => {
      return addMovie(args.name, args.score);
    },
  },
};

export default resolvers;
