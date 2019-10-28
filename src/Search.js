import React from "react";

const Search = props => {
  return (
    <div className="ui fluid input" style={{ marginBottom: 40 }}>
      <input
        type="search"
        placeholder="Search user list"
        onChange={props.searchUsr}
      />
    </div>
  );
};
export default Search;
