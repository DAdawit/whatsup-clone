// import LoginButton from "@/components/Login/LoginButton";
"use client";
import LoginButton from "@/components/Login/LoginButton";
import { Button, Box } from "@mui/material";
import Image from "next/image";

export default function Login() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
      }}
    >
      {/* <div className="flex flex-col items-center gap-10"> */}
      <Box display="grid" justifyContent="center" alignItems="center">
        <Image
          src="https://www.freepnglogos.com/uploads/whatsapp-png-image-9.png"
          alt="Whatsapp Logo"
          width={200}
          height={200}
        />
        <LoginButton />
        {/* <Button variant="outlined">Login</Button> */}
      </Box>
      {/* </div> */}
    </Box>
  );
}
