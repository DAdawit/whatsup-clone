"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import ChatSideBar from "@/modules/ChatSideBar";
import { AllUsers } from "@/type";
import { getUsers } from "@/lib/firebase/helper";
import MianScreen from "@/modules/MianScreen";

export default function Home() {
  const [fetchedUsers, setFetchedUsers] = useState<AllUsers | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getUsers();
      setFetchedUsers(userData);
    };
    fetchUsers();
  }, []);
  console.log(fetchedUsers);
  // console.log(fetchedUsers);

  return (
    <main>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateColumns: "repeat(4,1fr)",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            gridColumn: "1/2",
            backgroundColor: "#eeeeee",
            width: "100%",
            minWidth: "250px",
            overflow: "auto",
          }}
        >
          {/* {fetchedUsers && <ChatSideBar data={fetchedUsers} />} */}

          <ChatSideBar data={fetchedUsers as any} />
        </Box>
        <Box display="grid" width="100%">
          <MianScreen />
        </Box>
      </Box>
    </main>
  );
}
