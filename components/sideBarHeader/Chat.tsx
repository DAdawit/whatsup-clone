import { AllUsersType } from "@/type";
import { Box, Avatar, Typography } from "@mui/material";
import React from "react";
type Props = {
  data: AllUsersType;
};
const Chat: React.FC<Props> = ({ data }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid #eee",
        "&:hover": {
          backgroundColor: "#eee",
        },
      }}
    >
      <Box display="flex" justifyContent="start" alignItems="center">
        <Avatar alt="Remy Sharp" src={`${data.image}`} />

        <Box
          display="flex"
          justifyContent="justify-between"
          alignContent="center"
        >
          <Box ml={2}>
            <Typography
              variant="body2"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100px",
              }}
            >
              {data.firstName}
            </Typography>
            <Typography variant="caption">this is message body</Typography>
          </Box>
          <Box ml={2} display="flex" alignItems="center">
            <Typography variant="caption">10:30pm</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
