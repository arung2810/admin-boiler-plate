import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Skeleton, Backdrop, Button, CircularProgress } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function BackdropPage() {
  const [showCode, setShowCode] = useState({
    basicBackdrop: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasicBackdrop = `
// If you want to change the style of the Backdrop, you can do so in the theme.js file
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basicBackdrop: codeStringBasicBackdrop,

    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };
  

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Backdrop
      </Typography>

      {/* Variants */}
      <Paper elevation={0}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h6" className="page-title">Basic</Typography>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Show Code">
              <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, basicBackdrop: !prev.basicBackdrop }))}>
                <RiCodeSSlashFill />
              </IconButton>
            </Tooltip>
            <Tooltip title="Copy Code">
              <IconButton className='icon-button' onClick={() => handleCopy("basicBackdrop")}>
                <TbCopy />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
        <Stack gap={3}>
          <Box>
            <Button className='btn primary-btn' onClick={handleOpen}>Show backdrop</Button>
            <Backdrop
              sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop> 
          </Box>   

          {showCode.basicBackdrop && (
            <Box className="code-block" sx={{ position: 'relative' }}>
              <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                {codeStringBasicBackdrop}
              </SyntaxHighlighter>
            </Box>
          )}
        </Stack>
      </Paper>
      

      {/* Copy feedback */}
      <Snackbar
        open={copySuccess}
        message="Code copied!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default BackdropPage;
