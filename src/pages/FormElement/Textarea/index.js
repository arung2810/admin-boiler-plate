import React, { useState } from 'react';
import { Box, Grid, IconButton, Paper, Snackbar, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CustomTextField from '../../../components/common/CustomTextField';

function TextAreaPage() {
  const [showCode, setShowCode] = useState({ custom: false, variant: false, });
  const [copySuccess, setCopySuccess] = useState(false);

  // State
  const [value, setValue] = useState('Controlled')

  const handleChange = event => {
    setValue(event.target.value)
  }

  const codeStringCustom = `// If you want to change the style of the input, you can do so in the theme.js file
// React Imports
import { useState } from 'react'

// MUI Imports
import CustomTextField from '../../../components/common/CustomTextField'

const TextareaCustomVarient = () => {
  // State
  const [value, setValue] = useState('Controlled')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          multiline
          maxRows={4}
          value={value}
          label='Multiline'
          onChange={handleChange}
          id='textarea-outlined-controlled'
          fullWidth
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          multiline
          id='textarea-outlined'
          placeholder='Placeholder'
          label='Multiline Placeholder'
          fullWidth
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          rows={4}
          multiline
          label='Multiline'
          defaultValue='Default Value'
          id='textarea-outlined-static'
          fullWidth
        />
      </Grid>
    </Grid>
  )
}

export default TextareaCustomVarient`;

  const codeStringVariant = `// If you want to change the style of the input, you can do so in the theme.js file
// MUI Imports
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

const TextareaVariant = () => {
  // State
  const [value, setValue] = useState('Controlled')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={value}
          label='Multiline'
          onChange={handleChange}
          id='textarea-outlined-controlled'
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField fullWidth multiline id='textarea-outlined' placeholder='Placeholder' label='Multiline Placeholder' />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          rows={4}
          multiline
          label='Multiline'
          defaultValue='Default Value'
          id='textarea-outlined-static'
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={value}
          variant='filled'
          label='Multiline'
          onChange={handleChange}
          id='textarea-filled-controlled'
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          multiline
          variant='filled'
          id='textarea-filled'
          placeholder='Placeholder'
          label='Multiline Placeholder'
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          rows={4}
          multiline
          variant='filled'
          label='Multiline'
          id='textarea-filled-static'
          defaultValue='Default Value'
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={value}
          label='Multiline'
          variant='standard'
          onChange={handleChange}
          id='textarea-standard-controlled'
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          multiline
          variant='standard'
          id='textarea-standard'
          placeholder='Placeholder'
          label='Multiline Placeholder'
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          rows={4}
          multiline
          label='Multiline'
          variant='standard'
          defaultValue='Default Value'
          id='textarea-standard-static'
        />
      </Grid>
    </Grid>
  )
}

export default TextareaVariant`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      custom: codeStringCustom,
      variant: codeStringVariant,
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
      <Typography variant="h6" className="page-title" mb={2}>Textarea</Typography>
      <Stack gap={3}>

        {/* Custom Variants */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Custom Variants</Typography>
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

          <Stack direction='column' gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    multiline
                    maxRows={4}
                    value={value}
                    label='Multiline'
                    onChange={handleChange}
                    id='textarea-outlined-controlled'
                    fullWidth
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    multiline
                    id='textarea-outlined'
                    placeholder='Placeholder'
                    label='Multiline Placeholder'
                    size="medium"
                    fullWidth
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    rows={4}
                    multiline
                    label='Multiline'
                    defaultValue='Default Value'
                    id='textarea-outlined-static'
                    fullWidth
                  />
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

        {/* Varients */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Varients</Typography>
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

          <Stack direction='column' gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    multiline
                    maxRows={4}
                    value={value}
                    label='Multiline'
                    onChange={handleChange}
                    id='textarea-outlined-controlled'
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField fullWidth multiline id='textarea-outlined' placeholder='Placeholder' label='Multiline Placeholder' />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    rows={4}
                    multiline
                    label='Multiline'
                    defaultValue='Default Value'
                    id='textarea-outlined-static'
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    multiline
                    maxRows={4}
                    value={value}
                    variant='filled'
                    label='Multiline'
                    onChange={handleChange}
                    id='textarea-filled-controlled'
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    multiline
                    variant='filled'
                    id='textarea-filled'
                    placeholder='Placeholder'
                    label='Multiline Placeholder'
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    rows={4}
                    multiline
                    variant='filled'
                    label='Multiline'
                    id='textarea-filled-static'
                    defaultValue='Default Value'
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    multiline
                    maxRows={4}
                    value={value}
                    label='Multiline'
                    variant='standard'
                    onChange={handleChange}
                    id='textarea-standard-controlled'
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    multiline
                    variant='standard'
                    id='textarea-standard'
                    placeholder='Placeholder'
                    label='Multiline Placeholder'
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    rows={4}
                    multiline
                    label='Multiline'
                    variant='standard'
                    defaultValue='Default Value'
                    id='textarea-standard-static'
                  />
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

export default TextAreaPage;