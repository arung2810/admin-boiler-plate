import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Grid, List, ListItem, ListItemText, Divider, Chip } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiHome } from "react-icons/fi";
import { TbSmartHome } from "react-icons/tb";


function DividerPage() {
  const [showCode, setShowCode] = useState({
    dividerBasic: false,
    dividerOrientation: false,
    dividerFlexItem: false,
    dividerWithChildren: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringDividerBasic = `
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function DividerVariants() {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Full width variant below" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Inset variant below" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemText primary="Middle variant below" />
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem>
        <ListItemText primary="List item" />
      </ListItem>
    </List>
  );
}`;

  const codeStringDividerOrientation = `
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { FiHome } from "react-icons/fi";
import { TbSmartHome } from "react-icons/tb";

export default function DividerVariants() {
  return (
    <Stack direction='row' px={1} gap={1}>
      <Box className="page-title">
        <FiHome />
      </Box>
      <Box>
        <Divider orientation="vertical" flexItem />
      </Box>
      <Box className="page-title">
        <TbSmartHome />
      </Box>
    </Stack>
  );
}`;

  const codeStringDividerFlexItem = `
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { FiHome } from "react-icons/fi";
import { TbSmartHome } from "react-icons/tb";

export default function DividerVariants() {
  return (
    <Stack direction='row' px={1} gap={1}>
      <Box className="page-title">
        <FiHome />
      </Box>
      <Box>
        <Divider orientation="vertical" variant="middle" flexItem />
      </Box>
      <Box className="page-title">
        <TbSmartHome />
      </Box>
    </Stack>
  );
}`;

  const codeStringDividerWithChildren = `
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { FiHome } from "react-icons/fi";
import { TbSmartHome } from "react-icons/tb";

export default function DividerVariants() {
  return (
    <Box>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <Divider>CENTER</Divider>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <Divider textAlign="left">LEFT</Divider>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <Divider textAlign="right">RIGHT</Divider>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <Divider>
        <Chip label="Chip" size="small" />
      </Divider>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Box>
  );
}`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      dividerBasic: codeStringDividerBasic,
      dividerOrientation: codeStringDividerOrientation,
      dividerFlexItem: codeStringDividerFlexItem,
      dividerWithChildren: codeStringDividerWithChildren,
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
        Divider
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          {/* BASIC */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Basic</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, dividerBasic: !prev.dividerBasic }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("dividerBasic")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>

              <List>
                <ListItem>
                  <ListItemText primary="Full width variant below" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Inset variant below" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemText primary="Middle variant below" />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText primary="List item" />
                </ListItem>
              </List>

              {showCode.dividerBasic && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringDividerBasic}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>              
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          {/* ORIENTATION */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Orientation</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, dividerOrientation: !prev.dividerOrientation }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("dividerOrientation")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>

              <Stack direction='row' px={1} gap={1}>
                <Box className="page-title">
                  <FiHome />
                </Box>
                <Box>
                  <Divider orientation="vertical" flexItem />
                </Box>
                <Box className="page-title">
                  <TbSmartHome />
                </Box>
              </Stack>

              {showCode.dividerOrientation && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringDividerOrientation}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>              
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          {/* FLEX ITEM */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Flex Item</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, dividerFlexItem: !prev.dividerFlexItem }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("dividerFlexItem")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>

              <Stack direction='row' px={1} gap={1}>
                <Box className="page-title">
                  <FiHome />
                </Box>
                <Box>
                  <Divider orientation="vertical" variant="middle" flexItem />
                </Box>
                <Box className="page-title">
                  <TbSmartHome />
                </Box>
              </Stack>

              {showCode.dividerFlexItem && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringDividerFlexItem}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>              
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          {/* WITH CHILDREN */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">With Children</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, dividerWithChildren: !prev.dividerWithChildren }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("dividerWithChildren")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>

              <Box className='page-title'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Divider>CENTER</Divider>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Divider textAlign="left">LEFT</Divider>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Divider textAlign="right">RIGHT</Divider>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Divider>
                  <Chip label="Chip" size="small" />
                </Divider>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Box>

              {showCode.dividerWithChildren && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringDividerWithChildren}
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

export default DividerPage;
