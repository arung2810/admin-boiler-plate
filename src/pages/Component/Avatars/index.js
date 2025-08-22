import React, { useState } from 'react';
import { Avatar, Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, } from '@mui/material';
import { RiCodeSSlashFill, RiFileList2Line, RiFolder2Line, RiSearchLine } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { deepOrange, deepPurple } from '@mui/material/colors';

const imagePath = (id) => require(`../../../assets/images/avatars/${id}.png`);

function AvatarPage() {
  const [showCode, setShowCode] = useState({ basic: false, letter: false, icon: false, variant: false });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringBasic = `// If you want to change the style of the avatar, you can do so in the theme.js file
// MUI Imports  
import Avatar from '@mui/material/Avatar'

const AvatarBasic = () => {
  return (
    <>
      <div className='flex gap-4'>
        <Avatar src='/images/avatars/1.png' alt='Victor Anderson' />
        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
      </div> 
    </>
  )
}
  
export default AvatarBasic`;

  const codeStringLetter = `// If you want to change the style of the avatar, you can do so in the theme.js file
// MUI Imports  
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar'

const AvatarLetter = () => {
  return (
    <>
      <div className='flex gap-4'>
        <Avatar src='/images/avatars/1.png' alt='Victor Anderson' />
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </div> 
    </>
  )
}
  
export default AvatarLetter`;

  const codeStringIcon = `// If you want to change the style of the avatar, you can do so in the theme.js file
// MUI Imports  
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar'

const AvatarIcon = () => {
  return (
    <>
      <div className='flex gap-4'>
        <Avatar>
          <RiFolder2Line />
        </Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>
          <RiSearchLine />
        </Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>
          <RiFileList2Line />
        </Avatar>
      </div> 
    </>
  )
}
  
export default AvatarIcon`;

  const codeStringVariant = `// If you want to change the style of the avatar, you can do so in the theme.js file
// MUI Imports  
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar'

const AvatarVariant = () => {
  return (
    <>
      <div className='flex gap-4'>
        <Avatar>
          <RiFolder2Line />
        </Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }} variant="circle">
          <RiSearchLine />
        </Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }} variant="square">
          <RiFileList2Line />
        </Avatar>
      </div> 
    </>
  )
}
  
export default AvatarVariant`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      letter: codeStringLetter,
      icon: codeStringIcon,
      variant: codeStringVariant,
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
      <Typography variant="h6" className="page-title" mb={2}>Accordions</Typography>
      <Stack gap={3}>

        {/* Basic Avatar */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Basic Avatars</Typography>
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
              <Avatar src={`${imagePath(1)}`} alt='Victor Anderson' />
              <Avatar src={`${imagePath(8)}`} alt='Alice Cobb' />
              <Avatar src={`${imagePath(5)}`} alt='Jeffery Warner' />
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

        {/* Letter Avatar */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Letter Avatars</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, letter: !prev.letter }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("letter")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack direction='row' alignItems={'flex-start'} gap={2} className="w-full">
              <Avatar src='/images/avatars/1.png' alt='Victor Anderson' />
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </Stack>

            {showCode.letter && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringLetter}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Icon Avatar */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Icon Avatars</Typography>
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

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack direction='row' alignItems={'flex-start'} gap={2} className="w-full">
              <Avatar>
                <RiFolder2Line />
              </Avatar>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                <RiSearchLine />
              </Avatar>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>
                <RiFileList2Line />
              </Avatar>
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

        {/* Variant Avatar */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Variant Avatars</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, variant: !prev.variant }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("variant")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack direction='row' alignItems={'flex-start'} gap={2} className="w-full">
              <Avatar>
                <RiFolder2Line />
              </Avatar>
              <Avatar sx={{ bgcolor: deepOrange[500] }} variant="circle">
                <RiSearchLine />
              </Avatar>
              <Avatar sx={{ bgcolor: deepPurple[500] }} variant="square">
                <RiFileList2Line />
              </Avatar>
            </Stack>

            {showCode.variant && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringVariant}
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

export default AvatarPage;
