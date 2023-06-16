import React from "react";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import { Box, Button, IconButton } from "@mui/material";
const Archive = () => {
  return (
    <Box
      display="flex"
      color="white"
      justifyContent="center"
      sx={{
        backgroundColor: "white",
        marginTop: "1px",
      }}
    >
      <Button
        sx={{
          color: "#868686",
          width: "100%",
        }}
      >
        <MoveToInboxIcon />
        Archive
      </Button>
    </Box>
  );
};

export default Archive;
