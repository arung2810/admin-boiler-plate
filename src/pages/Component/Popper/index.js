import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  Tooltip,
  Snackbar,
  Popper,
  Grid,
  Button,
  Fade,
} from '@mui/material';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { TbCopy } from 'react-icons/tb';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function PopperPage() {
  const [showCode, setShowCode] = useState({
    basicPopper: false,
    transitionsPopper: false,
    positionedPopper: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  // 🔹 States for Basic Popper
  const [basicAnchorEl, setBasicAnchorEl] = useState(null);
  const basicOpen = Boolean(basicAnchorEl);
  const basicId = basicOpen ? 'simple-popper' : undefined;

  // 🔹 States for Transitions Popper
  const [transitionsAnchorEl, setTransitionsAnchorEl] = useState(null);
  const [transitionsOpen, setTransitionsOpen] = useState(false);
  const transitionsId = transitionsOpen ? 'transition-popper' : undefined;

  // 🔹 States for Positioned Popper
  const [positionedAnchorEl, setPositionedAnchorEl] = useState(null);
  const [positionedOpen, setPositionedOpen] = useState(false);
  const [placement, setPlacement] = useState();

  // Handlers
  const handleBasicClick = (event) => {
    setBasicAnchorEl(basicAnchorEl ? null : event.currentTarget);
  };

  const handleTransitionsClick = (event) => {
    setTransitionsAnchorEl(event.currentTarget);
    setTransitionsOpen((prev) => !prev);
  };

  const handlePositionedClick = (newPlacement) => (event) => {
    setPositionedAnchorEl(event.currentTarget);
    setPositionedOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  // 🔹 Code strings (shortened for brevity — you already have them full)
  const codeStringBasicPopper = `
  import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.
        </Box>
      </Popper>
    </div>
  );
}
  `;
  const codeStringTransitionsPopper = `
  import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';

export default function TransitionsPopper() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              The content of the Popper.
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
`;
  const codeStringPositionedPopper = `import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Popper
        // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          <Button onClick={handleClick('top-start')}>top-start</Button>
          <Button onClick={handleClick('top')}>top</Button>
          <Button onClick={handleClick('top-end')}>top-end</Button>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={6}>
          <Button onClick={handleClick('left-start')}>left-start</Button>
          <br />
          <Button onClick={handleClick('left')}>left</Button>
          <br />
          <Button onClick={handleClick('left-end')}>left-end</Button>
        </Grid>
        <Grid container direction="column" sx={{ alignItems: 'flex-end' }} size={6}>
          <Grid>
            <Button onClick={handleClick('right-start')}>right-start</Button>
          </Grid>
          <Grid>
            <Button onClick={handleClick('right')}>right</Button>
          </Grid>
          <Grid>
            <Button onClick={handleClick('right-end')}>right-end</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          <Button onClick={handleClick('bottom-start')}>bottom-start</Button>
          <Button onClick={handleClick('bottom')}>bottom</Button>
          <Button onClick={handleClick('bottom-end')}>bottom-end</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
`;

  // 🔹 Copy handler
  const handleCopy = async (codeKey) => {
    const codeMap = {
      basicPopper: codeStringBasicPopper,
      transitionsPopper: codeStringTransitionsPopper,
      positionedPopper: codeStringPositionedPopper,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true }));
      setCopySuccess(true);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Popper
      </Typography>

      <Grid container spacing={3}>
        {/* Basic Popper */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className='page-title'>Basic Popper</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((p) => ({ ...p, basicPopper: !p.basicPopper }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy('basicPopper')}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>

            <Stack gap={4}>
              <Button className='btn primary-btn' aria-describedby={basicId} onClick={handleBasicClick}>
                Toggle Popper
              </Button>
              <Popper id={basicId} open={basicOpen} anchorEl={basicAnchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                  The content of the Popper.
                </Box>
              </Popper>

              {showCode.basicPopper && (
                <Box className="code-block">
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                    {codeStringBasicPopper}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>

        {/* Transitions Popper */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className='page-title'>Transitions Popper</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((p) => ({ ...p, transitionsPopper: !p.transitionsPopper }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy('transitionsPopper')}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>

            <Stack gap={4}>
              <Button className='btn primary-btn' aria-describedby={transitionsId} onClick={handleTransitionsClick}>
                Toggle Popper
              </Button>
              <Popper id={transitionsId} open={transitionsOpen} anchorEl={transitionsAnchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                      The content of the Popper.
                    </Box>
                  </Fade>
                )}
              </Popper>

              {showCode.transitionsPopper && (
                <Box className="code-block">
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                    {codeStringTransitionsPopper}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>

        {/* Positioned Popper */}
        <Grid size={{ xs: 12, md: 12 }}>
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className='page-title'>Positioned Popper</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((p) => ({ ...p, positionedPopper: !p.positionedPopper }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy('positionedPopper')}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>

            <Stack gap={4}>
              <Popper
                sx={{ zIndex: 1200 }}
                open={positionedOpen}
                anchorEl={positionedAnchorEl}
                placement={placement}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                      <Typography className='text-color' sx={{ p: 2 }}>The content of the Popper.</Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>

              <Stack direction='row' gap={3} justifyContent='center'>
                <Button className='btn primary-btn' onClick={handlePositionedClick('top-start')}>top-start</Button>
                <Button className='btn primary-btn' onClick={handlePositionedClick('top')}>top</Button>
                <Button className='btn primary-btn' onClick={handlePositionedClick('top-end')}>top-end</Button>
              </Stack>

              <Stack gap={5} direction='row' justifyContent="center">
                <Stack gap={3}>
                  <Button className='btn primary-btn' onClick={handlePositionedClick('left-start')}>left-start</Button>
                  <Button className='btn primary-btn' onClick={handlePositionedClick('left')}>left</Button>
                  <Button className='btn primary-btn' onClick={handlePositionedClick('left-end')}>left-end</Button>
                </Stack>
                <Stack gap={3}>
                  <Button className='btn primary-btn' onClick={handlePositionedClick('right-start')}>right-start</Button>
                  <Button className='btn primary-btn' onClick={handlePositionedClick('right')}>right</Button>
                  <Button className='btn primary-btn' onClick={handlePositionedClick('right-end')}>right-end</Button>
                </Stack>
              </Stack>

              <Stack direction='row' gap={3} justifyContent='center'>
                <Button className='btn primary-btn' onClick={handlePositionedClick('bottom-start')}>bottom-start</Button>
                <Button className='btn primary-btn' onClick={handlePositionedClick('bottom')}>bottom</Button>
                <Button className='btn primary-btn' onClick={handlePositionedClick('bottom-end')}>bottom-end</Button>
              </Stack>

              {showCode.positionedPopper && (
                <Box className="code-block">
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                    {codeStringPositionedPopper}
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
        autoHideDuration={2000}
        onClose={() => setCopySuccess(false)}
      />
    </>
  );
}

export default PopperPage;
