"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import ChatSideBar from "@/modules/ChatSideBar";
import { AllUsers } from "@/type";

const getUsers = async () => {
  const dynamicData = await fetch("https://dummyjson.com/users/", {
    cache: "no-store",
  });
  const userData: AllUsers = await dynamicData.json();
  return userData;
};

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

          <ChatSideBar data={fetchedUsers} />
        </Box>
        <Box
          sx={{
            gridColumn: "2/5",
            backgroundColor: "#F1F2F6",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/whatsapp-bg.png"
            height="4000"
            width="4000"
            alt="bgimage"
          />
        </Box>
      </Box>
    </main>
  );
}
