import { React, useState } from "react";
import TextField from "@mui/material/TextField";


const Search = ({ onSearchChange }) => {
  return (
    <div className="searchContainer">
      <div className="search">
        <TextField
          className="inputRounded"
          id="outlined-basic"
          fullWidth
          label="Search Here"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;