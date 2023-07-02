"use client";
import { Box, Typography, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SignOutButton from "../common/SignOutButton";

const MainScreenHeader: React.FC = () => {
  return (
    <Box
      position="sticky"
      top="0"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height={45}
      px={2}
      sx={{
        width: "100%",
        backgroundColor: "#eee",
        borderBottom: "1px solid darkgray",
      }}
    >
      <Box>
        <IconButton size="large">
          <AccountCircleIcon />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="space-evenly" alignItems="center">
        <IconButton>
          <VideocamOutlinedIcon />
        </IconButton>
        <IconButton>
          <LocalPhoneOutlinedIcon />
        </IconButton>

        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
        <SignOutButton />
      </Box>
    </Box>
  );
};

export default MainScreenHeader;
