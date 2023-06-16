import { Box } from "@mui/material";
import React from "react";
import SideBarHeader from "../components/sideBarHeader";
import Search from "@/components/sideBarHeader/Search";
import Archive from "@/components/sideBarHeader/Archive";
import { Typography } from "@mui/material";

const ChatSideBar = () => {
  return (
    <Box>
      <SideBarHeader />
      <Search />
      <Archive />
      <Typography variant="body2">
        Your personal messages are end-to-end encrypted
      </Typography>
    </Box>
  );
};

export default ChatSideBar;
