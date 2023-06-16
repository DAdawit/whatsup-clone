"use client";
import ChatSideBar from "@/modules/ChatSideBar";
import { AllUsers } from "@/type";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

const getUsers = async () => {
  const staticData = await fetch("https://dummyjson.com/users/", {
    cache: "force-cache",
  });
  const dynamicData = await fetch("https://dummyjson.com/users/", {
    cache: "no-store",
  });
  const revalidateData = await fetch("https://dummyjson.com/users/", {
    next: { revalidate: 10 },
  });
  const userData: AllUsers = await dynamicData.json();
  return userData;
};

export default async function Home() {
  const fetchedUsers = await getUsers();
  console.log(fetchedUsers);

  return (
    <main className="">
      <Box
        sx={{
          display: "grid ",
          gridAutoFlow: "column",
          gridTemplateColumns: "repeat(4,1fr)",
          // backgroundColor: "yellow",
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
          }}
        >
          <ChatSideBar />
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
