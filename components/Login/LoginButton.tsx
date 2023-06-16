import { Box, Button } from "@mui/material";
import React from "react";
import Head from "next/head";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

const LoginButton = () => {
  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
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
