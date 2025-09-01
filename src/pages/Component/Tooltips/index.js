import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import { RiCodeSSlashFill, RiHome6Line } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// ✅ Custom Tooltip with styled()
const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#1976d2',
    color: '#fff',
    fontSize: 14,
    fontWeight: 600,
    borderRadius: 8,
    padding: '8px 12px',
    boxShadow: theme.shadows[3],
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#1976d2',
  },
}));

function TooltipsPage() {
  const [showCode, setShowCode] = useState({
    basicTooltip: false,
    positionedTooltips: false,
    customizationTooltip: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  // ✅ Code Strings
  const codeStringBasicTooltip = `
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip() {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}`;
  const codeStringPositionedTooltips = `
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function PositionedTooltips() {
  return (
    <Box sx={{ width: 500 }}>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          <Tooltip title="Add" placement="top-start">
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top">
            <Button>top</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top-end">
            <Button>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={6}>
          <Tooltip title="Add" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left">
            <Button>left</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid container direction="column" sx={{ alignItems: 'flex-end' }} size={6}>
          <Grid>
            <Tooltip title="Add" placement="right-start">
              <Button>right-start</Button>
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip title="Add" placement="right">
              <Button>right</Button>
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip title="Add" placement="right-end">
              <Button>right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          <Tooltip title="Add" placement="bottom-start">
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end">
            <Button>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}`;
  const codeStringCustomizationTooltip = `
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [\`& .\${tooltipClasses.tooltip}\`]: {
    backgroundColor: '#1976d2',
    color: '#fff',
    fontSize: 14,
    fontWeight: 600,
    borderRadius: 8,
    padding: '8px 12px',
    boxShadow: theme.shadows[3],
  },
  [\`& .\${tooltipClasses.arrow}\`]: {
    color: '#1976d2',
  },
}));

export default function CustomizationTooltip() {
  return (
    <CustomTooltip title="Customized Tooltip" arrow>
      <Button>Hover me</Button>
    </CustomTooltip>
  );
}`;

  // ✅ Handle Copy
  const handleCopy = async (codeKey) => {
    const codeMap = {
      basicTooltip: codeStringBasicTooltip,
      positionedTooltips: codeStringPositionedTooltips,
      customizationTooltip: codeStringCustomizationTooltip,
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
        Tooltips
      </Typography>

      <Grid container spacing={3}>
        {/* ✅ Basic Tooltip */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Basic Tooltip</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton onClick={() => setShowCode((prev) => ({ ...prev, basicTooltip: !prev.basicTooltip }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton onClick={() => handleCopy("basicTooltip")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Box>
                <Tooltip title="Home">
                  <IconButton><RiHome6Line /></IconButton>
                </Tooltip>
                <Tooltip title="Home" arrow>
                  <IconButton><RiHome6Line /></IconButton>
                </Tooltip>
              </Box>
              {showCode.basicTooltip && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringBasicTooltip}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>

        {/*  Customization Tooltips */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Customization Tooltips</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton onClick={() => setShowCode((prev) => ({ ...prev, customizationTooltip: !prev.customizationTooltip }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton onClick={() => handleCopy("customizationTooltip")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Box textAlign="center">
                <CustomTooltip title="Customized Tooltip" arrow>
                  <Button className='btn primary-btn'>Hover me</Button>
                </CustomTooltip>
              </Box>
              {showCode.customizationTooltip && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringCustomizationTooltip}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>

        {/* ✅ Positioned Tooltips */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Positioned Tooltips</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton onClick={() => setShowCode((prev) => ({ ...prev, positionedTooltips: !prev.positionedTooltips }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton onClick={() => handleCopy("positionedTooltips")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Box>
                <Grid container sx={{ justifyContent: 'center' }}>
                  <Grid>
                    <Tooltip title="Add" placement="top-start">
                      <Button>top-start</Button>
                    </Tooltip>
                    <Tooltip title="Add" placement="top">
                      <Button>top</Button>
                    </Tooltip>
                    <Tooltip title="Add" placement="top-end">
                      <Button>top-end</Button>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }}>
                  <Grid size={6}>
                    <Tooltip title="Add" placement="left-start">
                      <Button>left-start</Button>
                    </Tooltip>
                    <br />
                    <Tooltip title="Add" placement="left">
                      <Button>left</Button>
                    </Tooltip>
                    <br />
                    <Tooltip title="Add" placement="left-end">
                      <Button>left-end</Button>
                    </Tooltip>
                  </Grid>
                  <Grid container direction="column" sx={{ alignItems: 'flex-end' }} size={6}>
                    <Grid>
                      <Tooltip title="Add" placement="right-start">
                        <Button>right-start</Button>
                      </Tooltip>
                    </Grid>
                    <Grid>
                      <Tooltip title="Add" placement="right">
                        <Button>right</Button>
                      </Tooltip>
                    </Grid>
                    <Grid>
                      <Tooltip title="Add" placement="right-end">
                        <Button>right-end</Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }}>
                  <Grid>
                    <Tooltip title="Add" placement="bottom-start">
                      <Button>bottom-start</Button>
                    </Tooltip>
                    <Tooltip title="Add" placement="bottom">
                      <Button>bottom</Button>
                    </Tooltip>
                    <Tooltip title="Add" placement="bottom-end">
                      <Button>bottom-end</Button>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Box>
              {showCode.positionedTooltips && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringPositionedTooltips}
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
        autoHideDuration={2000}
        onClose={() => setCopySuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default TooltipsPage;
