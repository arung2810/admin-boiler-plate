import React, { useState } from 'react';
import { Alert, Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, AlertTitle } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function AlertPage() {
  const [showCode, setShowCode] = useState({ basic: false, outlined: false, filled: false, description: false });
  const [copySuccess, setCopySuccess] = useState(false);

const codeStringBasic = `// If you want to change the style of the alert, you can do so in the theme.js file
// MUI Imports
import Alert from '@mui/material/Alert'

const AlertsBasic = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Alert severity='error'>This is an error alert — check it out!</Alert>
      <Alert severity='warning'>This is a warning alert — check it out!</Alert>
      <Alert severity='info'>This is an info alert — check it out!</Alert>
      <Alert severity='success'>This is a success alert — check it out!</Alert>
    </div>
  )
}

export default AlertsBasic`;

const codeStringOutlined = `// If you want to change the style of the alert, you can do so in the theme.js file
// MUI Imports
import Alert from '@mui/material/Alert'

const AlertsOutlined = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Alert variant='outlined' severity='error'>
        This is an error alert — check it out!
      </Alert>
      <Alert variant='outlined' severity='warning'>
        This is a warning alert — check it out!
      </Alert>
      <Alert variant='outlined' severity='info'>
        This is an info alert — check it out!
      </Alert>
      <Alert variant='outlined' severity='success'>
        This is a success alert — check it out!
      </Alert>
    </div>
  )
}

export default AlertsOutlined`;

const codeStringFilled = `// If you want to change the style of the alert, you can do so in the theme.js file
// MUI Imports
import Alert from '@mui/material/Alert'

const AlertsFilled = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Alert variant='filled' severity='error'>
        This is an error alert — check it out!
      </Alert>
      <Alert variant='filled' severity='warning'>
        This is a warning alert — check it out!
      </Alert>
      <Alert variant='filled' severity='info'>
        This is an info alert — check it out!
      </Alert>
      <Alert variant='filled' severity='success'>
        This is a success alert — check it out!
      </Alert>
    </div>
  )
}

export default AlertsFilled`;

const codeStringDescription = `// If you want to change the style of the alert, you can do so in the theme.js file
// MUI Imports
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const AlertsDescription = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity='warning'>
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity='info'>
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity='success'>
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </div>
  )
}

export default AlertsDescription`;


  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      outlined: codeStringOutlined,
      filled: codeStringFilled,
      description: codeStringDescription
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode(prev => ({ ...prev, [codeKey]: true })); // Show code block if not visible
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>Alerts</Typography>
      <Stack gap={3}>
        
        {/* BASIC ALERT */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Basic</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, basic: !prev.basic }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("basic")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='row' gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Alert severity='error'>This is an error alert — check it out!</Alert>
              <Alert severity='warning'>This is a warning alert — check it out!</Alert>
              <Alert severity='info'>This is an info alert — check it out!</Alert>
              <Alert severity='success'>This is a success alert — check it out!</Alert>
            </Stack>

            {showCode.basic && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringBasic}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* OUTLINED ALERT */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Outlined</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, outlined: !prev.outlined }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("outlined")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='row' gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Alert variant='outlined' severity='error'>This is an error alert — check it out!</Alert>
              <Alert variant='outlined' severity='warning'>This is a warning alert — check it out!</Alert>
              <Alert variant='outlined' severity='info'>This is an info alert — check it out!</Alert>
              <Alert variant='outlined' severity='success'>This is a success alert — check it out!</Alert>
            </Stack>

            {showCode.outlined && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringOutlined}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* FILLED ALERT */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Filled</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, filled: !prev.filled }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("filled")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='row' gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Alert variant='filled' severity='error'>This is an error alert — check it out!</Alert>
              <Alert variant='filled' severity='warning'>This is a warning alert — check it out!</Alert>
              <Alert variant='filled' severity='info'>This is an info alert — check it out!</Alert>
              <Alert variant='filled' severity='success'>This is a success alert — check it out!</Alert>
            </Stack>

            {showCode.filled && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringFilled}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* DESCRIPTION ALERT */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Description</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, description: !prev.description }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("description")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='row' gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Alert severity='error'><AlertTitle>Error</AlertTitle>This is an error alert — <strong>check it out!</strong></Alert>
              <Alert severity='warning'><AlertTitle>Warning</AlertTitle>This is a warning alert — <strong>check it out!</strong></Alert>
              <Alert severity='info'><AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong></Alert>
              <Alert severity='success'><AlertTitle>Success</AlertTitle>This is a success alert — <strong>check it out!</strong></Alert>
            </Stack>

            {showCode.description && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringDescription}
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

export default AlertPage;
