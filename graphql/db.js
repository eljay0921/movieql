export const people = [
  {
    id: 1,
    name: "im jin",
    age: 29,
    gender: "M",
  },
  {
    id: 2,
    name: "jin!",
    age: 28,
    gender: "M",
  },
  {
    id: 3,
    name: "su-dung",
    age: 29,
    gender: "F",
  },
  {
    id: 4,
    name: "sooyeon",
    age: 28,
    gender: "F",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  console.log(filteredPeople);
  return filteredPeople[0];
};
