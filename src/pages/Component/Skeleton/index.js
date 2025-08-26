import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Pagination, Skeleton, Grid } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function SkeletonPage() {
  const [showCode, setShowCode] = useState({
    skeletonVariants: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringSkeletonVariants = `
// If you want to change the style of the Skeleton, you can do so in the theme.js file
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
}
`;


  const handleCopy = async (codeKey) => {
    const codeMap = {
      skeletonVariants: codeStringSkeletonVariants,

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
        Skeleton
      </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Variants */}
            <Paper elevation={0}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h6" className="page-title">Variants</Typography>
                <Stack direction="row" spacing={1}>
                  <Tooltip title="Show Code">
                    <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, skeletonVariants: !prev.skeletonVariants }))}>
                      <RiCodeSSlashFill />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Copy Code">
                    <IconButton className='icon-button' onClick={() => handleCopy("skeletonVariants")}>
                      <TbCopy />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
              <Stack gap={3}>
                <Stack gap={1}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton variant="rounded" width={210} height={60} />
                </Stack>          

                {showCode.skeletonVariants && (
                  <Box className="code-block" sx={{ position: 'relative' }}>
                    <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                      {codeStringSkeletonVariants}
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

export default SkeletonPage;
