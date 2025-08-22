import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Pagination } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function PaginationPage() {
  const [showCode, setShowCode] = useState({
    paginationBasic: false,
    paginationControlled: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringPaginationBasic = `
// If you want to change the style of the Pagination, you can do so in the theme.js file
// MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationBasic = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination count={10} />
      <Pagination count={10} variant='outlined' />
      <Pagination count={10} shape='rounded' />
    </div>
  )
}

export default PaginationBasic`;

  const codeStringPaginationControlled = `
// If you want to change the style of the Pagination, you can do so in the theme.js file
// React Imports
import { useState } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'

const PaginationControlled = () => {
  // State
  const [page, setPage] = useState(1)

  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <>
      <Typography className='mbe-2' color='text.primary'>
        Page: {page}
      </Typography>
      <Pagination count={10} page={page} onChange={handleChange} variant='tonal' color='primary' />
    </>
  )
}

export default PaginationControlled`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      paginationBasic: codeStringPaginationBasic,
      paginationControlled: codeStringPaginationControlled,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const [page, setPage] = useState(1)
  const handleChange = (event, value) => {setPage(value)}
  
  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Pagination
      </Typography>

        <Stack gap={3}>
          
          {/* BASIC PAGINATION */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Pagination UI (Basic, Outlined, Rounded)</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, paginationBasic: !prev.paginationBasic }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("paginationBasic")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack gap={2}>
                <Pagination count={10} />
                <Pagination count={10} variant='outlined' />
                <Pagination count={10} shape='rounded' />
              </Stack>             

              {showCode.paginationBasic && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringPaginationBasic}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>

          {/* CONTROLLED PAGINATION */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Controlled Pagination</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, paginationControlled: !prev.paginationControlled }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("paginationControlled")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack gap={2}>
                <Typography className='page-title' >
                  Page: {page}
                </Typography>
                <Pagination count={10} page={page} onChange={handleChange} />
              </Stack>             

              {showCode.paginationControlled && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringPaginationControlled}
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

export default PaginationPage;
