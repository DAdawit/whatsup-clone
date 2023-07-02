"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import ChatSideBar from "@/modules/ChatSideBar";
import { AllUsers } from "@/type";
import { getUsers } from "@/lib/firebase/helper";

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
    <main>
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
          {/* {fetchedUsers && <ChatSideBar data={fetchedUsers} />} */}

          <ChatSideBar data={fetchedUsers as any} />
        </Box>
        <Box
          sx={{
            gridColumn: "1",
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
