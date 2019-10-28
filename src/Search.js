import React from "react";

const Search = props => {
  return (
    <div className="ui input">
      <input
        type="search"
        placeholder="Search user list"
        onChange={props.searchUsr}
      />
    </div>
  );
};
export default Search;
