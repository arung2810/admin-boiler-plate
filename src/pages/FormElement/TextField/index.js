import React, { useState } from 'react';
import { Box, Grid, IconButton, InputAdornment, Paper, Snackbar, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, RiUser4Line } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CustomTextField from '../../../components/common/CustomTextField';

function TextFieldPage() {
  const [showCode, setShowCode] = useState({ custom: false, variant: false, formprops: false, icons: false, });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringCustom = `// If you want to change the style of the input, you can do so in the theme.js file
// MUI Imports
import CustomTextField from '../../../components/common/CustomTextField'

const TextFieldCustom = () => {
  return <CustomTextField label='Default' placeholder='Placeholder' />
}

export default TextFieldCustom`;

  const codeStringVariant = `// If you want to change the style of the input, you can do so in the theme.js file
// MUI Imports
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

const TextFieldVariant = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField id="filled-basic" label="Filled" variant="filled" fullWidth />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField id="standard-basic" label="Standard" variant="standard" fullWidth />
      </Grid>
    </Grid>
  )
}

export default TextFieldVariant`;

  const codeStringFromProps = `// If you want to change the style of the input, you can do so in the theme.js file
// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CustomTextField from '../../../components/common/CustomTextField'

const TextFieldFormProps = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 2 }}>
        <CustomTextField required id='form-props-required' label='Required' defaultValue='Hello World' />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <CustomTextField
          disabled
          id='form-props-disabled'
          label='Disabled'
          defaultValue='Hello World'
          helperText='helper text'
        />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <CustomTextField
          type='password'
          label='Password'
          id='form-props-password-input'
          autoComplete='current-password'
        />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <CustomTextField
          label='Read Only'
          defaultValue='Hello World'
          id='form-props-read-only-input'
          slotProps={{
            htmlInput: { readOnly: true }
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <CustomTextField type='number' label='Number' id='form-props-number' />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <CustomTextField label='Label' placeholder='Placeholder' id='form-props-full-width' />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <CustomTextField id='form-props-search' label='Search field' type='search' />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <CustomTextField
          label='Helper text'
          id='form-props-helperText'
          defaultValue='Default Value'
          helperText='Some important text'
        />
      </Grid>
    </Grid>
  )
}

export default TextFieldFormProps`;

  const codeStringIcons = `// If you want to change the style of the input, you can do so in the theme.js file
// MUI Imports
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'

// Component Imports
import CustomTextField from '../../../components/common/CustomTextField'

const TextFieldIcons = () => {
  return (
    <Grid container spacing={3}>
      <Grid>
        <CustomTextField
          id='input-with-icon-adornment'
          label='With adornment'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <RiUser4Line />
                </InputAdornment>
              )
            }
          }}
        />
      </Grid>
      <Grid>
        <Grid container spacing={2}>
          <Grid alignSelf={'flex-end'}>
            <Box marginBottom={1.5}>
              <RiUser4Line />
            </Box>
          </Grid>
          <Grid>
            <CustomTextField fullWidth id='input-with-icon-grid' label='With a grid' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default TextFieldIcons`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      custom: codeStringCustom,
      variant: codeStringVariant,
      formprops: codeStringFromProps,
      icons: codeStringIcons,
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
      <Typography variant="h6" className="page-title" mb={2}>Text Field</Typography>
      <Stack gap={3}>

        {/* Custom */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Custom</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, custom: !prev.custom }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("custom")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField label='Default' placeholder='Placeholder' fullWidth />
                </Grid>
              </Grid>
            </Stack>

            {showCode.custom && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringCustom}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Variants */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Variants</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, variant: !prev.variant }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("variant")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField id="filled-basic" label="Filled" variant="filled" fullWidth />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField id="standard-basic" label="Standard" variant="standard" fullWidth />
                </Grid>
              </Grid>
            </Stack>

            {showCode.variant && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringVariant}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Form Props */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Form Props</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, formprops: !prev.formprops }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("formprops")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 2 }}>
                  <CustomTextField required id='form-props-required' label='Required' defaultValue='Hello World' />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                  <CustomTextField
                    disabled
                    id='form-props-disabled'
                    label='Disabled'
                    defaultValue='Hello World'
                    helperText='helper text'
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                  <CustomTextField
                    type='password'
                    label='Password'
                    id='form-props-password-input'
                    autoComplete='current-password'
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                  <CustomTextField
                    label='Read Only'
                    defaultValue='Hello World'
                    id='form-props-read-only-input'
                    slotProps={{
                      htmlInput: { readOnly: true }
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                  <CustomTextField type='number' label='Number' id='form-props-number' />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                  <CustomTextField label='Label' placeholder='Placeholder' id='form-props-full-width' />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                  <CustomTextField id='form-props-search' label='Search field' type='search' />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                  <CustomTextField
                    label='Helper text'
                    id='form-props-helperText'
                    defaultValue='Default Value'
                    helperText='Some important text'
                  />
                </Grid>
              </Grid>
            </Stack>

            {showCode.formprops && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringFromProps}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Icons */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Icons</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, icons: !prev.icons }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("icons")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid>
                  <CustomTextField
                    id='input-with-icon-adornment'
                    label='With adornment'
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position='start'>
                            <RiUser4Line />
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                </Grid>
                <Grid>
                  <Grid container spacing={2}>
                    <Grid alignSelf={'flex-end'}>
                      <Box marginBottom={1.5}>
                        <RiUser4Line />
                      </Box>
                    </Grid>
                    <Grid>
                      <CustomTextField fullWidth id='input-with-icon-grid' label='With a grid' />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Stack>

            {showCode.icons && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringIcons}
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
  )
}

export default TextFieldPage;
