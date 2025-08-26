import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Breadcrumbs, Link, Grid, } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { GoChevronRight } from "react-icons/go";


function BreadcrumbPage() {
  const [showCode, setShowCode] = useState({
    basicBreadcrumbs: false,
    customBreadcrumbs: false,
    collapsedBreadcrumbs: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasicBreadcrumbs = `// If you want to change the style of the Breadcrumbs, you can do so in the theme.js file
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BasicBreadcrumbs() {
  return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
      </Breadcrumbs>
  );
}`;

  const codeStringCustomBreadcrumbs = `// If you want to change the style of the Breadcrumbs, you can do so in the theme.js file
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { GoChevronRight } from "react-icons/go";

export default function CustomBreadcrumbs() {
  return (
      <>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/dashboard"
          >
            Core
          </Link>
          <Typography>Breadcrumbs</Typography>
        </Breadcrumbs>
        <Breadcrumbs eparator="-" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/dashboard"
          >
            Core
          </Link>
          <Typography>Breadcrumbs</Typography>
        </Breadcrumbs>
        <Breadcrumbs eparator={<GoChevronRight fontSize="small" />} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/dashboard"
          >
            Core
          </Link>
          <Typography>Breadcrumbs</Typography>
        </Breadcrumbs>
      </>
  );
}`;

  const codeStringCollapsedBreadcrumbs = `// If you want to change the style of the Breadcrumbs, you can do so in the theme.js file
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { GoChevronRight } from "react-icons/go";

export default function CollapsedBreadcrumbs() {
  return (
      <>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Catalog
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Accessories
          </Link>
          <Link underline="hover" color="inherit" href="#">
            New Collection
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Belts</Typography>
        </Breadcrumbs>
      </>
  );
}`;


  const handleCopy = async (codeKey) => {
    const codeMap = {
      basicBreadcrumbs: codeStringBasicBreadcrumbs,
      customBreadcrumbs: codeStringCustomBreadcrumbs,
      collapsedBreadcrumbs: codeStringCollapsedBreadcrumbs,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); // auto show code block
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Breadcrumbs
      </Typography>

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 6 }}>
          {/* Basic Breadcrumbs */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Basic Breadcrumbs</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, basicBreadcrumbs: !prev.basicBreadcrumbs }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("basicBreadcrumbs")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>

            <Stack gap={4}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  MUI
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/dashboard"
                >
                  Core
                </Link>
                <Typography>Breadcrumbs</Typography>
              </Breadcrumbs>

              {showCode.basicBreadcrumbs && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringBasicBreadcrumbs}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          {/* Custom Breadcrumbs */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Custom Breadcrumbs</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, customBreadcrumbs: !prev.customBreadcrumbs }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("customBreadcrumbs")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>

            <Stack gap={4}>

              <Stack gap={1}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    MUI
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    href="/dashboard"
                  >
                    Core
                  </Link>
                  <Typography>Breadcrumbs</Typography>
                </Breadcrumbs>
                <Breadcrumbs separator="-" aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    MUI
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    href="/dashboard"
                  >
                    Core
                  </Link>
                  <Typography>Breadcrumbs</Typography>
                </Breadcrumbs>
                <Breadcrumbs separator={<GoChevronRight fontSize="small" />} aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    MUI
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    href="/dashboard"
                  >
                    Core
                  </Link>
                  <Typography>Breadcrumbs</Typography>
                </Breadcrumbs>
              </Stack>

              {showCode.customBreadcrumbs && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringCustomBreadcrumbs}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          {/* Custom Breadcrumbs */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Custom Breadcrumbs</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, collapsedBreadcrumbs: !prev.collapsedBreadcrumbs }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("collapsedBreadcrumbs")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>

            <Stack gap={4}>

             <Breadcrumbs maxItems={2} aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="#">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="#">
                Catalog
              </Link>
              <Link underline="hover" color="inherit" href="#">
                Accessories
              </Link>
              <Link underline="hover" color="inherit" href="#">
                New Collection
              </Link>
              <Typography>Belts</Typography>
            </Breadcrumbs>

              {showCode.collapsedBreadcrumbs && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringCollapsedBreadcrumbs}
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

export default BreadcrumbPage;
