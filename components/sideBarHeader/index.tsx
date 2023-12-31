import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import ChatIcon from "@mui/icons-material/Chat";
const index: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      sx={{
        backgroundColor: "#ffffff",
        width: "100%",
      }}
    >
      <IconButton>
        <AccountCircleIcon />
      </IconButton>
      <IconButton>
        <PeopleOutlineIcon />
      </IconButton>
      <IconButton>
        <ChatIcon />
      </IconButton>
      <IconButton>
        <DataUsageIcon />
      </IconButton>
    </Box>
  );
};

export default index;
