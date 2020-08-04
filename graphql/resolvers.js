const iimjiin = {
  name: "im jin",
  age: 29,
  gender: "M",
};

const resolvers = {
  Query: {
    person: () => iimjiin,
  },
};

export default resolvers;
