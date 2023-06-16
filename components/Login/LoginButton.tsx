import { Box, Button } from "@mui/material";
import React from "react";
import Head from "next/head";
import GoogleIcon from "@mui/icons-material/Google";

const LoginButton = () => {
  const handleSignIn = () => {
    console.log("hello");
  };
  return (
    <>
      <Head>{/* <title>Login</title> */}</Head>
      <Box mt={2}>
        <Button
          variant="outlined"
          endIcon={<GoogleIcon />}
          onClick={handleSignIn}
        >
          Sign In with google
        </Button>
      </Box>
    </>
  );
};

export default LoginButton;
