import React, { useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  Tooltip,
  Snackbar,
  Grid,
  Button,
  Popover,
} from "@mui/material";
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function PopoverPage() {
  const [showCode, setShowCode] = useState({
    basicPopover: false,
    mouseHoverPopover: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  // Code Snippets
  const codeStringBasicPopover = `
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Button aria-describedby={id} variant="contained" onClick={handleClick}>
      Open Popover
    </Button>
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Typography sx={{ p: 2 }} className="page-title">The content of the Popover.</Typography>
    </Popover>
  );
}`;
  const codeStringMouseHoverPopover = `
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function MouseHoverPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Hover with a Popover.
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }} className="page-title">I use Popover.</Typography>
      </Popover>
    </div>
  );
}`;

  // Copy Function
  const handleCopy = async (codeKey) => {
    const codeMap = {
      basicPopover: codeStringBasicPopover,
      mouseHoverPopover: codeStringMouseHoverPopover,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
       setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
      
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  // Basic Popover States
  const [basicAnchorEl, setBasicAnchorEl] = useState(null);
  const handleBasicClick = (event) => setBasicAnchorEl(event.currentTarget);
  const handleBasicClose = () => setBasicAnchorEl(null);
  const basicOpen = Boolean(basicAnchorEl);
  const basicId = basicOpen ? "simple-popover" : undefined;

  // Mouse Hover Popover States
  const [hoverAnchorEl, setHoverAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => setHoverAnchorEl(event.currentTarget);
  const handlePopoverClose = () => setHoverAnchorEl(null);
  const hoverOpen = Boolean(hoverAnchorEl);

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Popover
      </Typography>

      <Grid container spacing={3}>
        {/* BASIC POPOVER */}
        <Grid  size={{ xs: 12, md: 6 }}>
          <Paper elevation={0}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Typography variant="h6" className="page-title">Basic Popover</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton
                    className="icon-button"
                    onClick={() =>
                      setShowCode((prev) => ({
                        ...prev,
                        basicPopover: !prev.basicPopover,
                      }))
                    }
                  >
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton
                    className="icon-button"
                    onClick={() => handleCopy("basicPopover")}
                  >
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>

            <Stack gap={3}>
              <Button
                className="btn primary-btn"
                aria-describedby={basicId}
                variant="contained"
                onClick={handleBasicClick}
              >
                Open Popover
              </Button>
              <Popover
                id={basicId}
                open={basicOpen}
                anchorEl={basicAnchorEl}
                onClose={handleBasicClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }} className="page-title">
                  The content of the Popover.
                </Typography>
              </Popover>

              {showCode.basicPopover && (
                <Box className="code-block" sx={{ position: "relative" }}>
                  <SyntaxHighlighter
                    language="jsx"
                    style={vscDarkPlus}
                    wrapLongLines
                  >
                    {codeStringBasicPopover}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>

        {/* MOUSE HOVER POPOVER */}
        <Grid  size={{ xs: 12, md: 6 }}>
          <Paper elevation={0}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Typography variant="h6" className="page-title">Mouse Hover Popover</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton
                    className="icon-button"
                    onClick={() =>
                      setShowCode((prev) => ({
                        ...prev,
                        mouseHoverPopover: !prev.mouseHoverPopover,
                      }))
                    }
                  >
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton
                    className="icon-button"
                    onClick={() => handleCopy("mouseHoverPopover")}
                  >
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>

            <Stack gap={3}>
              <Button
                className="btn primary-btn"
                aria-owns={hoverOpen ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                Hover with a Popover
              </Button>
              <Popover
                id="mouse-over-popover"
                sx={{ pointerEvents: "none" }}
                open={hoverOpen}
                anchorEl={hoverAnchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }} className="page-title">I use Popover.</Typography>
              </Popover>

              {showCode.mouseHoverPopover && (
                <Box className="code-block" sx={{ position: "relative" }}>
                  <SyntaxHighlighter
                    language="jsx"
                    style={vscDarkPlus}
                    wrapLongLines
                  >
                    {codeStringMouseHoverPopover}
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
        autoHideDuration={2000}
        onClose={() => setCopySuccess(false)}
        message="Code copied!"        
      />
    </>
  );
}

export default PopoverPage;
