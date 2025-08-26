import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Grid, } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactDatepicker from '../../../components/common/Datepicker';
import CustomTextField from '../../../components/common/CustomTextField';

function DatepickerPage() {
  const [showCode, setShowCode] = useState({ basic: false, });
  const [copySuccess, setCopySuccess] = useState(false);

  const [date, setDate] = useState(new Date());

  const codeStringBasic = `// If you want to change the style of the datepicker, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const ChipsVariants = () => {
  return (
    
  )
}

export default ChipsVariants`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
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
      <Typography variant="h6" className="page-title" mb={2}>Date Picker</Typography>
      <Stack gap={3}>
        {/* BASIC CHIP */}
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

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    selected={date}
                    id='basic-input'
                    onChange={(date: Date | null) => setDate(date)}
                    placeholderText='Click to select a date'
                    customInput={<CustomTextField label='Basic' fullWidth />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    disabled
                    selected={date}
                    id='disabled-input'
                    onChange={(date: Date | null) => setDate(date)}
                    placeholderText='Click to select a date'
                    customInput={<CustomTextField label='Disabled' fullWidth />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    readOnly
                    selected={date}
                    id='read-only-input'
                    onChange={(date: Date | null) => setDate(date)}
                    placeholderText='Click to select a date'
                    customInput={<CustomTextField slotProps={{ input: { readOnly: true } }} label='Readonly' fullWidth />}
                  />
                </Grid>
              </Grid>
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
export default DatepickerPage;
