import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List - {userContext.name} <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
