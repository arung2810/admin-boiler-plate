import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Collapse, ListItemAvatar, Checkbox, Avatar } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbChevronDown, TbChevronUp, TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { HiOutlineMail } from 'react-icons/hi';
import { IoCopyOutline } from 'react-icons/io5';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FiInfo } from 'react-icons/fi';

import ImagePath from '../../../assets/images/avatars/1.png';

function ListPage() {
  const [showCode, setShowCode] = useState({
    basicList: false,
    nestedList: false,
    checkboxList: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasicList = `
// If you want to change the style of the List, you can do so in the theme.js file
// MUI Imports
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { HiOutlineMail } from 'react-icons/hi';
import { IoCopyOutline } from 'react-icons/io5';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FiInfo } from 'react-icons/fi';

const ListBasic = () => {
  return (
    <>
      <List component='nav' aria-label='main mailbox'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HiOutlineMail />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoCopyOutline />
            </ListItemIcon>
            <ListItemText primary='Draft' />
          </ListItemButton>
        </ListItem>
      </List>
      <Box my={1}>
        <Divider />
      </Box>
      <List component='nav' aria-label='secondary mailbox'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MdOutlineAccessTime />
            </ListItemIcon>
            <ListItemText primary='Snoozed' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#simple-list' className='hover:text-inherit'>
            <ListItemIcon>
              <FiInfo />
            </ListItemIcon>
            <ListItemText primary='Spam' />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  )
}

export default ListBasic`;

  const codeStringNestedList = `
// If you want to change the style of the List, you can do so in the theme.js file
// MUI Imports
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Collapse } from '@mui/material';
import { HiOutlineMail } from 'react-icons/hi';
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import { IoCopyOutline } from 'react-icons/io5';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FiInfo } from 'react-icons/fi';

const ListNested = () => {

  const [open, setOpen] = useState(true)
  const handleClick = () => {setOpen(!open)}

  return (
    <>
      <List component='nav' aria-label='main mailbox'>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <HiOutlineMail />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
            {open ? <TbChevronUp /> : <TbChevronDown />}
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <Box px={2}>
            <List component='div' disablePadding >
              <ListItem disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                    <MdOutlineAccessTime />
                  </ListItemIcon>
                  <ListItemText primary='Scheduled' />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
                <IoCopyOutline />
            </ListItemIcon>
            <ListItemText primary='Draft' />
          </ListItemButton>
        </ListItem>
      </List>
      <Box my={1}>
        <Divider />
      </Box>
      <List component='nav' aria-label='secondary mailbox'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MdOutlineAccessTime />
            </ListItemIcon>
            <ListItemText primary='Snoozed' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#simple-list' className='hover:text-inherit'>
            <ListItemIcon>
              <FiInfo />
            </ListItemIcon>
            <ListItemText primary='Spam' />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  )
}

export default ListNested`;

  const codeStringCheckboxList = `
// If you want to change the style of the List, you can do so in the theme.js file
// MUI Imports
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Collapse, Checkbox, Avatar } from '@mui/material';
import { HiOutlineMail } from 'react-icons/hi';
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import { IoCopyOutline } from 'react-icons/io5';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FiInfo } from 'react-icons/fi';
import ImagePath from '../../../assets/images/avatars/1.png';

const ListCheckbox = () => {

  const [checked, setChecked] = useState([]);
  const handleToggle = (value) => () => {
    setChecked((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <>
      <List>
      {[1, 2, 3].map(value => (
        <ListItem
          key={value}
          disablePadding
          secondaryAction={
            <Checkbox
              edge="end"
              tabIndex={-1}
              disableRipple
              checked={checked.indexOf(value) !== -1}
              onChange={handleToggle(value)}
            />
          }
        >
          <ListItemButton onClick={handleToggle(value)}>
            <ListItemAvatar>
              <Avatar src={ImagePath} alt={ImagePath} />
            </ListItemAvatar>
            <ListItemText primary='User Name' />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </>
  )
}

export default ListCheckbox`;


  const handleCopy = async (codeKey) => {
    const codeMap = {
      basicList: codeStringBasicList,
      nestedList: codeStringNestedList,
      checkboxList: codeStringCheckboxList,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const [open, setOpen] = useState(true)
  const handleClick = () => {setOpen(!open)}


  const [checked, setChecked] = useState([]);
  const handleToggle = (value) => () => {
    setChecked((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  
  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        List
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 12 }}>
          {/* BASIC LIST */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Basic List</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, basicList: !prev.basicList }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("basicList")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Typography variant="body1" className='page-title'>Lists are a continuous group of text or images.</Typography>
              <Box>
                <List component='nav' aria-label='main mailbox'>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <HiOutlineMail />
                      </ListItemIcon>
                      <ListItemText primary='Inbox' />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <IoCopyOutline />
                      </ListItemIcon>
                      <ListItemText primary='Draft' />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Box my={1}>
                  <Divider />
                </Box>
                <List component='nav' aria-label='secondary mailbox'>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <MdOutlineAccessTime />
                      </ListItemIcon>
                      <ListItemText primary='Snoozed' />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component='a' href='#simple-list' className='hover:text-inherit'>
                      <ListItemIcon>
                        <FiInfo />
                      </ListItemIcon>
                      <ListItemText primary='Spam' />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>

              {showCode.basicList && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringBasicList}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          {/* NESTED LIST */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Nested List</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, nestedList: !prev.nestedList }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("nestedList")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Typography variant="body1" className='page-title'>Nested Lists are a continuous group of text or images.</Typography>
              <Box>
                <List component='nav' aria-label='main mailbox'>
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleClick}>
                      <ListItemIcon>
                        <HiOutlineMail />
                      </ListItemIcon>
                      <ListItemText primary='Inbox' />
                      {open ? <TbChevronUp /> : <TbChevronDown />}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={open} timeout='auto' unmountOnExit>
                    <Box px={2}>
                      <List component='div' disablePadding >
                        <ListItem disablePadding>
                          <ListItemButton >
                            <ListItemIcon>
                              <MdOutlineAccessTime />
                            </ListItemIcon>
                            <ListItemText primary='Scheduled' />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Box>
                  </Collapse>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                         <IoCopyOutline />
                      </ListItemIcon>
                      <ListItemText primary='Draft' />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Box my={1}>
                  <Divider />
                </Box>
                <List component='nav' aria-label='secondary mailbox'>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <MdOutlineAccessTime />
                      </ListItemIcon>
                      <ListItemText primary='Snoozed' />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component='a' href='#simple-list' className='hover:text-inherit'>
                      <ListItemIcon>
                        <FiInfo />
                      </ListItemIcon>
                      <ListItemText primary='Spam' />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>

              {showCode.nestedList && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringNestedList}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          {/* LIST WITH CHECKBOX */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">List with Checkbox</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, checkboxList: !prev.checkboxList }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("checkboxList")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Typography variant="body1" className='page-title'>Manage 'selected' prop with the help of a state.</Typography>
              <Box>
                <List>
                  {[1, 2, 3].map(value => (
                    <ListItem
                      key={value}
                      disablePadding
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          tabIndex={-1}
                          disableRipple
                          checked={checked.indexOf(value) !== -1}
                          onChange={handleToggle(value)}
                        />
                      }
                    >
                      <ListItemButton onClick={handleToggle(value)}>
                        <ListItemAvatar>
                          <Avatar src={ImagePath} alt={ImagePath} />
                        </ListItemAvatar>
                        <ListItemText primary='User Name' />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>

              {showCode.checkboxList && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringCheckboxList}
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

export default ListPage;
