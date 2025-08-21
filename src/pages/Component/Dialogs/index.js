import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
} from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function DialogsPage() {
  const [showCode, setShowCode] = useState({
    alertDialog: false,
    fullDialog: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringAlertDialog = `
// If you want to change the style of the button groups, you can do so in the theme.js file
// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

const DialogsAlert = () => {
  // States
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Button className='btn secondary-btn' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        closeAfterTransition={false}
      >
        <DialogTitle id='alert-dialog-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button className='btn secondary-btn' onClick={handleClose}>Disagree</Button>
          <Button className='btn primary-btn' onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogsAlert`;

  const codeStringFullDialog = `
// If you want to change the style of the button groups, you can do so in the theme.js file
// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

const DialogsFull = () => {
  // States
  const [open1, setOpen1] = useState(false)
  const handleClickOpen1 = () => setOpen1(true)
  const handleClose1 = () => setOpen1(false)
  return (
    <>
      <Button className='btn secondary-btn' onClick={handleClickOpen1}>
        Open dialog
      </Button>
      <Dialog
        fullScreen
        open={open1}
        onClose={handleClose1}
        aria-labelledby='full-dialog-title'
        closeAfterTransition={false}
      >
        <DialogTitle id='alert-dialog-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button className='btn secondary-btn' onClick={handleClose1}>Disagree</Button>
          <Button className='btn primary-btn' onClick={handleClose1}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogsAlert`;


  const handleCopy = async (codeKey) => {
    const codeMap = {
      alertDialog: codeStringAlertDialog,
      fullDialog: codeStringFullDialog,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [open1, setOpen1] = useState(false)
  const handleClickOpen1 = () => setOpen1(true)
  const handleClose1 = () => setOpen1(false)

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Dialogs
      </Typography>

      <Stack gap={3}>

        {/* ALERT DIALOG */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Alert Dialog</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, alertDialog: !prev.alertDialog }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("alertDialog")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4} direction='row'>
            <Box>
              <Typography variant="body1" mb={2} className='page-title'>Show an alert to the user to convey something or make the user choose from the given options.</Typography>
              <Button className='btn primary-btn' onClick={handleClickOpen}>
                Open dialog
              </Button>
            </Box>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
              closeAfterTransition={false}
            >
              <DialogTitle id='alert-dialog-title'>Use Google's location service?</DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  Let Google help apps determine location. This means sending anonymous location data to Google, even when no
                  apps are running.
                </DialogContentText>
              </DialogContent>
              <DialogActions className='dialog-actions-dense'>
                <Button className='btn secondary-btn' onClick={handleClose}>Disagree</Button>
                <Button className='btn primary-btn' onClick={handleClose}>Agree</Button>
              </DialogActions>
            </Dialog>

            {showCode.alertDialog && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringAlertDialog}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* FULL SCREEN DIALOG */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Full Screen Dialog</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, fullDialog: !prev.fullDialog }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("fullDialog")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4} direction='row'>
            <Box>
              <Typography variant="body1" mb={2} className='page-title'>Show an alert to the user to convey something or make the user choose from the given options.</Typography>
              <Button className='btn primary-btn' onClick={handleClickOpen1}>
                Open Dialog
              </Button>
            </Box>

            <Dialog
              fullScreen
              open={open1}
              onClose={handleClose1}
              aria-labelledby='full-screen-dialog-title'
              closeAfterTransition={false}
            >
              <DialogTitle id='alert-dialog-title'>Use Google's location service?</DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  Let Google help apps determine location. This means sending anonymous location data to Google, even when no
                  apps are running.
                </DialogContentText>
              </DialogContent>
              <DialogActions className='dialog-actions-dense'>
                <Button className='btn secondary-btn' onClick={handleClose1}>Disagree</Button>
                <Button className='btn primary-btn' onClick={handleClose1}>Agree</Button>
              </DialogActions>
            </Dialog>

            {showCode.fullDialog && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringFullDialog}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>


      </Stack>

      {/* Copy feedback */}
      <Snackbar
        open={copySuccess}
        message="Code copied!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default DialogsPage;
