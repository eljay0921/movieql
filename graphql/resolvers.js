import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, args) => getMovies(args.limit, args.rating),
  },
};

export default resolvers;
