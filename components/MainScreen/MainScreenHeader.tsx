"use client";

import { Box, Typography } from "@mui/material";

const MainScreenHeader: React.FC = () => {
  return (
    // <Box
    //   display="flex"
    //   justifyContent="justify-between"
    //   alignItems="center"
    //   sx={{
    //     width: "100%",
    //     position: "sticky",
    //     top: "0",
    //     backgroundColor: "#eee",
    //     borderBottom: "1px solid black",
    //   }}
    // >
    //   <Typography>hello</Typography>
    // </Box>
    <div className="flex justify-between bg-gray-400 h-20 w-full">
      <h1>hello</h1>
      <h1>hello</h1>
    </div>
  );
};

export default MainScreenHeader;
