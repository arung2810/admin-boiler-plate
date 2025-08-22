import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Link, Grid, Button } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast, ToastContainer } from 'react-toastify'

function ToastsPage() {
  const [showCode, setShowCode] = useState({
    toastsBlank: false,
    toastsMultiLine: false,
    toastsSuccess: false,
    toastsError: false,
    toastsPosition: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

const codeStringToastsBlank = `
// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast, ToastContainer } from 'react-toastify'

const ToastsBlank = () => {
  return (
    <div className='flex text-center flex-col items-center'>
      <Typography className='mbe-4' variant='h5'>
        Blank
      </Typography>
      <Typography className='mbe-3'>The most basic variant does not have an icon.</Typography>
      <Button
        variant='contained'
        onClick={() =>
          toast('Blank Toast', {
            hideProgressBar: false
          })
        }
      >
        Blank
      </Button>
      <ToastContainer />
    </div>
  )
}

export default ToastsBlank`;

const codeStringToastsMultiLine = `
// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast, ToastContainer } from 'react-toastify'

const ToastsMultiLine  = () => {
  const handleClick = () => {
    return toast(
      "This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller."
    )
  }
  return (
    <div className='flex text-center flex-col items-center'>
      <Typography className='mbe-4' variant='h5'>
        Multi Line
      </Typography>
      
      <Button className='btn primary-btn' onClick={handleClick}>Multi Line</Button>
      <ToastContainer />
    </div>
  )
}

export default ToastsMultiLine `;

const codeStringToastsSuccess = `
// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast, ToastContainer } from 'react-toastify'

const ToastsSuccess = () => {

  return (
    <div className='flex text-center flex-col items-center'>
      <Typography className='mbe-4' variant='h5'>
        Multi Line
      </Typography>
      
      <Button className='btn primary-btn' onClick={() => toast.success('Successfully toasted!')}> Success </Button>
      <ToastContainer />
    </div>
  )
}

export default ToastsSuccess`;

const codeStringToastsError = `
// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast, ToastContainer } from 'react-toastify'

const ToastsError = () => {

  return (
    <div className='flex text-center flex-col items-center'>
      <Typography className='mbe-4' variant='h5'>
        Multi Line
      </Typography>
      
      <Button className='btn primary-btn' onClick={() => toast.error('This did not work.')}> Error </Button>
      <ToastContainer />
    </div>
  )
}

export default ToastsError`;

const codeStringToastsPosition = `
// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast, ToastContainer } from 'react-toastify'

const ToastsPosition = () => {

  const handleClick = () => {
    return toast.success('Always at the bottom.', {
      position: 'bottom-right'
    })
  }
  return (
    <div className='flex text-center flex-col items-center'>
      <Typography className='mbe-4' variant='h5'>
        Multi Line
      </Typography>
      
      <Button className='btn primary-btn' onClick={handleClick}> Position </Button>
      <ToastContainer />
    </div>
  )
}

export default ToastsPosition`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      toastsBlank: codeStringToastsBlank,
      toastsMultiLine: codeStringToastsMultiLine,
      toastsSuccess: codeStringToastsSuccess,
      toastsError: codeStringToastsError,
      toastsPosition: codeStringToastsPosition,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };
 

  const handleClick = () => {
    return toast(
      "This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller."
    )
  }
  const handleClick1 = () => {
    return toast.success('Always at the bottom.', {
      position: 'bottom-right'
    })
  }

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Toasts
      </Typography>

        <Stack gap={3}>

          {/* BASIC INFORMATION */}
          <Paper elevation={0}>
             <Typography variant="h6" className="page-title" mb={2}>Important Information</Typography>
              <Typography className="page-title">'react-toastify' is a third-party library. Please refer to its <Link href="https://www.npmjs.com/package/react-toastify" className='quick-link'>official documentation</Link> for more details.</Typography>                
          </Paper>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              {/* BLANK */}
              <Paper elevation={0}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                  <Typography variant="h6" className="page-title">Blank</Typography>
                  <Stack direction="row" spacing={1}>
                    <Tooltip title="Show Code">
                      <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, toastsBlank: !prev.toastsBlank }))}>
                        <RiCodeSSlashFill />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Copy Code">
                      <IconButton className='icon-button' onClick={() => handleCopy("toastsBlank")}>
                        <TbCopy />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Stack>
                <Stack gap={3}>

                  <Button
                    className="btn primary-btn"
                    onClick={() =>
                      toast('Blank Toast', {
                        hideProgressBar: false
                      })
                    }
                    >
                    Blank
                  </Button>
                  <ToastContainer />

                  {showCode.toastsBlank && (
                    <Box className="code-block" sx={{ position: 'relative' }}>
                      <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                        {codeStringToastsBlank}
                      </SyntaxHighlighter>
                    </Box>
                  )}
                </Stack>
              </Paper>              
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              {/* Multi Line */}
              <Paper elevation={0}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                  <Typography variant="h6" className="page-title">Multi Line</Typography>
                  <Stack direction="row" spacing={1}>
                    <Tooltip title="Show Code">
                      <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, toastsMultiLine: !prev.toastsMultiLine }))}>
                        <RiCodeSSlashFill />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Copy Code">
                      <IconButton className='icon-button' onClick={() => handleCopy("toastsMultiLine")}>
                        <TbCopy />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Stack>
                <Stack gap={3}>

                  <Button className='btn primary-btn' onClick={handleClick}>Multi Line</Button>
                  <ToastContainer />

                  {showCode.toastsMultiLine && (
                    <Box className="code-block" sx={{ position: 'relative' }}>
                      <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                        {codeStringToastsMultiLine}
                      </SyntaxHighlighter>
                    </Box>
                  )}
                </Stack>
              </Paper>              
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              {/* SUCCESS */}
              <Paper elevation={0}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                  <Typography variant="h6" className="page-title">Success</Typography>
                  <Stack direction="row" spacing={1}>
                    <Tooltip title="Show Code">
                      <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, toastsSuccess: !prev.toastsSuccess }))}>
                        <RiCodeSSlashFill />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Copy Code">
                      <IconButton className='icon-button' onClick={() => handleCopy("toastsSuccess")}>
                        <TbCopy />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Stack>
                <Stack gap={3}>

                  <Button className='btn primary-btn' onClick={() => toast.success('Successfully toasted!')}> Success </Button>
                  <ToastContainer />

                  {showCode.toastsSuccess && (
                    <Box className="code-block" sx={{ position: 'relative' }}>
                      <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                        {codeStringToastsSuccess}
                      </SyntaxHighlighter>
                    </Box>
                  )}
                </Stack>
              </Paper>              
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              {/* ERROR */}
              <Paper elevation={0}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                  <Typography variant="h6" className="page-title">Error</Typography>
                  <Stack direction="row" spacing={1}>
                    <Tooltip title="Show Code">
                      <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, toastsError: !prev.toastsError }))}>
                        <RiCodeSSlashFill />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Copy Code">
                      <IconButton className='icon-button' onClick={() => handleCopy("toastsError")}>
                        <TbCopy />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Stack>
                <Stack gap={3}>

                  <Button className='btn primary-btn' onClick={() => toast.error('This did not work.')}> Error </Button>
                  <ToastContainer />

                  {showCode.toastsError && (
                    <Box className="code-block" sx={{ position: 'relative' }}>
                      <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                        {codeStringToastsError}
                      </SyntaxHighlighter>
                    </Box>
                  )}
                </Stack>
              </Paper>              
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              {/* POSITION */}
              <Paper elevation={0}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                  <Typography variant="h6" className="page-title">Position</Typography>
                  <Stack direction="row" spacing={1}>
                    <Tooltip title="Show Code">
                      <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, toastsPosition: !prev.toastsPosition }))}>
                        <RiCodeSSlashFill />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Copy Code">
                      <IconButton className='icon-button' onClick={() => handleCopy("toastsPosition")}>
                        <TbCopy />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Stack>
                <Stack gap={3}>

                  <Button className='btn primary-btn' onClick={handleClick1}> Position </Button>
                  <ToastContainer />

                  {showCode.toastsPosition && (
                    <Box className="code-block" sx={{ position: 'relative' }}>
                      <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                        {codeStringToastsPosition}
                      </SyntaxHighlighter>
                    </Box>
                  )}
                </Stack>
              </Paper>              
            </Grid>
            
          </Grid>

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

export default ToastsPage;
