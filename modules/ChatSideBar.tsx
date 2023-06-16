import { Box } from "@mui/material";
import React from "react";
import SideBarHeader from "../components/sideBarHeader";
import Search from "@/components/sideBarHeader/Search";
import Archive from "@/components/sideBarHeader/Archive";
import { Typography } from "@mui/material";
import { AllUsersType } from "@/type";
import { AllUsers } from "@/type";
import Chat from "@/components/sideBarHeader/Chat";
type Props = {
  data: AllUsers;
};

const ChatSideBar: React.FC<Props> = ({ data }) => {
  return (
    <Box
      sx={{
        overflowY: "auto",
      }}
    >
      <SideBarHeader />
      <Search />
      <Archive />
      <Box pb={10}>
        {!!data?.users &&
          data?.users.map((user: AllUsersType) => (
            <Chat key={user.id} data={user} />
          ))}
        <Typography variant="body2">
          Your personal messages are end-to-end encrypted
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatSideBar;
