import { React, useState } from "react";
import TextField from "@mui/material/TextField";

const Search = () => {

    return (
        <div className="searchContainer">
          <div className="search">
            <TextField
              className="inputRounded"
              id="outlined-basic"
              fullWidth
              label="Search Here"
            />
          </div>
        </div>
      );
};

export default Search;