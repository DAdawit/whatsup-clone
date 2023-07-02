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

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "1/3",
          backgroundColor: "#eeeeee",
          minWidth: "250px",
          overflow: "auto",
        }}
      >
        <ChatSideBar data={fetchedUsers as any} />
      </Box>
      <Box
        sx={{
          width: "100%",
          overflowY: "auto",
        }}
      >
        <MianScreen />
      </Box>
    </Box>
  );
}
