import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Rating } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
}

function RatingsPage() {
  const [showCode, setShowCode] = useState({
    ratingsBasic: false,
    ratingsHalf: false,
    ratingsHoverFeedback: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringRatingsBasic = `
// If you want to change the style of the Ratings, you can do so in the theme.js file
// React Imports
import { useState } from 'react'

// MUI Imports
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const RatingsBasic = () => {
  // States
  const [value, setValue] = useState(2)

  return (
    <>
      <div className='mbe-3'>
        <Typography className='font-medium'>Controlled</Typography>
        <Rating value={value} name='basic-controlled' onChange={(event, newValue) => setValue(newValue)} />
      </div>
      <div className='mbe-3'>
        <Typography className='font-medium'>Read only</Typography>
        <Rating readOnly value={value} name='read-only' />
      </div>
      <div className='mbe-3'>
        <Typography className='font-medium'>Disabled</Typography>
        <Rating disabled value={value} name='disabled' />
      </div>
      <div>
        <Typography className='font-medium'>No rating given</Typography>
        <Rating value={null} name='no-value' />
      </div>
      <Box>
        <Typography className='page-title'>Custom rating</Typography>
        <Rating value={null} name='no-value' size='large' icon={<FaHeart />} emptyIcon={<FaRegHeart />} />
      </Box>
    </>
  )
}

export default RatingsBasic`;

  const codeStringRatingsHalf = `
// If you want to change the style of the Ratings, you can do so in the theme.js file
// MUI Imports
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const RatingsHalf = () => {
  return (
    <>
      <div className='mbe-3'>
        <Typography className='font-medium'>Half Ratings</Typography>
        <Rating defaultValue={2.5} precision={0.5} name='half-rating' />
      </div>
      <>
        <Typography className='font-medium'>Read only</Typography>
        <Rating readOnly defaultValue={2.5} precision={0.5} name='read-only' />
      </>
    </>
  )
}

export default RatingsHalf`;

  const codeStringRatingsHoverFeedback = `
// If you want to change the style of the Ratings, you can do so in the theme.js file
// React Imports
import { useState } from 'react'

// MUI Imports
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
}

const RatingsHoverFeedback = () => {
  // States
  const [hover, setHover] = useState(-1)
  const [value, setValue] = useState(2)

  return (
    <div className='flex items-center'>
      <Rating
        value={value}
        precision={0.5}
        name='hover-feedback'
        className='mie-4'
        onChange={(event, newValue) => setValue(newValue)}
        onChangeActive={(event, newHover) => setHover(newHover)}
      />
      {value !== null && <Typography>{labels[hover !== -1 ? hover : value]}</Typography>}
    </div>
  )
}

export default RatingsHoverFeedback`;


  const handleCopy = async (codeKey) => {
    const codeMap = {
      ratingsBasic: codeStringRatingsBasic,
      ratingsHalf: codeStringRatingsHalf,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };
 
  
  const [value, setValue] = useState(2)


  const [hover1, setHover1] = useState(-1)
  const [value1, setValue1] = useState(2)

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Ratings
      </Typography>

        <Stack gap={3}>
          
          {/* BASIC RATINGS */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Basic Ratings</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, ratingsBasic: !prev.ratingsBasic }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("ratingsBasic")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Box>
                <Typography className='page-title'>Controlled</Typography>
                <Rating value={value} name='basic-controlled' onChange={(event, newValue) => setValue(newValue)} size='large' />
              </Box>
              <Box>
                <Typography className='page-title'>Read only</Typography>
                <Rating readOnly value={value} name='read-only' size='large' />
              </Box>
              <Box>
                <Typography className='page-title'>Disabled</Typography>
                <Rating disabled value={value} name='disabled' size='large' />
              </Box>
              <Box>
                <Typography className='page-title'>No rating given</Typography>
                <Rating value={null} name='no-value' size='large' />
              </Box>
              <Box>
                <Typography className='page-title'>Custom rating</Typography>
                <Rating value={null} name='no-value' size='large' color='error' icon={<FaHeart />} emptyIcon={<FaRegHeart />} />
              </Box>
                         

              {showCode.ratingsBasic && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringRatingsBasic}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>

          {/* HALF RATINGS */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Half Ratings</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, ratingsHalf: !prev.ratingsHalf }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("ratingsHalf")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Box>
                <Typography className='page-title'>Half Ratings</Typography>
                <Rating defaultValue={2.5} precision={0.5} name='half-rating' size='large' />
              </Box>
              <Box>
                <Typography className='page-title'>Read only</Typography>
                <Rating readOnly defaultValue={2.5} precision={0.5} name='read-only' size='large' />
              </Box>                         

              {showCode.ratingsHalf && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringRatingsHalf}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>

          {/* HOVER FEEDBACK RATINGS */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Hover Feedback Ratings</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, ratingsHoverFeedback: !prev.ratingsHoverFeedback }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("ratingsHoverFeedback")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack direction='flex' alignItems='center' gap={3}>
                <Rating
                  value={value1}
                  precision={0.5}
                  name='hover-feedback'
                  onChange={(event, newValue1) => setValue1(newValue1)}
                  onChangeActive={(event, newHover1) => setHover1(newHover1)}
                  size='large'
                />
                {value1 !== null && <Typography className='page-title'>{labels[hover1 !== -1 ? hover1 : value1]}</Typography>}
              </Stack>                     

              {showCode.ratingsHoverFeedback && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringRatingsHoverFeedback}
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

export default RatingsPage;
