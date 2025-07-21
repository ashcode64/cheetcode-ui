import React from 'react';
import { Box, TextareaAutosize } from '@mui/material';

function EditorPane() {
  return (
    <Box>
      <h2>Code Editor</h2>
      <TextareaAutosize
        minRows={10}
        style={{ width: '100%' }}
      />
      <Box>
        <h3>Test Cases</h3>
        <p>Test case 1...</p>
        <p>Test case 2...</p>
      </Box>
    </Box>
  );
}

export default EditorPane;
