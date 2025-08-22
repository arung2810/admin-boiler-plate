import React, { useState } from 'react';
import { Box, FormControl, FormControlLabel, IconButton, Paper, Radio, RadioGroup, Snackbar, Stack, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function RadioPage() {
  const [showCode, setShowCode] = useState({ basic: false, color: false, size: false, labelplacement: false });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasic = `// If you want to change the style of the radio, you can do so in the theme.js file
// MUI Imports
import Radio from '@mui/material/Radio'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioBasic = () => {
  return (
    <FormControl>
      <RadioGroup row defaultValue='checked' name='basic-radio' aria-label='basic-radio'>
        <FormControlLabel value='checked' control={<Radio />} label='Checked' />
        <FormControlLabel value='unchecked' control={<Radio />} label='Unchecked' />
      </RadioGroup>

      <RadioGroup row value='disabled-checked' name='basic-disabled-radio' aria-label='basic-disabled-radio'>
        <FormControlLabel disabled value='disabled-checked' label='Disabled Checked' control={<Radio />} />
        <FormControlLabel disabled value='disabled-unchecked' label='Disabled Unchecked' control={<Radio />} />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioBasic`;

  const codeStringColor = `// If you want to change the style of the radio, you can do so in the theme.js file
// MUI Imports
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioColor = () => {
  return (
    <FormControlLabel value='primary' control={<Radio defaultChecked />} label='Primary' />
    <FormControlLabel value='secondary' control={<Radio defaultChecked color='secondary' />} label='Secondary' />
    <FormControlLabel value='success' label='Success' control={<Radio defaultChecked color='success' />} />
    <FormControlLabel value='error' label='Error' control={<Radio defaultChecked color='error' />} />
    <FormControlLabel value='warning' label='Warning' control={<Radio defaultChecked color='warning' />} />
    <FormControlLabel value='info' label='Info' control={<Radio defaultChecked color='info' />} />
  )
}

export default RadioColor`;

  const codeStringSize = `// If you want to change the style of the radio, you can do so in the theme.js file
// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioSizes = () => {
  return (
    <RadioGroup row aria-label='sizes' name='sizes' defaultValue='small'>
      <FormControlLabel value='small' control={<Radio size='small' />} label='Small' />
      <FormControlLabel value='medium' control={<Radio />} label='Medium' />
    </RadioGroup>
  )
}

export default RadioSizes`;

  const codeStringLabelPlacement = `// If you want to change the style of the radio, you can do so in the theme.js file
// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioPlacement = () => {
  return (
    <FormControl>
      <RadioGroup row aria-label='position' name='vertical' defaultValue='top'>
        <FormControlLabel value='top' label='Top' labelPlacement='top' control={<Radio />} />
        <FormControlLabel value='bottom' control={<Radio />} label='Bottom' labelPlacement='bottom' />
      </RadioGroup>
      <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
        <FormControlLabel value='start' label='Start' labelPlacement='start' control={<Radio />} />
        <FormControlLabel value='end' control={<Radio />} label='End' />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioPlacement`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      color: codeStringColor,
      size: codeStringSize,
      labelplacement: codeStringLabelPlacement,
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
      <Typography variant="h6" className="page-title" mb={2}>Radio</Typography>
      <Stack gap={3}>

        {/* BASIC Checkbox */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Basic Checkboxes</Typography>
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
              <FormControl sx={{ flexDirection: 'row' }}>
                <RadioGroup row defaultValue='checked' name='basic-radio' aria-label='basic-radio'>
                  <FormControlLabel value='checked' control={<Radio />} label='Checked' />
                  <FormControlLabel value='unchecked' control={<Radio />} label='Unchecked' />
                </RadioGroup>

                <RadioGroup row value='disabled-checked' name='basic-disabled-radio' aria-label='basic-disabled-radio'>
                  <FormControlLabel disabled value='disabled-checked' label='Disabled Checked' control={<Radio />} />
                  <FormControlLabel disabled value='disabled-unchecked' label='Disabled Unchecked' control={<Radio />} />
                </RadioGroup>
              </FormControl>
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

        {/* Colors Checkbox */}
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
              <FormControl sx={{ flexDirection: 'row', flexWrap: "wrap" }}>
                <FormControlLabel value='primary' control={<Radio defaultChecked />} label='Primary' />
                <FormControlLabel value='secondary' control={<Radio defaultChecked color='secondary' />} label='Secondary' />
                <FormControlLabel value='success' label='Success' control={<Radio defaultChecked color='success' />} />
                <FormControlLabel value='error' label='Error' control={<Radio defaultChecked color='error' />} />
                <FormControlLabel value='warning' label='Warning' control={<Radio defaultChecked color='warning' />} />
                <FormControlLabel value='info' label='Info' control={<Radio defaultChecked color='info' />} />
              </FormControl>
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

        {/* Custom Icon Checkbox */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Sizes</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, size: !prev.size }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("size")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <RadioGroup row aria-label='sizes' name='sizes' defaultValue='small'>
                <FormControlLabel value='small' control={<Radio size='small' />} label='Small' />
                <FormControlLabel value='medium' control={<Radio />} label='Medium' />
              </RadioGroup>
            </Stack>

            {showCode.size && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringSize}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Label Placement Checkbox */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Label Placement</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, labelplacement: !prev.labelplacement }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("labelplacement")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <FormControl sx={{ flexDirection: 'row' }}>
                <RadioGroup row sx={{ gap: 2 }} aria-label='position' name='vertical' defaultValue='top'>
                  <FormControlLabel value='top' label='Top' labelPlacement='top' control={<Radio />} />
                  <FormControlLabel value='bottom' control={<Radio />} label='Bottom' labelPlacement='bottom' />
                </RadioGroup>
                <RadioGroup row sx={{ gap: 2 }} aria-label='position' name='horizontal' defaultValue='start'>
                  <FormControlLabel value='start' label='Start' labelPlacement='start' control={<Radio />} />
                  <FormControlLabel value='end' control={<Radio />} label='End' />
                </RadioGroup>
              </FormControl>
            </Stack>

            {showCode.labelplacement && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringLabelPlacement}
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

export default RadioPage;
