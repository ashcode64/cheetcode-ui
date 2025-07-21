import { React, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { styled } from '@mui/material/styles';
import { Height } from '@material-ui/icons';
import { sendMsgToOpenAi } from "../openai";


const TextInput = (props) => {

    const [message, setMessage] = useState('');
    const [input, setInput] = useState('');

    const handleSend = async () => {
        console.log('inside text input',input)
        // const res = await sendMsgToOpenAi(input);
        props.handleSend(input)
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', bgcolor: 'yellow', height: '100%' }} >
            <Box sx={{ display: 'flex', width: '90%', alignItems: 'center', justifyContent: 'center', }} >
                <TextField
                    variant="outlined"
                    multiline
                    maxRows={3} // Specifies the maximum number of rows (optional)
                    fullWidth // Makes the text field take the full width of its container
                    sx={{ minHeight: '30px', maxHeight: '120px', width: '100%' }}
                    value={input}
                    onChange={(e) => { setInput(e.target.value);console.log(e.target.value) }}
                    InputProps={{
                        'aria-label': 'without label',
                        sx: { minHeight: '30px', maxHeight: '120px', width: '100%' } // Adjust the height of the input area
                    }}
                />
            </Box>
            <Box sx={{ display: 'flex', width: '10%', alignItems: 'center', justifyContent: 'center', }} >
                <Button variant="contained" color="primary" sx={{ minHeight: '40px', height: '40px', maxHeight: '120px', width: '100%' }} onClick={handleSend}>
                    <SendIcon sx={{ minHeight: '40px', height: '40px', maxHeight: '120px', width: '100%' }} />
                </Button>
            </Box>
        </Box>
    );
}

export default TextInput;
