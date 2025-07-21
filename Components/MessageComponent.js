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
import Avatar from "@material-ui/core/Avatar";
import Tooltip from '@mui/material/Tooltip';
import TextInput from "./TextInput";

const MessageComponent = (props) => {

    return (
        <Box sx={{
            width: '100%', bgcolor: 'blue', display: 'flex', justifyContent: props.isAiMessage ? 'flex-start' : 'flex-end', paddingTop: '5px',paddingBottom: '5px'
        }}>
            {props.isAiMessage ? (
                <Box sx={{ width: '100%', bgcolor: 'yellow', display: 'flex' }}>
                    <Box sx={{
                        minWidth: '5%', maxWidth: '10%', border: '1px solid black', borderRadius: '5px', padding: '2px', bgcolor: 'orange'
                    }}>
                        <Avatar>AI</Avatar>
                    </Box>
                    <Box sx={{
                        minWidth: '10%', maxWidth: '80%', border: '1px solid black', alignItems: 'center', borderRadius: '5px', padding: '2px', bgcolor: 'green'
                    }}>
                        <Typography sx={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>{props.messageBody}</Typography>
                    </Box>
                </Box>
            ) :
                (
                    <Box sx={{ width: '100%', bgcolor: 'yellow', display: 'flex',justifyContent: 'flex-end' }}>

                        <Box sx={{
                            minWidth: '10%', maxWidth: '80%', border: '1px solid black', alignItems: 'center', borderRadius: '5px', padding: '2px', bgcolor: 'green'
                        }}>
                            <Typography sx={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>{props.messageBody}</Typography>
                        </Box>
                        <Box sx={{
                            minWidth: '5%', maxWidth: '10%', border: '1px solid black', borderRadius: '5px', padding: '2px', bgcolor: 'orange'
                        }}>
                            <Avatar>U</Avatar>
                        </Box>
                    </Box>
                )}

        </Box>
    )

};
export default MessageComponent;