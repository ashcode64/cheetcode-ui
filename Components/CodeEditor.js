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


// import Output from "./Output";

const useStyles = makeStyles((theme) => ({
    popover: {
        zIndex: 1,
        width: '100%',
        left: 0,
        backgroundColor: '#f5f5f5',
        maxHeight: '50%',
        overflowY: 'auto',
    },
}));

const CodeEditor = () => {
    const classes = useStyles();
    const editorRef = useRef();
    const [codeSnippet, setCodeSnippet] = useState("");
    const [language, setLanguage] = useState("python");
    const [testCasesChecked, setTestCasesChecked] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const languages = Object.entries(LANGUAGE_VERSIONS);
    const ACTIVE_COLOR = "blue.400";

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const handleLanguageChange = (event) => {
        console.log(languages);
        console.log(event);
        console.log(CODE_SNIPPETS[language])
        setLanguage(event.target.value);
        setCodeSnippet(CODE_SNIPPETS[event.target.value]);
    };

    const toggleConsole = (event) => {
        setTestCasesChecked(!testCasesChecked);
        setAnchorEl(event.currentTarget);
    };

    return (
        <Box sx={{ width: '100%', border: '1px solid black', margin: "5px", borderRadius: '5px', padding: '5px' }}>
            <Box sx={{ display: 'flex', width: '100%', bgcolor: 'green', height: '7%' }} >
                <Box sx={{ display: 'flex', width: '100%', height: '7%', paddingLeft: '20px', paddingTop: '10px' }}>
                    <Select
                        labelId="lang-select"
                        id="lang-select"
                        value={language}
                        label="Python"
                        defaultValue="python"
                        onChange={handleLanguageChange}
                        sx={{ height: '32px', display: 'flex', paddingLeft: '20px', minWidth: '30%', maxWidth: '40%' }}

                    >
                        {languages.map(([lang, version]) => (
                            <MenuItem key={lang} value={lang}>{lang} &nbsp;
                                <Typography variant="caption" color="gray.500" fontSize="sm">{version} </Typography></MenuItem>
                        ))}
                    </Select>
                </Box>
                <Box sx={{ display: 'flex', width: '10%', height: '7%', paddingLeft: '20px', paddingTop: '10px' }}>
                    <Tooltip title="Reset" placement="bottom">
                        <IconButton aria-label="delete">
                            <CachedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Box sx={{ width: '100%', height: '85%', bgcolor: 'red' }}>
                <Editor
                    options={{
                        minimap: {
                            enabled: false,
                        },
                    }}
                    height="100%"
                    theme="vs-dark"
                    language={language}
                    defaultValue={CODE_SNIPPETS[language]}
                    onMount={onMount}
                    value={codeSnippet}
                    onChange={(codeSnippet) => setCodeSnippet(codeSnippet)}
                />


                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}

                >
                    <Box>
                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                    </Box>
                </Popover>
            </Box>
            <Box sx={{ width: '100%', bgcolor: 'red', height: '8%' }}>
                <Box sx={{ display: 'flex', width: '100%', bgcolor: 'green' }} >
                    <Box sx={{ display: 'flex', width: '100%', bgcolor: 'green' }} >
                        <Button onClick={handleClick}>Console</Button>
                    </Box>
                    <Box sx={{ display: 'flex', width: '15%', bgcolor: 'green' }} >
                        <Button>Run</Button>
                    </Box>
                    <Box sx={{ display: 'flex', width: '15%', bgcolor: 'green' }} >
                        <Button >Submit</Button>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};
export default CodeEditor;