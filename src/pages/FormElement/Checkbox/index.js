import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, IconButton, Paper, Snackbar, Stack, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, RiHeartFill, RiHeartLine, RiStarSLine, RiStarSFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CheckboxPage() {
  const [showCode, setShowCode] = useState({ basic: false, color: false, customicon: false, size: false, labelplacement: false });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasic = `// If you want to change the style of the checkbox, you can do so in the theme.js file
// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckboxBasic = () => {
  return (
    <FormGroup row>
      <FormControlLabel label='Checked' control={<Checkbox defaultChecked name='basic-checked' />} />
      <FormControlLabel label='Unchecked' control={<Checkbox name='basic-unchecked' />} />
      <FormControlLabel
        disabled
        label='Disabled Checked'
        control={<Checkbox defaultChecked name='basic-disabled-checked' />}
      />
      <FormControlLabel disabled label='Disabled Unchecked' control={<Checkbox name='basic-disabled-unchecked' />} />
      <FormControlLabel label='Indeterminate' control={<Checkbox indeterminate name='basic-indeterminate' />} />
    </FormGroup>
  )
}

export default CheckboxBasic`;

  const codeStringColor = `// If you want to change the style of the checkbox, you can do so in the theme.js file
// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckboxColors = () => {
  return (
    <FormGroup row>
      <FormControlLabel label='Primary' control={<Checkbox defaultChecked name='color-primary' />} />
      <FormControlLabel label='Secondary' control={<Checkbox defaultChecked name='color-secondary' color='secondary' />} />
      <FormControlLabel label='Success' control={<Checkbox defaultChecked name='color-success' color='success' />} />
      <FormControlLabel label='Error' control={<Checkbox defaultChecked name='color-error' color='error' />} />
      <FormControlLabel label='Warning' control={<Checkbox defaultChecked name='color-warning' color='warning' />} />
      <FormControlLabel label='Info' control={<Checkbox defaultChecked name='color-info' color='info' />} />
    </FormGroup>
  )
}

export default CheckboxColors`;

  const codeStringCustomIcon = `// If you want to change the style of the checkbox, you can do so in the theme.js file
// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckboxCustomIcons = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        label='Heart'
        control={
          <Checkbox
            defaultChecked
            name='size-small'
            checkedIcon={<RiHeartFill />}
            icon={<RiHeartLine />}
          />
        }
      />
      <FormControlLabel
        label='Star'
        control={
          <Checkbox
            defaultChecked
            name='size-small'
            checkedIcon={<RiStarSFill />}
            icon={<RiStarSLine />}
          />
        }
      />
    </FormGroup>
  )
}

export default CheckboxCustomIcons`;

  const codeStringSize = `// If you want to change the style of the checkbox, you can do so in the theme.js file
// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckboxSizes = () => {
  return (
    <FormGroup row>
      <FormControlLabel label='Small' control={<Checkbox size='small' defaultChecked name='size-small' />} />
      <FormControlLabel label='Medium' control={<Checkbox defaultChecked name='size-medium' />} />
    </FormGroup>
  )
}

export default CheckboxSizes`;

  const codeStringLabelPlacement = `// If you want to change the style of the checkbox, you can do so in the theme.js file
// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckboxLabelPlacement = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        value='top'
        label='Top'
        labelPlacement='top'
        control={<Checkbox />}
      />
      <FormControlLabel value='bottom' label='Bottom' labelPlacement='bottom' control={<Checkbox />} />
    </FormGroup>
    <FormGroup row>
      <FormControlLabel value='start' label='Start' control={<Checkbox />} labelPlacement='start' />
      <FormControlLabel value='end' control={<Checkbox />} label='End' />
    </FormGroup>
  )
}

export default CheckboxLabelPlacement`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      color: codeStringColor,
      customicon: codeStringCustomIcon,
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
      <Typography variant="h6" className="page-title" mb={2}>Checkbox</Typography>
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
              <FormGroup row>
                <FormControlLabel label='Checked' control={<Checkbox defaultChecked name='basic-checked' />} />
                <FormControlLabel label='Unchecked' control={<Checkbox name='basic-unchecked' />} />
                <FormControlLabel
                  disabled
                  label='Disabled Checked'
                  control={<Checkbox defaultChecked name='basic-disabled-checked' />}
                />
                <FormControlLabel disabled label='Disabled Unchecked' control={<Checkbox name='basic-disabled-unchecked' />} />
                <FormControlLabel label='Indeterminate' control={<Checkbox indeterminate name='basic-indeterminate' />} />
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
              <FormGroup row>
                <FormControlLabel label='Primary' control={<Checkbox defaultChecked name='color-primary' />} />
                <FormControlLabel label='Secondary' control={<Checkbox defaultChecked name='color-secondary' color='secondary' />} />
                <FormControlLabel label='Success' control={<Checkbox defaultChecked name='color-success' color='success' />} />
                <FormControlLabel label='Error' control={<Checkbox defaultChecked name='color-error' color='error' />} />
                <FormControlLabel label='Warning' control={<Checkbox defaultChecked name='color-warning' color='warning' />} />
                <FormControlLabel label='Info' control={<Checkbox defaultChecked name='color-info' color='info' />} />
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

        {/* Custom Icon Checkbox */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Custom Icon</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, customicon: !prev.customicon }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("customicon")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <FormGroup row>
                <FormControlLabel
                  label='Heart'
                  control={
                    <Checkbox
                      defaultChecked
                      name='size-small'
                      checkedIcon={<RiHeartFill />}
                      icon={<RiHeartLine />}
                    />
                  }
                />
                <FormControlLabel
                  label='Star'
                  control={
                    <Checkbox
                      defaultChecked
                      name='size-small'
                      checkedIcon={<RiStarSFill />}
                      icon={<RiStarSLine />}
                    />
                  }
                />
              </FormGroup>
            </Stack>

            {showCode.customicon && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringCustomIcon}
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
              <FormGroup row>
                <FormControlLabel label='Small' control={<Checkbox size='small' defaultChecked name='size-small' />} />
                <FormControlLabel label='Medium' control={<Checkbox defaultChecked name='size-medium' />} />
              </FormGroup>
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
              <FormGroup row sx={{ gap: 2 }}>
                <FormControlLabel value='top' label='Top' labelPlacement='top' control={<Checkbox />} />
                <FormControlLabel value='bottom' label='Bottom' labelPlacement='bottom' control={<Checkbox />} />
                <FormControlLabel value='start' label='Start' control={<Checkbox />} labelPlacement='start' />
                <FormControlLabel value='end' control={<Checkbox />} label='End' />
              </FormGroup>
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

export default CheckboxPage;
