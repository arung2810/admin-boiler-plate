import React, { useState } from 'react';
import { Box, IconButton, Paper, Slider, Snackbar, Stack, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function SliderPage() {
  const [showCode, setShowCode] = useState({
    basic: false,
    color: false,
    labelplacement: false,
    size: false,
    standalone: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasic = `// If you want to change the style of the slider, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const SliderBasic = () => {
  return (
    <Box>
      <Typography>Basic Slider</Typography>
      <Slider defaultValue={30} aria-labelledby='continuous-slider' />
      <Typography>Disabled Slider</Typography>
      <Slider disabled defaultValue={30} aria-labelledby='disabled-slider' />
    </Box>
  )
}

export default SliderBasic`;

  const codeStringColor = `// If you want to change the style of the slider, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const SliderColor = () => {
  return (
    <Box>
      <Typography variant="body1" className='page-title'>Secondary Slider</Typography>
      <Slider defaultValue={30} color='secondary' aria-labelledby='secondary-slider' />
      <Typography variant="body1" className='page-title'>Error Slider</Typography>
      <Slider defaultValue={30} color='error' aria-labelledby='error-slider' />
      <Typography variant="body1" className='page-title'>Warning Slider</Typography>
      <Slider defaultValue={30} color='warning' aria-labelledby='warning-slider' />
      <Typography variant="body1" className='page-title'>Info Slider</Typography>
      <Slider defaultValue={30} color='info' aria-labelledby='info-slider' />
      <Typography variant="body1" className='page-title'>Success Slider</Typography>
      <Slider defaultValue={30} color='success' aria-labelledby='success-slider' />
    </Box>
  )
}

export default SliderColor`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      color: codeStringColor,
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
      <Typography variant="h6" className="page-title" mb={2}>Switch</Typography>
      <Stack gap={3}>

        {/* Basic Slider */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Basic Slidere</Typography>
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

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Typography>Basic Slider</Typography>
              <Slider defaultValue={30} aria-labelledby='continuous-slider' />
              <Typography>Disabled Slider</Typography>
              <Slider disabled defaultValue={30} aria-labelledby='disabled-slider' />
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

        {/* Colors */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Colors</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, color: !prev.color }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("color")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Typography variant="body1" className='page-title'>Secondary Slider</Typography>
              <Slider defaultValue={30} color='secondary' aria-labelledby='secondary-slider' />
              <Typography variant="body1" className='page-title'>Error Slider</Typography>
              <Slider defaultValue={30} color='error' aria-labelledby='error-slider' />
              <Typography variant="body1" className='page-title'>Warning Slider</Typography>
              <Slider defaultValue={30} color='warning' aria-labelledby='warning-slider' />
              <Typography variant="body1" className='page-title'>Info Slider</Typography>
              <Slider defaultValue={30} color='info' aria-labelledby='info-slider' />
              <Typography variant="body1" className='page-title'>Success Slider</Typography>
              <Slider defaultValue={30} color='success' aria-labelledby='success-slider' />
            </Stack>

            {showCode.color && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringColor}
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

export default SliderPage;
