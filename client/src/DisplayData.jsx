import { useQuery, gql } from "@apollo/client";
import React from "react";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      name
      yearOfPublication
      isInTheatres
    }
  }
`;

function DisplayData() {
  const { data } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
  // if (data) {
  //   console.log(data);
  // }
  return (
    <div>
      {data &&
        data.users.map((user) => {
          return (
            <div key={user.id}>
              <h3>Name:{user.name}</h3>
              <h3>Age:{user.age}</h3>
              <h3>username:{user.username}</h3>
            </div>
          );
        })}

      {movieData &&
        movieData.movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h3>Name:{movie.name}</h3>
              <h3>Year:{movie.yearOfPublication}</h3>
              <h3>isInTheatres:{movie.isInTheatres}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default DisplayData;
