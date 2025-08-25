import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Grid, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiHome } from 'react-icons/fi';


function DrawerPage() {
  const [showCode, setShowCode] = useState({
    temporaryDrawer: false,
    anchorDrawer: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringTemporaryDrawer = `
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FiHome } from 'react-icons/fi';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FiHome /> : <FiHome />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FiHome /> : <FiHome />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}`;

  const codeStringAnchorDrawer = `
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FiHome } from 'react-icons/fi';

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FiHome /> : <FiHome />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FiHome /> : <FiHome />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}`;


  const handleCopy = async (codeKey) => {
    const codeMap = {
      temporaryDrawer: codeStringTemporaryDrawer,
      anchorDrawer: codeStringAnchorDrawer,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };
  
 
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FiHome /> : <FiHome />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FiHome /> : <FiHome />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer1 = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer1(anchor, false)}
      onKeyDown={toggleDrawer1(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FiHome /> : <FiHome />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FiHome /> : <FiHome />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Drawer
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          {/* TEMPORARY DRAWER */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Temporary Drawer</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, temporaryDrawer: !prev.temporaryDrawer }))}>
                    <RiCodeSSlashFill />
                  </IconButton> 
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("temporaryDrawer")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Button className='btn primary-btn' onClick={toggleDrawer(true)}>Open drawer</Button>

              <Drawer open={open} anchor={'right'} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>

              {showCode.temporaryDrawer && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringTemporaryDrawer}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>              
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          {/* ANCHOR DRAWER */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Anchor Drawer</Typography>
              <Stack direction="row" gap={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, anchorDrawer: !prev.anchorDrawer }))}>
                    <RiCodeSSlashFill />
                  </IconButton> 
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("anchorDrawer")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack direction='row' flexWrap='wrap' gap={2}>
                {['left', 'right', 'top', 'bottom'].map((anchor) => (
                  <React.Fragment key={anchor}>
                      <Button className='btn primary-btn' onClick={toggleDrawer1(anchor, true)}>{anchor}</Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer1(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </Stack>

              {showCode.anchorDrawer && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringAnchorDrawer}
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

export default DrawerPage;
