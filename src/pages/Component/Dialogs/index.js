import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, useMediaQuery } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '@mui/material/styles'
import classnames from 'classnames'

function DialogsPage() {
  const [showCode, setShowCode] = useState({
    alertDialog: false,
    fullDialog: false,
    responsiveFullDialog: false,
    scrollingLongContentDialog: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringAlertDialog = `
// If you want to change the style of the Dialogs, you can do so in the theme.js file
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
// If you want to change the style of the Dialogs, you can do so in the theme.js file
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

  const codeStringResponsiveFullDialog = `
<<<<<<< HEAD
// If you want to change the style of the Dialogs, you can do so in the theme.js file
=======
// If you want to change the style of the button groups, you can do so in the theme.js file
>>>>>>> 87ac0b744dc092e89444401aa42fc45a659877d5
// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { useTheme } from '@mui/material/styles'

const DialogsRespoFullScreen = () => {
  // States
  const [open, setOpen] = useState(false)

  // Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
        closeAfterTransition={false}
      >
        <DialogTitle id='responsive-dialog-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText>
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

export default DialogsRespoFullScreen`;

  const codeStringScrollingLongContentDialog = `
<<<<<<< HEAD
// If you want to change the style of the Dialogs, you can do so in the theme.js file
=======
// If you want to change the style of the button groups, you can do so in the theme.js file
>>>>>>> 87ac0b744dc092e89444401aa42fc45a659877d5
// React Imports
import { useEffect, useRef, useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

// Third-party Imports
import classnames from 'classnames'

const DialogsScroll = () => {
  // States
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')

  // Refs
  const descriptionElementRef = useRef(null)

  const handleClickOpen = scrollType => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => setOpen(false)

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef

      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <div className='flex gap-4'>
      <Button variant='outlined' onClick={handleClickOpen('paper')}>
        scroll=paper
      </Button>
      <Button variant='outlined' onClick={handleClickOpen('body')}>
        scroll=body
      </Button>
      <Dialog
        open={open}
        scroll={scroll}
        onClose={handleClose}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
        closeAfterTransition={false}
      >
        <DialogTitle id='scroll-dialog-title'>Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText id='scroll-dialog-description' ref={descriptionElementRef} tabIndex={-1}>
            {[...new Array(50)].map(
              () => 'Cotton candy sesame snaps toffee chupa chups caramels. Candy icing gummi bears pastry cake icing brownie
                oat cake. Tootsie roll biscuit chupa chups apple pie muffin jelly-o caramels. Muffin chocolate bar sweet
                cookie chupa chups.'
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classnames('dialog-actions-dense', { '!pt-3': scroll === 'paper' })}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogsScroll`;


  const handleCopy = async (codeKey) => {
    const codeMap = {
      alertDialog: codeStringAlertDialog,
      fullDialog: codeStringFullDialog,
      responsiveFullDialog: codeStringResponsiveFullDialog,
      scrollingLongContentDialog: codeStringScrollingLongContentDialog,
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

  const [open2, setOpen2] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const handleClickOpen2 = () => setOpen2(true)
  const handleClose2 = () => setOpen2(false)

  const [open3, setOpen3] = useState(false)
  const [scroll, setScroll] = useState('paper')

  const descriptionElementRef = useRef(null)

  const handleClickOpen3 = scrollType => () => {
    setOpen3(true)
    setScroll(scrollType)
  }

  const handleClose3 = () => setOpen3(false)

  useEffect(() => {
    if (open3) {
      const { current: descriptionElement } = descriptionElementRef

      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open3])

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
              <Typography variant="body1" mb={2} className='page-title'>Add 'fullScreen' prop with Dialog component for a full screen dialog.</Typography>
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

        {/* RESPONSIVE FULL SCREEN DIALOG */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Responsive Full Screen</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, responsiveFullDialog: !prev.responsiveFullDialog }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("responsiveFullDialog")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4} direction='row'>
            <Box>
              <Typography variant="body1" mb={2} className='page-title'>Make a full screen dialog at particular screen sizes only by using 'useMediaQuery' hook.</Typography>
              <Button className='btn primary-btn' onClick={handleClickOpen2}>
                Open Dialog
              </Button>
            </Box>

            <Dialog
              fullScreen={fullScreen}
              open={open2}
              onClose={handleClose2}
              aria-labelledby='responsive-dialog-title'
              closeAfterTransition={false}
            >
              <DialogTitle id='responsive-dialog-title'>Use Google's location service?</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Let Google help apps determine location. This means sending anonymous location data to Google, even when no
                  apps are running.
                </DialogContentText>
              </DialogContent>
              <DialogActions className='dialog-actions-dense'>
                <Button className='btn secondary-btn' onClick={handleClose2}>Disagree</Button>
                <Button className='btn primary-btn' onClick={handleClose2}>Agree</Button>
              </DialogActions>
            </Dialog>

            {showCode.responsiveFullDialog && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringResponsiveFullDialog}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* SCROLLING LONG CONTENT DIALOG */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Scrolling Long Content</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, scrollingLongContentDialog: !prev.scrollingLongContentDialog }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("scrollingLongContentDialog")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4} direction='row'>
            <Box>
              <Typography variant="body1" mb={2} className='page-title'>'scroll=paper' scrolls within the paper element and 'scroll=body' scrolls within the body element.</Typography>
              <Stack direction="row" flexWrap='wrap' gap={2}>
                <Button className='btn primary-btn' onClick={handleClickOpen3('paper')}>
                  Scroll=Paper
                </Button>
                <Button className='btn primary-btn' onClick={handleClickOpen3('body')}>
                  Scroll=Body
                </Button>
              </Stack>
            </Box>

            <Dialog
              open={open3}
              scroll={scroll}
              onClose={handleClose3}
              aria-labelledby='scroll-dialog-title'
              aria-describedby='scroll-dialog-description'
              closeAfterTransition={false}
            >
              <DialogTitle id='scroll-dialog-title'>Subscribe</DialogTitle>
              <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText id='scroll-dialog-description' ref={descriptionElementRef} tabIndex={-1}>
                  {[...new Array(50)].map(
                    () => `Cotton candy sesame snaps toffee chupa chups caramels. Candy icing gummi bears pastry cake icing brownie
                      oat cake. Tootsie roll biscuit chupa chups apple pie muffin jelly-o caramels. Muffin chocolate bar sweet
                      cookie chupa chups.`
                  )}
                </DialogContentText>
              </DialogContent>
              <DialogActions className={classnames('dialog-actions-dense', { '!pt-3': scroll === 'paper' })}>
                <Button className='btn secondary-btn' onClick={handleClose3}>Cancel</Button>
                <Button className='btn primary-btn' onClick={handleClose3}>Subscribe</Button>
              </DialogActions>
            </Dialog>

            {showCode.scrollingLongContentDialog && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringScrollingLongContentDialog}
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
