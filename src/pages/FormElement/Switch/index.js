import React, { useState } from 'react';
import { Box, FormControlLabel, FormGroup, IconButton, Paper, Snackbar, Stack, Switch, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function SwitchPage() {
  const [showCode, setShowCode] = useState({ basic: false, color: false, labelplacement: false, size: false, standalone: false, });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasic = `// If you want to change the style of the switch, you can do so in the theme.js file
// MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchBasic = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch defaultChecked />} label='Checked' />
      <FormControlLabel control={<Switch />} label='Unchecked' />
      <FormControlLabel disabled control={<Switch defaultChecked />} label='Disabled Checked' />
      <FormControlLabel disabled control={<Switch />} label='Disabled Unchecked' />
    </FormGroup>
  )
}

export default SwitchBasic`;

  const codeStringColor = `// If you want to change the style of the switch, you can do so in the theme.js file
// MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchColor = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch defaultChecked />} label='Primary' />
      <FormControlLabel control={<Switch defaultChecked color='secondary' />} label='Secondary' />
      <FormControlLabel control={<Switch defaultChecked color='success' />} label='Success' />
      <FormControlLabel control={<Switch defaultChecked color='error' />} label='Error' />
      <FormControlLabel control={<Switch defaultChecked color='warning' />} label='Warning' />
      <FormControlLabel control={<Switch defaultChecked color='info' />} label='Info' />
    </FormGroup>
  )
}

export default SwitchColor`;

  const codeStringPlacement = `// If you want to change the style of the switch, you can do so in the theme.js file
// MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchPlacement = () => {
  return (
    <div>
      <FormGroup row>
        <FormControlLabel value='top' label='Top' labelPlacement='top' control={<Switch />} />
        <FormControlLabel value='bottom' control={<Switch />} label='Bottom' labelPlacement='bottom' />
      </FormGroup>
      <FormGroup row>
        <FormControlLabel value='start' label='Start' labelPlacement='start' control={<Switch />} />
        <FormControlLabel value='end' control={<Switch />} label='End' />
      </FormGroup>
    </div>
  )
}

export default SwitchPlacement`;

  const codeStringSize = `// If you want to change the style of the switch, you can do so in the theme.js file
// MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchSize = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch size='small' />} label='Small' />
      <FormControlLabel control={<Switch />} label='Medium' />
    </FormGroup>
  )
}

export default SwitchSize`;

  const codeStringStandalone = `// If you want to change the style of the switch, you can do so in the theme.js file
// MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'

const SwitchStandalone = () => {
  return (
    <FormGroup row>
      <Switch defaultChecked />
      <Switch />
      <Switch disabled defaultChecked />
      <Switch disabled /
    </FormGroup>
  )
}

export default SwitchStandalone`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      color: codeStringColor,
      placement: codeStringPlacement,
      size: codeStringSize,
      standalone: codeStringStandalone,
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

        {/* BASIC Switch */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Basic Switches</Typography>
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
              <FormGroup row>
                <FormControlLabel control={<Switch defaultChecked />} label='Checked' />
                <FormControlLabel control={<Switch />} label='Unchecked' />
                <FormControlLabel disabled control={<Switch defaultChecked />} label='Disabled Checked' />
                <FormControlLabel disabled control={<Switch />} label='Disabled Unchecked' />
              </FormGroup>
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

        {/* Colors Switch */}
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
              <FormGroup row>
                <FormGroup row>
                  <FormControlLabel control={<Switch defaultChecked />} label='Primary' />
                  <FormControlLabel control={<Switch defaultChecked color='secondary' />} label='Secondary' />
                  <FormControlLabel control={<Switch defaultChecked color='success' />} label='Success' />
                  <FormControlLabel control={<Switch defaultChecked color='error' />} label='Error' />
                  <FormControlLabel control={<Switch defaultChecked color='warning' />} label='Warning' />
                  <FormControlLabel control={<Switch defaultChecked color='info' />} label='Info' />
                </FormGroup>
              </FormGroup>
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

        {/* Label Placement Switch */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Label Placement</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, placement: !prev.placement }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("placement")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full" flexDirection={'row'}>
              <FormGroup row sx={{ gap: 4 }}>
                <FormControlLabel value='top' label='Top' labelPlacement='top' control={<Switch />} />
                <FormControlLabel value='bottom' control={<Switch />} label='Bottom' labelPlacement='bottom' />
              </FormGroup>
              <FormGroup row sx={{ gap: 4 }}>
                <FormControlLabel value='start' label='Start' labelPlacement='start' control={<Switch />} />
                <FormControlLabel value='end' control={<Switch />} label='End' />
              </FormGroup>
            </Stack>

            {showCode.placement && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringPlacement}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Size Switch */}
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
              <FormGroup row>
                <FormControlLabel control={<Switch size='small' />} label='Small' />
                <FormControlLabel control={<Switch />} label='Medium' />
              </FormGroup>
            </Stack>

            {showCode.size && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringBasic}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Standalone Switch */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Standalone Switch</Typography>
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
              <FormGroup row>
                <Switch defaultChecked />
                <Switch />
                <Switch disabled defaultChecked />
                <Switch disabled />
              </FormGroup>
            </Stack>

            {showCode.size && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringBasic}
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

export default SwitchPage;
