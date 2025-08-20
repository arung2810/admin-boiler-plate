import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  Tooltip,
  Snackbar,
  Button,
} from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiSend, FiTrash } from 'react-icons/fi';

function ButtonPage() {
  const [showCode, setShowCode] = useState({
    contained: false,
    text: false,
    outlined: false,
    icon: false,
    buttonSize: false,
    buttonColors: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringContained = `// MUI Imports
import Button from '@mui/material/Button'

const ButtonsContained = () => {
  return (
    <Stack direction='flex' gap=(2)>
      <Button variant='contained'>Primary</Button>
      <Button variant='contained' color='secondary'>Secondary</Button>
      <Button variant='contained' disabled>Disabled</Button>
      <Button variant='contained' href='#'>
        Link
      </Button>
    </Stack>
  )
}

export default ButtonsContained`;

  const codeStringText = `// MUI Imports
import Button from '@mui/material/Button'

const ButtonsText = () => {
  return (
    <Stack direction='flex' gap=(2)>
      <Button variant='text'>Primary</Button>
      <Button variant='text' color='secondary'>Secondary</Button>
      <Button variant='text' disabled>Disabled</Button>
      <Button variant='text' href='#'>
        Link
      </Button>
    </Stack>
  )
}

export default ButtonsText`;

  const codeStringOutlined = `// MUI Imports
import Button from '@mui/material/Button'

const ButtonsOutlined = () => {
  return (
    <Stack direction='flex' gap=(2)>
      <Button variant='outlined'>Primary</Button>
      <Button variant='outlined' color='secondary'>Secondary</Button>
      <Button variant='outlined' disabled>Disabled</Button>
      <Button variant='outlined' href='#'>
        Link
      </Button>
    </Stack>
  )
}

export default ButtonsOutlined`;

  const codeStringIconLabel = `// MUI Imports
import Button from '@mui/material/Button'

const ButtonsWithIconAndLabel = () => {
  return (
    <Stack direction='flex' gap=(2)>
      <Button variant='contained' endIcon={<i className='tabler-send' />}>
        Send
      </Button>
      <Button variant='contained' color='secondary' startIcon={<i className='tabler-trash' />}>
        Delete
      </Button>
    </Stack>
  )
}

export default ButtonsWithIconAndLabel`;

  const codeStringIcon = `// MUI Imports
import IconButton from '@mui/material/IconButton'

const ButtonsIcons = () => {
  return (
    <Stack direction='flex' gap=(2)>
      <IconButton aria-label='Send'>
        <FiSend />
      </IconButton>
      <IconButton aria-label='Send' color='primary'>
        <FiSend />
      </IconButton>
      <IconButton aria-label='Send' color='secondary'>
        <FiSend />
      </IconButton>
      <IconButton aria-label='Send' disabled>
        <FiSend />
      </IconButton>
    </Stack>
  )
}

export default ButtonsIcons`;

  const codeStringButtonSize = `// MUI Imports
import IconButton from '@mui/material/IconButton'

const ButtonsIcons = () => {
  return (
    <Stack direction='flex' gap={2}>
      <Button variant='text' size='small'>Small</Button>
      <Button variant='text' size='medium'>Medium</Button>
      <Button variant='text' size='large'>Large</Button>
      <Button variant='outlined' size='small'>Small</Button>
      <Button variant='outlined' size='medium'>Medium</Button>
      <Button variant='outlined' size='large'>Large</Button>
      <Button variant='contained' size='small'>Small</Button>
      <Button variant='contained' size='medium'>Medium</Button>
      <Button variant='contained' size='large'>Large</Button>
      <IconButton aria-label='Send' color='primary' size='small'><FiSend /></IconButton>
      <IconButton aria-label='Send' color='primary'><FiSend /></IconButton>
      <IconButton aria-label='Send' color='primary' size='large'><FiSend /></IconButton>
    </Stack>
  )
}

export default ButtonsIcons`;

  const codeStringButtonColors = `// MUI Imports
import IconButton from '@mui/material/IconButton'

const ButtonsIcons = () => {
  return (
    <Stack direction='flex' gap={2}>
      <Button color='success'>Success</Button>
      <Button color='error'>Error</Button>
      <Button color='warning'>Warning</Button>
      <Button color='info'>Info</Button>
      <Button variant='outlined' color='success'>Success</Button>
      <Button variant='outlined' color='error'>Error</Button>
      <Button variant='outlined' color='warning'>Warning</Button>
      <Button variant='outlined' color='info'>Info</Button>
      <Button variant='contained' color='success'>Success</Button>
      <Button variant='contained' color='error'>Error</Button>
      <Button variant='contained' color='warning'>Warning</Button>
      <Button variant='contained' color='info'>Info</Button>
    </Stack>
  )
}

export default ButtonsIcons`;

  const codeStringCustomizedButtonClass = `// MUI Imports
import IconButton from '@mui/material/IconButton'

const ButtonsIcons = () => {
  return (
    <Stack direction='flex' gap={2}>
      <Button className='btn primary-btn'>Primary</Button>
      <Button className='btn secondary-btn'>Secondary</Button>
    </Stack>
  )
}

export default ButtonsIcons`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      contained: codeStringContained,
      text: codeStringText,
      outlined: codeStringOutlined,
      icon: codeStringIcon,
      buttonSize: codeStringButtonSize,
      buttonColors: codeStringButtonColors,
      customizedButtonClass: codeStringCustomizedButtonClass,
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
        Buttons
      </Typography>

      <Stack gap={3}>

        {/* BUTTON CONTAINED */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Contained</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, contained: !prev.contained }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("contained")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Stack direction="row" gap={2}>
              <Button variant="contained">Primary</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button variant="contained" disabled>Disabled</Button>
              <Button variant="contained" href="#">Link</Button>
            </Stack>

            {showCode.contained && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringContained}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* BUTTON TEXT */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Text</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, text: !prev.text }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("text")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Stack direction="row" gap={2}>
              <Button variant="text">Primary</Button>
              <Button variant="text" color="secondary">Secondary</Button>
              <Button variant="text" disabled>Disabled</Button>
              <Button variant="text" href="#">Link</Button>
            </Stack>

            {showCode.text && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringText}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* BUTTON OUTLINED */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Outlined</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, outlined: !prev.outlined }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("outlined")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Stack direction="row" gap={2}>
              <Button variant="outlined">Primary</Button>
              <Button variant="outlined" color="secondary">Secondary</Button>
              <Button variant="outlined" disabled>Disabled</Button>
              <Button variant="outlined" href="#">Link</Button>
            </Stack>

            {showCode.outlined && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringOutlined}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* BUTTON WITH ICON AND LABEL */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Buttons With Icon and Label</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, iconLabel: !prev.iconLabel }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("iconLabel")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Stack direction="row" gap={2}>
              <Button variant='contained' endIcon={<FiSend />}>
                Send
              </Button>
              <Button variant='contained' color='secondary' startIcon={<FiTrash />}>
                Delete
              </Button>
            </Stack>

            {showCode.iconLabel && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringIconLabel}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* BUTTON ICON */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Icon Button</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, icon: !prev.icon }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("icon")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Stack direction="row" gap={2}>
              <IconButton aria-label='Send'>
                <FiSend />
              </IconButton>
              <IconButton aria-label='Send' color='primary'>
                <FiSend />
              </IconButton>
              <IconButton aria-label='Send' color='secondary'>
                <FiSend />
              </IconButton>
              <IconButton aria-label='Send' disabled>
                <FiSend />
              </IconButton>
            </Stack>
            {showCode.icon && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringIcon}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* BUTTON SIZES */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Button Sizes</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, buttonSize: !prev.buttonSize }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("buttonSize")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Stack direction="row" alignItems={'center'} flexWrap='wrap' gap={2}>
              <Button variant='text' size='small'>Small</Button>
              <Button variant='text' size='medium'>Medium</Button>
              <Button variant='text' size='large'>Large</Button>
              <Button variant='outlined' size='small'>Small</Button>
              <Button variant='outlined' size='medium'>Medium</Button>
              <Button variant='outlined' size='large'>Large</Button>
              <Button variant='contained' size='small'>Small</Button>
              <Button variant='contained' size='medium'>Medium</Button>
              <Button variant='contained' size='large'>Large</Button>
              <IconButton aria-label='Send' color='primary' size='small'><FiSend /></IconButton>
              <IconButton aria-label='Send' color='primary'><FiSend /></IconButton>
              <IconButton aria-label='Send' color='primary' size='large'><FiSend /></IconButton>
            </Stack>
            {showCode.buttonSize && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringButtonSize}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* BUTTON COLORS */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Button Colors</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, buttonColors: !prev.buttonColors }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("buttonColors")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Stack direction="row" flexWrap='wrap' gap={2}>
              <Button color='success'>Success</Button>
              <Button color='error'>Error</Button>
              <Button color='warning'>Warning</Button>
              <Button color='info'>Info</Button>
              <Button variant='outlined' color='success'>Success</Button>
              <Button variant='outlined' color='error'>Error</Button>
              <Button variant='outlined' color='warning'>Warning</Button>
              <Button variant='outlined' color='info'>Info</Button>
              <Button variant='contained' color='success'>Success</Button>
              <Button variant='contained' color='error'>Error</Button>
              <Button variant='contained' color='warning'>Warning</Button>
              <Button variant='contained' color='info'>Info</Button>
            </Stack>
            {showCode.buttonColors && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringButtonColors}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>
        
        {/* CUSTOMIZED BUTTON AS CLASS BASE */}
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" className="page-title">Customized Button as Class Base</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, customizedButtonClass: !prev.customizedButtonClass }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("customizedButtonClass")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Stack direction="row" flexWrap='wrap' gap={2}>
              <Button className='btn primary-btn'>Primary</Button>
              <Button className='btn secondary-btn'>Secondary</Button>
            </Stack>
            {showCode.customizedButtonClass && (
              <Box className="code-block" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringCustomizedButtonClass}
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

export default ButtonPage;
