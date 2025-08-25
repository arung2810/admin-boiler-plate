import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Grid, List, ListItem, ListItemText, Divider, Chip, Link } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function LinkPage() {
  const [showCode, setShowCode] = useState({
    basicLink: false,
    underlineLink: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasicLink = `
import * as React from 'react';
import Link from '@mui/material/Link';

export default function DividerVariants() {
  return (
    <>
      <Link href="#">Link</Link>
      <Link href="#" color="inherit">inherit</Link>
      <Link href="#" variant="body2">body2</Link>
    </>
  );
}`;

  const codeStringUnderlineLink = `
import * as React from 'react';
import Link from '@mui/material/Link';

export default function DividerVariants() {
  return (
    <>
      <Link href="#" underline="none">
        underline="none"
      </Link>
      <Link href="#" underline="hover">
        underline="hover"
      </Link>
      <Link href="#" underline="always">
        underline="always"
      </Link>
    </>
  );
}`;


  const handleCopy = async (codeKey) => {
    const codeMap = {
      basicLink: codeStringBasicLink,
      underlineLink: codeStringUnderlineLink,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };
 


  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Link
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          {/* BASIC LINKS */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Basic Links</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, basicLink: !prev.basicLink }))}>
                    <RiCodeSSlashFill />
                  </IconButton> 
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("basicLink")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack direction='row' gap={3} flexWrap='wrap'>
                <Link href="#">Link</Link>
                <Link href="#" color="inherit">inherit</Link>
                <Link href="#" variant="body2">body2</Link>
              </Stack>

              {showCode.basicLink && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringBasicLink}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>              
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          {/* UNDERLINE */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Underline</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, underlineLink: !prev.underlineLink }))}>
                    <RiCodeSSlashFill />
                  </IconButton> 
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("underlineLink")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack direction='row' gap={3} flexWrap='wrap'>
                  <Link href="#" underline="none">
                    underline="none"
                  </Link>
                  <Link href="#" underline="hover">
                    underline="hover"
                  </Link>
                  <Link href="#" underline="always">
                    underline="always"
                  </Link>
              </Stack>

              {showCode.underlineLink && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringUnderlineLink}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>              
        </Grid>
        
      </Grid>

      

      {/* Copy feedback */}
      <Snackbar
        open={copySuccess}
        message="Code copied!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default LinkPage;
