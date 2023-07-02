import MoodIcon from "@mui/icons-material/Mood";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState<string>("");
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    alert(message);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      position="sticky"
      bottom={0}
      p={2}
      sx={{
        backgroundColor: "white",
      }}
    >
      <IconButton>
        <MoodIcon />
      </IconButton>
      <IconButton>
        <AttachFileIcon />
      </IconButton>
      <form className="w-full flex items-center gap-1" onSubmit={sendMessage}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="message"
          variant="outlined"
          size="small"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit">
          <SendIcon />
        </Button>
      </form>
      <IconButton>
        <KeyboardVoiceIcon />
      </IconButton>
    </Box>
  );
};

export default MessageInput;
