import React from 'react';
import { Box, Input } from '@mui/material';

function ChatPane() {
  return (
    <Box>
      <h2>AI Chat</h2>
      <Box style={{ height: '300px', overflowY: 'scroll' }}>
        <p>Chat messages...</p>
      </Box>
      <Input type="text" placeholder="Type your message" fullWidth />
    </Box>
  );
}

export default ChatPane;
