import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Button, ButtonGroup, ToggleButtonGroup, ToggleButton,
} from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaRegUser, FaRegUserCircle, FaUser } from 'react-icons/fa';


function ButtonGroupsPage() {
  const [showCode, setShowCode] = useState({
    basicButtonGroup: false,
    buttonGroupSize: false,
    buttonGroupVertical: false,
    buttonGroupColor: false,
    toggleGroupButton: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasicButtonGroup = `
// If you want to change the style of the button groups, you can do so in the theme.js file
// MUI Imports
import Button from '@mui/material/Button'

const BasicButtonGroup = () => {
  return (
    <Stack gap=(2)>
      <ButtonGroup variant='outlined'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='tonal'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='text'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default BasicButtonGroup`;

  const codeStringButtonGroupSize = `
// If you want to change the style of the button groups, you can do so in the theme.js file
// MUI Imports
import Button from '@mui/material/Button'

const BasicButtonGroup = () => {
  return (
    <Stack gap=(2)>
      <ButtonGroup variant='outlined' size='small'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='outlined' size='medium'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='outlined' size='large'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default BasicButtonGroup`;

  const codeStringButtonGroupVertical = `
// If you want to change the style of the button groups, you can do so in the theme.js file
// MUI Imports
import Button from '@mui/material/Button'

const BasicButtonGroupVertical = () => {
  return (
    <Stack gap=(2)>
      <ButtonGroup variant='outlined' orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='tonal' orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='contained' orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='text' orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default BasicButtonGroupVertical`;

  const codeStringButtonGroupColor = `
// If you want to change the style of the button groups, you can do so in the theme.js file
// MUI Imports
import Button from '@mui/material/Button'

const BasicButtonGroupColor = () => {
  return (
    <Stack gap=(2)>
      <ButtonGroup variant='outlined' color='success'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup variant='outlined' color='error'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup variant='outlined' color='warning'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup variant='outlined' color='info'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  )
}

export default BasicButtonGroupColor`;

  const codeStringToggleGroupButton = `
// If you want to change the style of the button groups, you can do so in the theme.js file
// React Imports
import { useState } from 'react'

// MUI Imports
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const ButtonToggleBasic = () => {
  // States
  const [alignment, setAlignment] = useState('left')

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  return (
    <ToggleButtonGroup exclusive value={alignment} onChange={handleAlignment} aria-label='text alignment'>
      <ToggleButton value='left' aria-label='left aligned'>
        <FaRegUser />
      </ToggleButton>
      <ToggleButton value='center' aria-label='center aligned'>
        <FaRegUserCircle />
      </ToggleButton>
      <ToggleButton value='right' aria-label='right aligned'>
        <FaUser />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ButtonToggleBasic`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basicButtonGroup: codeStringBasicButtonGroup,
      buttonGroupSize: codeStringButtonGroupSize,
      buttonGroupVertical: codeStringButtonGroupVertical,
      buttonGroupColor: codeStringButtonGroupColor,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); // auto show code block
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const [alignment, setAlignment] = useState('left')

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Button Groups
      </Typography>

      <Stack gap={3}>

        {/* BASIC BUTTON GROUPS */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Basic Button Groups</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, basicButtonGroup: !prev.basicButtonGroup }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("basicButtonGroup")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4} direction='row'>
            <Stack gap={2}>
              <ButtonGroup variant='outlined'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup variant='tonal'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup variant='text'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Stack>

            {showCode.basicButtonGroup && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringBasicButtonGroup}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* BUTTON GROUPS SIZES */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Button Groups Sizes</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, buttonGroupSize: !prev.buttonGroupSize }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("buttonGroupSize")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='row' gap={4}>
            <Stack gap={2}>
              <ButtonGroup variant='outlined' size='small'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup variant='outlined' size='medium'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup variant='outlined' size='large'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Stack>

            {showCode.buttonGroupSize && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringButtonGroupSize}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* BUTTON GROUPS VERTICAL */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Button Groups Vertical</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, buttonGroupVertical: !prev.buttonGroupVertical }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("buttonGroupVertical")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4} direction='row'>
            <Stack direction='row' gap={2}>
              <ButtonGroup variant='outlined' orientation='vertical'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup variant='tonal' orientation='vertical'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup variant='contained' orientation='vertical'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <ButtonGroup variant='text' orientation='vertical'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Stack>

            {showCode.buttonGroupVertical && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringButtonGroupVertical}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* BUTTON GROUPS COLORS */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Button Groups Colors</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, buttonGroupColor: !prev.buttonGroupColor }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("buttonGroupColor")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4} direction='row'>
            <Stack gap={2}>
              <ButtonGroup variant='outlined' color='success'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>

              <ButtonGroup variant='outlined' color='error'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>

              <ButtonGroup variant='outlined' color='warning'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>

              <ButtonGroup variant='outlined' color='info'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Stack>

            {showCode.buttonGroupColor && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringButtonGroupColor}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* BASIC TOGGLE BUTTON */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Basic Toggle Button</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, toggleGroupButton: !prev.toggleGroupButton }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("toggleGroupButton")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4} direction='row'>
            <Box>
              <ToggleButtonGroup exclusive value={alignment} onChange={handleAlignment} aria-label='text alignment'>
                <ToggleButton value='left' aria-label='left aligned'>
                  <FaRegUser />
                </ToggleButton>
                <ToggleButton value='center' aria-label='center aligned'>
                  <FaRegUserCircle />
                </ToggleButton>
                <ToggleButton value='right' aria-label='right aligned'>
                  <FaUser />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {showCode.toggleGroupButton && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringToggleGroupButton}
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

export default ButtonGroupsPage;
