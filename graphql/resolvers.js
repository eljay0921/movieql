import { getById, deleteMovie, getMovies } from "./db";

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
};

export default resolvers;
