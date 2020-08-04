import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, args, context, info) => {
      // console.log(args);
      // console.log(context);
      // console.log(info);
      return getById(args.id);
    },
  },
};

export default resolvers;
