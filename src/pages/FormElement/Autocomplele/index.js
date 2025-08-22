import React, { useState } from 'react';
import { Autocomplete, Box, Grid, IconButton, Paper, Snackbar, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import top100Films from '../../fakeData/top100Films';

function AutocompletePage() {
  const [showCode, setShowCode] = useState({ variant: false, multiplevariant: false, });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringVariant = `// If you want to change the style of the autocompleted, you can do so in the theme.js file
// MUI Imports

const CheckboxVariant = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="standard"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="outlined" label="Movie" />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="filled"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="filled" label="Movie" />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="filled"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="standard" label="Movie" />}
        />
      </Grid>
    </Grid>
  )
}

export default CheckboxVariant`;

  const codeStringMulitpleVariant = `// If you want to change the style of the autocompleted, you can do so in the theme.js file
// MUI Imports

const CheckboxMultipleVariant = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="standard"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="outlined" label="Movie" />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="filled"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="filled" label="Movie" />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="filled"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="standard" label="Movie" />}
        />
      </Grid>
    </Grid>
  )
}

export default CheckboxMultipleVariant`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      variant: codeStringVariant,
      multiplevariant: codeStringMulitpleVariant,
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
      <Typography variant="h6" className="page-title" mb={2}>Autocomplete</Typography>
      <Stack gap={3}>

        {/* BASIC Autocomplete */}
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
                  <Autocomplete
                    disablePortal
                    variant="standard"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} variant="outlined" label="Movie" />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    disablePortal
                    variant="filled"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} variant="filled" label="Movie" />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    disablePortal
                    variant="filled"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} variant="standard" label="Movie" />}
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

        {/* Multiple Autocomplete */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Multiple Values</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, multiplevariant: !prev.multiplevariant }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("multiplevariant")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    disablePortal
                    multiple
                    variant="standard"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} variant="outlined" label="Movie" />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    disablePortal
                    multiple
                    variant="filled"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} variant="filled" label="Movie" />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    disablePortal
                    multiple
                    variant="filled"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} variant="standard" label="Movie" />}
                  />
                </Grid>
              </Grid>
            </Stack>

            {showCode.multiplevariant && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringMulitpleVariant}
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

export default AutocompletePage;
