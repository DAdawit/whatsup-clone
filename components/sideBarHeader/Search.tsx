import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { IconButton } from "@mui/material";

const Search: React.FC = () => {
  return (
    <Box
      display="flex"
      sx={{
        backgroundColor: "#ffffff",
        marginTop: "1px",
        paddingX: "5px",
        paddingY: "5px",
      }}
    >
      <TextField
        id="input-with-icon-textfield"
        // label="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        size="small"
        fullWidth
      />
      <IconButton>
        <FilterListIcon />
      </IconButton>
    </Box>
  );
};

export default React.memo(Search);
