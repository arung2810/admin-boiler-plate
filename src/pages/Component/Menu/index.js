import React, { useState, useEffect, useRef  } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Grid, Button, Menu, MenuItem, List, ListItem, ListItemText, ListItemButton, Popper, Fade, MenuList, ClickAwayListener } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


const options = [
  'Show some love to MUI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content'
]

function MenuPage() {
  const [showCode, setShowCode] = useState({
    menuBasic: false,
    menuSelected: false,
    menuComposition: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringMenuBasic = `
// If you want to change the style of the Menu, you can do so in the theme.js file
// React Imports
import { useState } from 'react'

// MUI Imports
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

const MenuBasic = () => {
  // States
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button variant='outlined' aria-controls='basic-menu' aria-haspopup='true' onClick={handleClick}>
        Open Menu
      </Button>
      <Menu keepMounted id='basic-menu' anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default MenuBasic`;

  const codeStringMenuSelected = `
// If you want to change the style of the Menu, you can do so in the theme.js file
// React Imports
import { useState } from 'react'

// MUI Imports
import List from '@mui/material/List'
import Menu from '@mui/material/Menu'
import ListItem from '@mui/material/ListItem'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

const options = [
  'Show some love to MUI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content'
]

const MenuSelected = () => {
  // States
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null)
    setSelectedIndex(index)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <List component='nav' className='p-0' aria-label='Device settings'>
        <ListItem
          disablePadding
          aria-haspopup='true'
          aria-controls='lock-menu'
          onClick={handleClickListItem}
          aria-label='when device is locked'
        >
          <ListItemButton>
            <ListItemText primary='When device is locked' secondary={options[selectedIndex]} />
          </ListItemButton>
        </ListItem>
      </List>
      <Menu id='lock-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default MenuSelected`;

  const codeStringMenuComposition = `
// If you want to change the style of the Menu, you can do so in the theme.js file
// React Imports
import { useEffect, useRef, useState } from 'react'

// MUI Imports
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Popper from '@mui/material/Popper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ClickAwayListener from '@mui/material/ClickAwayListener'

const MenuComposition = () => {
  // States
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open)

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <>
      <Button
        ref={anchorRef}
        variant='outlined'
        aria-haspopup='true'
        onClick={handleToggle}
        id='composition-button'
        aria-expanded={open ? 'true' : undefined}
        aria-controls={open ? 'composition-menu' : undefined}
      >
        Open Menu
      </Button>
      <Popper
        transition
        open={open}
        disablePortal
        role={undefined}
        placement='bottom-start'
        anchorEl={anchorRef.current}
        className='z-[var(--mui-zIndex-modal)]'
        popperOptions={{
          modifiers: [
            {
              name: 'flip',
              options: {
                enabled: true,
                boundary: 'window'
              }
            }
          ]
        }}
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom' }}
          >
            <Paper className='shadow-lg mbs-0.5'>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList
                  autoFocusItem={open}
                  id='composition-menu'
                  onKeyDown={handleListKeyDown}
                  className='flex flex-col gap-0.5 pli-2'
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default MenuComposition`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      menuBasic: codeStringMenuBasic,
      menuSelected: codeStringMenuSelected,
      menuComposition: codeStringMenuComposition,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [selectedIndex, setSelectedIndex] = useState(1)
  const [anchorEl1, setAnchorEl1] = useState(null)

  const handleClickListItem1 = event => {
    setAnchorEl1(event.currentTarget)
  }

  const handleMenuItemClick = (event, index) => {
    setAnchorEl1(null)
    setSelectedIndex(index)
  }

  const handleClose1 = () => {
    setAnchorEl1(null)
  }

  const [open2, setOpen2] = useState(false)
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen2(prevOpen => !prevOpen)
  }

  const handleClose2 = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen2(false)
  }

  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen2(false)
    } else if (event.key === 'Escape') {
      setOpen2(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open2)

  useEffect(() => {
    if (prevOpen.current === true && open2 === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open2
  }, [open2])
  
  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Menu
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 12 }}>
          {/* BASIC MENU */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Basic Menu</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, menuBasic: !prev.menuBasic }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("menuBasic")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Typography variant="body1" className='page-title'>Manage 'anchorEl' and open props with the help of a state and 'onClose' prop with the help of a function in 'Menu' component.</Typography>
              <Box>
                <Button className='btn primary-btn' aria-controls='basic-menu' aria-haspopup='true' onClick={handleClick}>
                  Open Menu
                </Button>
                <Menu keepMounted id='basic-menu' anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>

              {showCode.menuBasic && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringMenuBasic}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          {/* SELECTED MENU */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Selected Menu</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, menuSelected: !prev.menuSelected }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("menuSelected")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Typography variant="body1" className='page-title'>Manage 'selected' prop with the help of a state in 'MenuItem' component to select an item.</Typography>
              <Box>
                <List component='nav' className='p-0' aria-label='Device settings'>
                  <ListItem
                    disablePadding
                    aria-haspopup='true'
                    aria-controls='lock-menu'
                    onClick={handleClickListItem1}
                    aria-label='when device is locked'
                  >
                    <ListItemButton>
                      <ListItemText primary='When device is locked' secondary={options[selectedIndex]} />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Menu id='lock-menu' anchorEl={anchorEl1} keepMounted open={Boolean(anchorEl1)} onClose={handleClose1}>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 0}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {showCode.menuSelected && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringMenuSelected}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          {/* SELECTED MENU */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Selected Menu</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, menuComposition: !prev.menuComposition }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("menuComposition")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Typography variant="body1" className='page-title'>Use a different positioning strategy and not blocking the page scroll by using 'MenuList' and 'Popper' components.</Typography>
              <Box>
                <Button
                  className='btn primary-btn'
                  ref={anchorRef}
                  variant='outlined'
                  aria-haspopup='true'
                  onClick={handleToggle}
                  id='composition-button'
                  aria-expanded={open2 ? 'true' : undefined}
                  aria-controls={open2 ? 'composition-menu' : undefined}
                >
                  Open Menu
                </Button>
                <Popper
                  transition
                  open={open2}
                  disablePortal
                  role={undefined}
                  placement='bottom-start'
                  anchorEl={anchorRef.current}
                  className='z-[var(--mui-zIndex-modal)]'
                  popperOptions={{
                    modifiers: [
                      {
                        name: 'flip',
                        options: {
                          enabled: true,
                          boundary: 'window'
                        }
                      }
                    ]
                  }}
                >
                  {({ TransitionProps, placement }) => (
                    <Fade
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom' }}
                    >
                      <Paper className='shadow-lg mbs-0.5'>
                        <ClickAwayListener onClickAway={() => setOpen2(false)}>
                          <MenuList
                            autoFocusItem={open2}
                            id='composition-menu'
                            onKeyDown={handleListKeyDown}
                            className='flex flex-col gap-0.5 pli-2'
                          >
                            <MenuItem onClick={handleClose2}>Profile</MenuItem>
                            <MenuItem onClick={handleClose2}>My account</MenuItem>
                            <MenuItem onClick={handleClose2}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </Box>

              {showCode.menuComposition && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringMenuComposition}
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

export default MenuPage;
