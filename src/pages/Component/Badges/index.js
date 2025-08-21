import React, { useState } from 'react';
import { Avatar, Badge, Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const imagePath = (id) => require(`../../../assets/images/avatars/${id}.png`);

function BadgePage() {
  const [showCode, setShowCode] = useState({ basic: false, dot: false, alignment: false, overlay: false });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasic = `// If you want to change the style of the badge, you can do so in the theme.js file
// MUI Imports  
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'

const BadgesBasic = () => {
  return (
    <>
      <div className='flex gap-4'>
        <Badge badgeContent={4} color='primary'>
          <Avatar src='/images/avatars/2.png' alt='User Avatar' />
        </Badge>
        <Badge badgeContent={4} color='secondary'>
          <Avatar src='/images/avatars/2.png' alt='User Avatar' />
        </Badge>
        <Badge badgeContent={4} color='success'>
          <Avatar src='/images/avatars/2.png' alt='User Avatar' />
        </Badge>
        <Badge badgeContent={4} color='error'>
          <Avatar src='/images/avatars/2.png' alt='User Avatar' />
        </Badge>
        <Badge badgeContent={4} color='warning'>
          <Avatar src='/images/avatars/2.png' alt='User Avatar' />
        </Badge>
        <Badge badgeContent={4} color='info'>
          <Avatar src='/images/avatars/2.png' alt='User Avatar' />
        </Badge>
      </div> 
    </>
  )
}
  
export default BadgesBasic`;

  const codeStringDot = `// If you want to change the style of the badge, you can do so in the theme.js file
// MUI Imports  
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'

const BadgesDot = () => {
  return (
    <>
      <div className='flex gap-4'>
        <Badge variant='dot' color='primary'>
          <Avatar src='/images/avatars/8.png' alt='User Avatar' />
        </Badge>
        <Badge variant='dot' color='secondary'>
          <Avatar src='/images/avatars/8.png' alt='User Avatar' />
        </Badge>
        <Badge variant='dot' color='error'>
          <Typography>Typography</Typography>
        </Badge>
      </div> 
    </>
  )
}
  
export default BadgesDot`;

  const codeStringAlignment = `// If you want to change the style of the badge, you can do so in the theme.js file
// MUI Imports  
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'

const BadgesAlignment  = () => {
  return (
    <>
      <div className='flex gap-4'>
        <Badge color='primary' variant='dot'>
          <Avatar src='/images/avatars/8.png' alt='User Avatar' />
        </Badge>
        <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Avatar src='/images/avatars/8.png' alt='User Avatar' />
        </Badge>
        <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
          <Avatar src='/images/avatars/8.png' alt='User Avatar' />
        </Badge>
        <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
          <Avatar src='/images/avatars/8.png' alt='User Avatar' />
        </Badge>
      </div>
    </>
  )
}
  
export default BadgesAlignment`;

  const codeStringOverlay = `// If you want to change the style of the badge, you can do so in the theme.js file
// MUI Imports  
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'

const BadgesOverlay  = () => {
  return (
    <>
      <div className='flex gap-6'>
        <Badge color='primary' badgeContent=' '>
          <Avatar src='/images/avatars/8.png' alt='User Avatar' variant='square' />
        </Badge>
        <Badge color='primary' variant='dot'>
          <Avatar src='/images/avatars/8.png' alt='User Avatar' variant='square' />
        </Badge>
        <Badge color='primary' overlap='circular' badgeContent=' '>
          <Avatar src='/images/avatars/8.png' alt='User Avatar' />
        </Badge>
        <Badge color='primary' overlap='circular' variant='dot'>
          <Avatar src='/images/avatars/8.png' alt='User Avatar' />
        </Badge>
      </div>
    </>
  )
}
  
export default BadgesOverlay`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      dot: codeStringDot,
      alignment: codeStringAlignment,
      overlay: codeStringOverlay,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode(prev => ({ ...prev, [codeKey]: true }));
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>Badges</Typography>
      <Stack gap={3}>

        {/* BASIC Badge */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Basic Badges</Typography>
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

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack direction='row' alignItems={'flex-start'} gap={2} className="w-full">
              <Badge badgeContent={4} color='primary'>
                <Avatar src={`${imagePath(1)}`} alt='User Avatar' />
              </Badge>
              <Badge badgeContent={4} color='secondary'>
                <Avatar src={`${imagePath(2)}`} alt='User Avatar' />
              </Badge>
              <Badge badgeContent={4} color='success'>
                <Avatar src={`${imagePath(3)}`} alt='User Avatar' />
              </Badge>
              <Badge badgeContent={4} color='error'>
                <Avatar src={`${imagePath(4)}`} alt='User Avatar' />
              </Badge>
              <Badge badgeContent={4} color='warning'>
                <Avatar src={`${imagePath(5)}`} alt='User Avatar' />
              </Badge>
              <Badge badgeContent={4} color='info'>
                <Avatar src={`${imagePath(6)}`} alt='User Avatar' />
              </Badge>
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

        {/* Dot Badge */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Dot Badges</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, dot: !prev.dot }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("dot")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack direction='row' alignItems={'flex-start'} gap={2} className="w-full">
              <Badge variant='dot' color='primary'>
                <Avatar src={`${imagePath(6)}`} alt='User Avatar' />
              </Badge>
              <Badge variant='dot' color='secondary'>
                <Avatar src={`${imagePath(6)}`} alt='User Avatar' />
              </Badge>
              <Badge variant='dot' color='error'>
                <Typography>Typography</Typography>
              </Badge>
            </Stack>

            {showCode.dot && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringDot}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Alignment Badge */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Alignment Badge</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, alignment: !prev.alignment }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("alignment")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack direction='row' alignItems={'flex-start'} gap={2} className="w-full">
              <Badge color='primary' variant='dot'>
                <Avatar src={`${imagePath(6)}`} alt='User Avatar' />
              </Badge>
              <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Avatar src={`${imagePath(6)}`} alt='User Avatar' />
              </Badge>
              <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                <Avatar src={`${imagePath(6)}`} alt='User Avatar' />
              </Badge>
              <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
                <Avatar src={`${imagePath(6)}`} alt='User Avatar' />
              </Badge>
            </Stack>

            {showCode.alignment && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringAlignment}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Overlay Badge */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Overlay Badge</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, overlay: !prev.overlay }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("overlay")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack direction='row' alignItems={'flex-start'} gap={2} className="w-full">
              <Badge color='primary' badgeContent=' '>
                <Avatar src={`${imagePath(6)}`} alt='User Avatar' variant='square' />
              </Badge>
              <Badge color='primary' variant='dot'>
                <Avatar src={`${imagePath(6)}`} alt='User Avatar' variant='square' />
              </Badge>
              <Badge color='primary' overlap='circular' badgeContent=' '>
                <Avatar src={`${imagePath(6)}`} alt='User Avatar' />
              </Badge>
              <Badge color='primary' overlap='circular' variant='dot'>
                <Avatar src={`${imagePath(6)}`} alt='User Avatar' />
              </Badge>
            </Stack>

            {showCode.overlay && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringOverlay}
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

export default BadgePage;
