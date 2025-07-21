import { React, useRef, useState } from "react";
import { Box, Grid, Button, AppBar, Toolbar, Typography, Tabs, Tab, Select, MenuItem, Collapse, Popover } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../Constants";
import { makeStyles } from '@mui/styles';
import { LANGUAGE_VERSIONS } from "../Constants";
import CachedIcon from '@mui/icons-material/Cached';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TextInput from "./TextInput";
import MessageComponent from "./MessageComponent";

const ChatBot = () => {

    const [messages, setMessages] = useState([{isAiMessage: true, messageBody: 'Hi this is chatgpt. You can ask me anything.'}]);

    const handleSend = (input) => {
        setMessages([...messages,
            {isAiMessage: false, messageBody: input}
        ])
        console.log('inside chatbot class',input)
        console.log(messages)
      };

    return (
        <Box sx={{
            width: '100%', border: '1px solid black', margin: "5px", borderRadius: '5px', padding: '2px'
        }}>
            <Box sx={{ width: '100%', height: '90%', bgcolor: 'red', flexGrow: 1, overflow: 'auto' }} >
                {messages.map((message,i) => <MessageComponent isAiMessage={message.isAiMessage} messageBody={message.messageBody} />)}
                {/* <MessageComponent isAiMessage={true} messageBody={'THis is the te message from ai aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'} />
                <MessageComponent isAiMessage={false} messageBody={'THis is the te message from ai aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'} /> */}
            </Box>
            <Box sx={{ width: '100%', height: '10%', bgcolor: 'green' }} >
                <TextInput handleSend={handleSend} />
            </Box>
        </Box>
    )

};
export default ChatBot;