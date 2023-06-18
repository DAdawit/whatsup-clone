"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import Head from "next/head";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/navigation";
import { handleSignIn } from "./helper";
const LoginButton = () => {
  const router = useRouter();

  return (
    <>
      <Head>{/* <title>Login</title> */}</Head>
      <Box mt={2}>
        <Button
          variant="outlined"
          endIcon={<GoogleIcon />}
          onClick={() => handleSignIn(router)}
        >
          Sign In with google
        </Button>
      </Box>
    </>
  );
};

export default LoginButton;
