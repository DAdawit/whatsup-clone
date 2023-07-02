import MainScreenHeader from "@/components/MainScreen/MainScreenHeader";
import MessagesBody from "@/components/MainScreen/MessagesBody";
import MessageInput from "@/components/MainScreen/MessageInput";
import { Box } from "@mui/material";
import React from "react";

const MianScreen = () => {
  return (
    <div className="w-full flex flex-col">
      <MainScreenHeader />
      <MessagesBody />
      <MessageInput />
    </div>
  );
};

export default MianScreen;
