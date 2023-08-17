const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "James",
        username: "james",
        age: 23,
        nationality: "BRAZIL",
      },
      {
        id: 3,
        name: "Jimmy",
        username: "jimmy",
        age: 21,
        nationality: "MEXICO",
      },
    ],
    
  },
  {
    id: 2,
    name: "James",
    username: "james",
    age: 23,
    nationality: "BRAZIL",
    friends: [
      {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
      },
    ],
  },
  {
    id: 3,
    name: "Jimmy",
    username: "jimmy",
    age: 21,
    nationality: "MEXICO",
    friends: [
      {
        id: 2,
        name: "James",
        username: "james",
        age: 23,
        nationality: "BRAZIL",
      },
    ],
  },
];

const MovieList = [
  {
    id: 1,
    name: "avengers",
    yearOfPublication: 2022,
    isInTheatres: true
  },
  {
    id: 2,
    name: "justice league",
    yearOfPublication: 2025,
    isInTheatres: false
  },
  {
    id: 3,
    name: "star wars",
    yearOfPublication: 2020,
    isInTheatres: true
  },
]

module.exports = {
  UserList,
  MovieList
};
