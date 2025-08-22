import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Tabs, Tab } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PropTypes from 'prop-types';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



function TabsPage() {
  const [showCode, setShowCode] = useState({
    basicTabs: false,
    verticalTabs: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

const codeStringBasicTabs = `
// If you want to change the style of the Tabs, you can do so in the theme.js file
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={\`simple-tabpanel-\${index}\`}
      aria-labelledby={\`simple-tab-\${index}\`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: \`simple-tab-\${index}\`,
    'aria-controls': \`simple-tabpanel-\${index}\`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ width: '100%' }} gap='3'>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" mb={3}>
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Typography className="page-title">Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies.</Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography className="page-title">Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah.</Typography>
      </CustomTabPanel>
    </Stack>    
  );
}`;

const codeStringVerticalTabs = `
// If you want to change the style of the Tabs, you can do so in the theme.js file
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={\`simple-tabpanel-\${index}\`}
      aria-labelledby={\`simple-tab-\${index}\`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: \`simple-tab-\${index}\`,
    'aria-controls': \`simple-tabpanel-\${index}\`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ width: '100%' }} direction='row' gap='3'>
      <Tabs value={value}  orientation="vertical" onChange={handleChange} aria-label="basic tabs example" mb={3}>
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Typography className="page-title">Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies.</Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography className="page-title">Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah.</Typography>
      </CustomTabPanel>
    </Box>    
  );
}`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basicTabs: codeStringBasicTabs,
      verticalTabs: codeStringVerticalTabs,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };
 
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Tabs
      </Typography>

        <Stack gap={3}>

          {/* BASIC TABS */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Basic Tabs</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, basicTabs: !prev.basicTabs }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("basicTabs")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
                <Stack sx={{ width: '100%' }} gap={3}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                  </Tabs>
                  <CustomTabPanel value={value} index={0}>
                    <Typography className="page-title">Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies.</Typography>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <Typography className="page-title">Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah.</Typography>
                  </CustomTabPanel>
                </Stack>                
              
              {showCode.basicTabs && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringBasicTabs}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>

          {/* VERTICAL TABS */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Vertical Tabs</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, verticalTabs: !prev.verticalTabs }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("verticalTabs")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack direction='row' sx={{ width: '100%' }} gap={3}>
                <Tabs value={value} orientation="vertical" onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
                </Tabs>
                <CustomTabPanel value={value} index={0}>
                  <Typography className="page-title">Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly cake caramels brownie gummies.</Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <Typography className="page-title">Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups sesame snaps halvah.</Typography>
                </CustomTabPanel>
              </Stack>                
              
              {showCode.verticalTabs && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringVerticalTabs}
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

export default TabsPage;
