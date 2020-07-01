import React from "react";

const Search = (props) => {
  return (
    <>
      <div className="container">
        <div className="app">
          <h1 className="h1">Emoji Search</h1>
        </div>
        <div className="search">
          <input
            className="search"
            placeholder="   Quel Emoji souhaitez vous chercher ?"
            onChange={(event) => {
              props.onSearch(event.target.value);
            }}
          ></input>
        </div>
      </div>
    </>
  );
};

export default Search;
