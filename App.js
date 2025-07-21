import React, { useState } from 'react';
import { Box, Grid, Button, AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import QuestionPane from './QuestionPane';
import EditorPane from './EditorPane';
import ChatPane from './ChatPane';
import Collapse from '@mui/material/Collapse';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import coy from './Syntax-Highlighter';
import './App.css';
import CodeEditor from './Components/CodeEditor';
import ChatBot from './Components/ChatBot';

function App() {

  const [questionPaneChecked, setQuestionPaneChecked] = useState(false);
  const [editorPaneChecked, setEditorPaneChecked] = useState(true);
  const [chatPaneChecked, setChatPaneChecked] = useState(true);
  const [questionPaneContent, setQuestionPaneContent] = useState('question');
  const [editorPaneContent, setEditorPaneContent] = useState('text box');
  const [chatPaneContent, setChatPaneContent] = useState('open chat box');
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const exampleInputOutput1 = `Example Input: [1,2,3,3] 
  
Example Output: true`;

  const exampleInputOutput2 = `Example Input: [1,2,3,4] 
  
Example Output: false`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard');
    });
  };

  return (
    <Box className="question-page">
      <AppBar elevation={0} className="appBar">
        <Toolbar className="toolbar">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CheetCode
          </Typography>
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', bgcolor: '#9db949', paddingTop: '48px', width: '100%' }}>
        <Box sx={{ display: 'flex', width: questionPaneChecked ? '48%' : '4%', transition: 'width 0.5s ease-in-out', bgcolor: '#9db949' }}>
          {questionPaneChecked ?
            <Box sx={{ width: '100%', flexGrow: 1, overflow: 'auto', transition: 'width 0.5s ease-in-out' }}>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{ borderBottom: 1, borderColor: 'divider', 
                      minHeight: '40px', maxHeight: '40px', 
                      paddingRight: '60%', alignItems: 'center',
                      position:'sticky', top: '0', background: '#9db949' }} // Set the height of the Tabs component }}
              >
                <Tab label="Question" sx={{ textTransform: 'none' }} />
                <Tab label="Solution" sx={{ textTransform: 'none' }} />
                <Tab label="Submission" sx={{ textTransform: 'none' }} />
              </Tabs>
              <Box sx={{ flexGrow: 1, overflow: 'auto', padding: 2 }}>
                {selectedTab === 0 &&
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Duplicate Integer
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                      Easy
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                      Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                      Example 1
                    </Typography>
                    <Box sx={{ marginTop: 2, borderRadius: '8px', position: 'relative', '&:hover button': { display: 'block' } }}>
                      <SyntaxHighlighter language="javascript" style={coy} >
                        {exampleInputOutput1}
                      </SyntaxHighlighter>
                      <Button variant="contained" onClick={() => copyToClipboard(exampleInputOutput1)} sx={{
                        display: 'none',
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        padding: '4px 8px',
                        minHeight: 'auto',
                        minWidth: 'auto',
                        fontSize: '10px',
                      }}>
                        Copy
                      </Button>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                      Example 2
                    </Typography>
                    <Box sx={{ marginTop: 2, borderRadius: '8px', position: 'relative', '&:hover button': { display: 'block' } }}>
                      <SyntaxHighlighter language="javascript" style={coy} >
                        {exampleInputOutput2}
                      </SyntaxHighlighter>
                      <Button variant="contained" onClick={() => copyToClipboard(exampleInputOutput2)} sx={{
                        display: 'none',
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        padding: '4px 8px',
                        minHeight: 'auto',
                        minWidth: 'auto',
                        fontSize: '10px',
                      }}>
                        Copy
                      </Button>
                    </Box>
                    {/* <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                      Example 3
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                      Example 4
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                      Example 5
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                      Example 6
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                      Example 7
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                      Example 8
                    </Typography> */}
                  </Box>}
                {selectedTab === 1 && <div>Solution content goes here</div>}
                {selectedTab === 2 && <div>Submission content goes here</div>}
              </Box>
            </Box> :
            <Button onClick={() => { setQuestionPaneChecked(!questionPaneChecked); setEditorPaneChecked(!editorPaneChecked); }}>test</Button>}
        </Box>
        <Box sx={{ display: 'flex', width: editorPaneChecked ? '48%' : '4%', transition: 'width 0.5s ease-in-out', bgcolor: '#9b5252' }}>
          {editorPaneChecked ?  <CodeEditor /> : 
            <Box sx={{ display: 'flex', width: '100%' }}>
              <Box sx={{ display: 'flex', width: '50%', overflow: 'hidden' }}>
                <Button sx={{ writingMode: 'vertical-rl', textOrientation: 'mixed', minWidth: '100%', maxWidth: '100%' }} onClick={() => { setQuestionPaneChecked(!questionPaneChecked); setEditorPaneChecked(!editorPaneChecked); }}>
                  left side
                </Button>
              </Box>
              <Box sx={{ display: 'flex', width: '50%' }}>
                <Button sx={{ writingMode: 'vertical-lr', textOrientation: 'mixed', transform: 'rotate(180deg)', minWidth: '100%', maxWidth: '100%' }} onClick={() => { setChatPaneChecked(!chatPaneChecked); setEditorPaneChecked(!editorPaneChecked); }}>
                  right side
                </Button>
              </Box>
            </Box>}
        </Box>
        <Box sx={{ display: 'flex', width: chatPaneChecked ? '48%' : '4%', transition: 'width 0.5s ease-in-out', bgcolor: '#e1796e' }}>
          {chatPaneChecked ? <ChatBot /> : <Button onClick={() => { setChatPaneChecked(!chatPaneChecked); setEditorPaneChecked(!editorPaneChecked); }}>test</Button>}
        </Box>
      </Box >
    </Box>
  );
}

export default App;
