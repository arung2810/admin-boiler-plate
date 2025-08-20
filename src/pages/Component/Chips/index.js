import React, { useState } from 'react';
import { Avatar, Box, Chip, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, } from '@mui/material';
import { RiCodeSSlashFill, RiDeleteBin6Line } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ChipPage() {
  const [showCode, setShowCode] = useState({ basic: false, outlined: false, filled: false, icon: false, });
  const [copySuccess, setCopySuccess] = useState(false);

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const codeStringBasic = `// If you want to change the style of the chip, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const ChipsVariants = () => {
  return (
    <Box display={'flex'} alignItems={'center'} gap={1} flexWrap={'wrap'} className="w-full">
      <Chip label='Basic' />
      <Chip label='Outlined' variant='outlined' />
    </Box>
  )
}

export default ChipsVariants`;

  const codeStringFilled = `// If you want to change the style of the chip, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const ChipsFilled = () => {
  return (
    <Box display={'flex'} alignItems={'center'} gap={1} flexWrap={'wrap'} className="w-full">
      <Box className="w-full">
        <Typography className='font-medium'>Filled Chips</Typography>
      </Box>
      <Chip label='Primary' color='primary' />
      <Chip label='Secondary' color='secondary' />
      <Chip label='Success' color='success' />
      <Chip label='Error' color='error' />
      <Chip label='Warning' color='warning' />
      <Chip label='Info' color='info' />
    </Box>
  )
}

export default ChipsFilled`;

  const codeStringOutlined = `// If you want to change the style of the chip, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const ChipsOutlied = () => {
  return (
    <Box display={'flex'} alignItems={'center'} gap={1} flexWrap={'wrap'} className="w-full">
      <Box className="w-full">
        <Typography className='font-medium'>Outlined Chips</Typography>
      </Box>
      <Chip label='Primary' color='primary' variant='outlined' />
      <Chip label='Secondary' color='secondary' variant='outlined' />
      <Chip label='Success' color='success' variant='outlined' />
      <Chip label='Error' color='error' variant='outlined' />
      <Chip label='Warning' color='warning' variant='outlined' />
      <Chip label='Info' color='info' variant='outlined' />
    </Box>
  )
}

export default ChipsOutlied`;

  const codeStringIcon = `// If you want to change the style of the chip, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const ChipsonIcon = () => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Box display={'flex'} alignItems={'center'} gap={1} flexWrap={'wrap'} className="w-full">
      <Box className="w-full">
        <Typography className='font-medium'>Default</Typography>
      </Box>
      <Chip 
        label="Basic" 
        variant="outlined" 
        onDelete={handleDelete} />
      <Chip 
        label="Primary" 
        variant="outlined" 
        color='primary' 
        onDelete={handleDelete} />
      <Chip 
        label="Error" 
        variant="outlined" 
        color='error' 
        onDelete={handleDelete} />

      <Box className="w-full">
        <Typography className='font-medium'>Custom Icon</Typography>
      </Box>
      <Chip 
        label="Default" 
        onDelete={handleDelete} 
        deleteIcon={<RiDeleteBin6Line />} 
      />
      <Chip 
        label="Primary" color='primary' 
        onDelete={handleDelete} 
        deleteIcon={<RiDeleteBin6Line />} 
      />
      <Chip 
        label="Error" color='error' 
        onDelete={handleDelete} 
        deleteIcon={<RiDeleteBin6Line />} 
      />

      <Box className="w-full">
        <Typography className='font-medium'>Avatar Variant</Typography>
      </Box>
      <Chip 
        label="Default" 
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />} 
        onDelete={handleDelete} 
      />
      <Chip 
        label="Rounded" 
        avatar={<Avatar alt="Natacha" variant='rounded' src="/static/images/avatar/1.jpg" />} 
        onDelete={handleDelete} 
      />
      <Chip 
        label="Square" 
        avatar={<Avatar alt="Natacha" variant='square' src="/static/images/avatar/1.jpg" />} 
        onDelete={handleDelete} 
      />
    </Box>
  )
}

export default ChipsonIcon`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      outlined: codeStringOutlined,
      filled: codeStringFilled,
      icon: codeStringIcon,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode(prev => ({ ...prev, [codeKey]: true })); // Show code block if not visible
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>Chips</Typography>
      <Stack gap={3}>
        {/* BASIC CHIP */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Basic</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, basic: !prev.basic }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("basic")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='row' gap={4} justifyContent='space-between'>
            <Stack direction='row' gap={2} className="w-full">
              <Chip label="Basic" />
              <Chip label="Outlined" variant="outlined" />
            </Stack>

            {showCode.basic && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringBasic}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Filled CHIP */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Filled</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, filled: !prev.filled }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("filled")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='row' gap={4} justifyContent='space-between'>
            <Stack direction='row' flexWrap='wrap' gap={2} className="w-full">
              <Chip label='Primary' color='primary' />
              <Chip label='Secondary' color='secondary' />
              <Chip label='Success' color='success' />
              <Chip label='Error' color='error' />
              <Chip label='Warning' color='warning' />
              <Chip label='Info' color='info' />
            </Stack>

            {showCode.filled && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringFilled}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Outlined CHIP */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Outlined</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, outlined: !prev.outlined }))}>
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

          <Stack direction='row' gap={4} justifyContent='space-between'>
            <Stack direction='row' flexWrap='wrap' gap={2} className="w-full">
              <Chip label='Primary' color='primary' variant='outlined' />
              <Chip label='Secondary' color='secondary' variant='outlined' />
              <Chip label='Success' color='success' variant='outlined' />
              <Chip label='Error' color='error' variant='outlined' />
              <Chip label='Warning' color='warning' variant='outlined' />
              <Chip label='Info' color='info' variant='outlined' />
            </Stack>

            {showCode.outlined && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringOutlined}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Icons CHIP */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Icons</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, icon: !prev.icon }))}>
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

          <Stack direction='row' gap={4} justifyContent='space-between'>
            <Stack direction='column' gap={4} className="w-full">
              <Stack direction='row' gap={1} flexWrap={'wrap'} className="w-full">
                <Box className="w-full">
                  <Typography className='font-medium'>Default</Typography>
                </Box>
                <Chip
                  label="Basic"
                  variant="outlined"
                  onDelete={handleDelete} />
                <Chip
                  label="Primary"
                  variant="outlined"
                  color='primary'
                  onDelete={handleDelete} />
                <Chip
                  label="Error"
                  variant="outlined"
                  color='error'
                  onDelete={handleDelete} />
              </Stack>

              <Stack direction='row' gap={1} flexWrap={'wrap'} className="w-full">
                <Box className="w-full">
                  <Typography className='font-medium'>Custom Icon</Typography>
                </Box>
                <Chip
                  label="Default"
                  onDelete={handleDelete}
                  deleteIcon={<RiDeleteBin6Line />}
                />
                <Chip
                  label="Primary" color='primary'
                  onDelete={handleDelete}
                  deleteIcon={<RiDeleteBin6Line />}
                />
                <Chip
                  label="Error" color='error'
                  onDelete={handleDelete}
                  deleteIcon={<RiDeleteBin6Line />}
                />
              </Stack>

              <Stack direction='row' gap={1} flexWrap={'wrap'} className="w-full">
                <Box className="w-full">
                  <Typography className='font-medium'>Avatar Variant</Typography>
                </Box>
                <Chip
                  label="Default"
                  avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                  onDelete={handleDelete}
                />
                <Chip
                  label="Rounded"
                  avatar={<Avatar alt="Natacha" variant='rounded' src="/static/images/avatar/1.jpg" />}
                  onDelete={handleDelete}
                />
                <Chip
                  label="Square"
                  avatar={<Avatar alt="Natacha" variant='square' src="/static/images/avatar/1.jpg" />}
                  onDelete={handleDelete}
                />
              </Stack>
            </Stack>

            {showCode.icon && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringIcon}
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
  )
}

export default ChipPage;
