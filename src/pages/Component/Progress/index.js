import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, CircularProgress, LinearProgress } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function ProgressPage() {
  const [showCode, setShowCode] = useState({
    progressCircular: false,
    progressLinear: false,
    progressBuffer: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringProgressCircular = `
// If you want to change the style of the Progress, you can do so in the theme.js file
// MUI Imports
import CircularProgress from '@mui/material/CircularProgress'

const ProgressCircular = () => {
  return 
  <>
    <Stack gap={2} direction='row'>
      <CircularProgress />
      <CircularProgress color='success' />
      <CircularProgress color='error' />
      <CircularProgress color='warning' />
      <CircularProgress color='info' />
    </Stack>   

    <Stack gap={2} direction='row'>
      <CircularProgress variant='determinate' value={15} />
      <CircularProgress variant='determinate' value={25} color='success' />
      <CircularProgress variant='determinate' value={50} color='error' />
      <CircularProgress variant='determinate' value={75} color='warning' />
      <CircularProgress variant='determinate' value={100} color='info' />
    </Stack>   
  </>
}

export default ProgressCircular`;

  const codeStringProgressLinear = `
// If you want to change the style of the Progress, you can do so in the theme.js file
// MUI Imports
import CircularProgress from '@mui/material/LinearProgress'

const ProgressLinear = () => {
  return 
  <>
    <Stack gap={2}>
      <LinearProgress />
      <LinearProgress color='success' />
      <LinearProgress color='error' />
      <LinearProgress color='warning' />
      <LinearProgress color='info' />
    </Stack>   

    <Stack gap={2}>
      <LinearProgress variant='determinate' value={15} />
      <LinearProgress variant='determinate' value={25} color='success' />
      <LinearProgress variant='determinate' value={50} color='error' />
      <LinearProgress variant='determinate' value={75} color='warning' />
      <LinearProgress variant='determinate' value={100} color='info' />
    </Stack>   
  </>
}

export default ProgressLinear`;

  const codeStringProgressBuffer = `
// If you want to change the style of the Progress, you can do so in the theme.js file
// React Imports
import { useEffect, useRef, useState } from 'react'

// MUI Imports
import LinearProgress from '@mui/material/LinearProgress'

const ProgressLinearBuffer = () => {
  // States
  const [buffer, setBuffer] = useState(10)
  const [progress, setProgress] = useState(0)

  // eslint-disable-next-line
  const progressRef = useRef(() => {})

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0)
        setBuffer(10)
      } else {
        const diff = Math.random() * 10
        const diff2 = Math.random() * 10

        setProgress(progress + diff)
        setBuffer(progress + diff + diff2)
      }
    }
  })

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current()
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <LinearProgress variant='buffer' value={progress} valueBuffer={buffer} />
}

export default ProgressLinearBuffer`;


  const handleCopy = async (codeKey) => {
    const codeMap = {
      progressCircular: codeStringProgressCircular,
      progressLinear: codeStringProgressLinear,
      progressBuffer: codeStringProgressBuffer,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };


  // States
  const [buffer, setBuffer] = useState(10)
  const [progress, setProgress] = useState(0)

  // eslint-disable-next-line
  const progressRef = useRef(() => {})

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0)
        setBuffer(10)
      } else {
        const diff = Math.random() * 10
        const diff2 = Math.random() * 10

        setProgress(progress + diff)
        setBuffer(progress + diff + diff2)
      }
    }
  })

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current()
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])
  
    
  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Progress
      </Typography>

        <Stack gap={3}>
          
          {/* CIRCULAR PROGRESS */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Circular Progress (Indeterminate, Determinate)</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, progressCircular: !prev.progressCircular }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("progressCircular")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack gap={2} direction='row'>
                <CircularProgress />
                <CircularProgress color='success' />
                <CircularProgress color='error' />
                <CircularProgress color='warning' />
                <CircularProgress color='info' />
              </Stack>  
              <Stack gap={2} direction='row'>
                <CircularProgress variant='determinate' value={15} />
                <CircularProgress variant='determinate' value={25} color='success' />
                <CircularProgress variant='determinate' value={50} color='error' />
                <CircularProgress variant='determinate' value={75} color='warning' />
                <CircularProgress variant='determinate' value={100} color='info' />
              </Stack>              

              {showCode.progressCircular && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringProgressCircular}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>

          {/* LINEAR PROGRESS */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Linear Progress (Indeterminate, Determinate)</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, progressLinear: !prev.progressLinear }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("progressLinear")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack gap={2} >
                <LinearProgress />
                <LinearProgress color='success' />
                <LinearProgress color='error' />
                <LinearProgress color='warning' />
                <LinearProgress color='info' />
              </Stack>  
              <Stack gap={2} >
                <LinearProgress variant='determinate' value={15} />
                <LinearProgress variant='determinate' value={25} color='success' />
                <LinearProgress variant='determinate' value={50} color='error' />
                <LinearProgress variant='determinate' value={75} color='warning' />
                <LinearProgress variant='determinate' value={100} color='info' />
              </Stack>              

              {showCode.progressLinear && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringProgressLinear}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>

          {/* BUFFER PROGRESS */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Buffer Progress</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, progressBuffer: !prev.progressBuffer }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("progressBuffer")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <LinearProgress variant='buffer' value={progress} valueBuffer={buffer} />
                          

              {showCode.progressBuffer && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringProgressBuffer}
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

export default ProgressPage;
