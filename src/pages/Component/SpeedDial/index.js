import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { RiCodeSSlashFill, RiHome3Line } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
const actions = [
  { icon: <RiHome3Line  />, name: 'Copy' },
  { icon: <RiHome3Line  />, name: 'Save' },
  { icon: <RiHome3Line  />, name: 'Print' },
  { icon: <RiHome3Line  />, name: 'Share' },
];

function SpeedDialPage() {
  const [showCode, setShowCode] = useState({
    basicSpeedDial: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasicSpeedDial = `
// If you want to change the style of the Backdrop, you can do so in the theme.js file
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            slotProps={{
              tooltip: {
                title: action.name,
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basicSpeedDial: codeStringBasicSpeedDial,

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
        Speed Dial
      </Typography>

      {/* Basic Speed Dial */}
      <Paper elevation={0}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h6" className="page-title">Basic Speed Dial</Typography>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Show Code">
              <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, basicSpeedDial: !prev.basicSpeedDial }))}>
                <RiCodeSSlashFill />
              </IconButton>
            </Tooltip>
            <Tooltip title="Copy Code">
              <IconButton className='icon-button' onClick={() => handleCopy("basicSpeedDial")}>
                <TbCopy />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
        <Stack gap={3}>
          <Box>
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
              <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                direction="left"
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    slotProps={{
                      tooltip: {
                        title: action.name,
                      },
                    }}
                  />
                ))}
              </SpeedDial>
            </Box>
          </Box>   

          {showCode.basicSpeedDial && (
            <Box className="code-block" sx={{ position: 'relative' }}>
              <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                {codeStringBasicSpeedDial}
              </SyntaxHighlighter>
            </Box>
          )}
        </Stack>
      </Paper>
      

      {/* Copy feedback */}
      <Snackbar
        open={copySuccess}
        message="Code copied!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default SpeedDialPage;
